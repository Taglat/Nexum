import { Control } from "react-hook-form";
import { IAuthFormData } from "./auth.interface";
import { FC } from "react";
import Field from "@/components/ui/field/Field";
import { validEmail } from "./email.regex";

interface IAuthFields {
  control: Control<IAuthFormData>;
  isPassRequired?: boolean;
}

const AuthFields: FC<IAuthFields> = ({control, isPassRequired}) => {
  return (
    <>
      <Field<IAuthFormData> 
        placeholder="Email"
        control={control}
        name="email"
        rules={{
          required: "Email is required",
          pattern: {
            value: validEmail,
            message: "Please enter a valid email address"
          }
        }}
        keyboardType='email-address'
      />
      <Field<IAuthFormData>
        placeholder='Password'
        control={control}
        name='password'
        secureTextEntry
        rules={{
					required: 'Password is required!',
					minLength: {
						value: 6,
						message: 'Password should be minimum 6 characters long'
					}
				}}
      />
    </>
  )
}

export default AuthFields