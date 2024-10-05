import Layout from "@/components/layout/Layout";
import React, { useState } from "react";
import { View, Text, TextInput, Switch } from "react-native";

const Profile = () => {
  const [name, setName] = useState("Name Surname");
  const [isAvailableOnMap, setIsAvailableOnMap] = useState(false);

  return (
    <Layout>
      <View className="flex-1 bg-white">
        <Text className="text-3xl mb-7">My Account</Text>

        <View className="mb-4">
          <TextInput
            value={name}
            onChangeText={setName}
            className="text-xl mb-2 border-b border-gray-300"
          />
          <View className="flex-row items-center">
            <View className="flex-1 h-2 bg-gray-200 rounded-full mr-2">
              <View className="h-2 bg-yellow-500 rounded-full w-1/2" />
            </View>
            <Text className="text-xl text-gray-600">lvl 5</Text>
          </View>
        </View>

        <Text className="text-xl mb-4">A little bit about you</Text>
        <TextInput
          className="border border-gray-300 rounded-md p-4 mb-4 text-gray-600 text-lg"
          placeholder="Write about your education and career goals."
          multiline
          numberOfLines={4}
        />

        <View className="flex-row items-center justify-between border border-gray-300 rounded-md p-4 mb-4">
          <Text className="text-xl">Student ID</Text>
          <Text className="text-xl font-bold">23456788EG</Text>
        </View>

        <View className="flex-row items-center justify-between">
          <Text className="text-lg">Make me available on the map</Text>
          <Switch
            value={isAvailableOnMap}
            onValueChange={(value) => setIsAvailableOnMap(value)}
          />
        </View>
      </View>
    </Layout>
  );
};

export default Profile;
