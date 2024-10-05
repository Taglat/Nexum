import { View, Text, Pressable } from "react-native";
import React from "react";
import { useTypedNavigation } from "@/hooks/useTypedNavigation";
import Button from "@/components/ui/button/Button";
import { useForm } from "react-hook-form";
import { IAuthFormData } from "./auth.interface";
import Field from "@/components/ui/field/Field";
import { validEmail } from "./email.regex";
import BackButton from "@/components/ui/back-button/BackButton";

const Login = () => {
  const { handleSubmit, reset, control } = useForm<IAuthFormData>({
    mode: "onChange",
  });

  return (
    <View className="h-full w-full bg-white pt-14 pb-10 px-4 flex-col justify-between">
      <View className="flex-col">
        <View className="flex-row w-full mb-3">
          <BackButton />
          <Text className="text-3xl ml-3 font-bold">Login</Text>
        </View>
        <Text className="text-xl mb-16">Just your student ID is needed.</Text>
        <View>
          <Field<IAuthFormData>
            placeholder="Email"
            control={control}
            name="email"
            rules={{
              required: "Email is required!",
              pattern: {
                value: validEmail,
                message: "Please enter a valid email address",
              },
            }}
            keyboardType="email-address"
          />
          <Field<IAuthFormData>
            placeholder="Password"
            control={control}
            name="password"
            secureTextEntry
            rules={{
              required: "Password is required!",
              minLength: {
                value: 6,
                message: "Password should be minimum 6 characters long",
              },
            }}
          />
        </View>
      </View>
      <Button>Next</Button>
    </View>
  );
};

export default Login;
