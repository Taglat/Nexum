import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import Layout from "@/components/layout/Layout";
import { Feather } from "@expo/vector-icons";
import HomeCard from "@/components/ui/home-card/HomeCard";
import { useTypedNavigation } from "@/hooks/useTypedNavigation";

const Home = () => {
  const {navigate} = useTypedNavigation(); 
  return (
    <Layout noScrollChildren={(
      <>
      <View className="flex-row justify-between mb-7">
        <Text className="text-3xl mr-3">Good Day</Text>
        <Feather name="bell" size={26} color="#374151" />
      </View>
      <Text className="text-lg mb-7">
        Here some of the ways you can find help to grow in your studies
      </Text>
      </>
    )}>
      

      <ScrollView className="flex-col">
        <View className="flex flex-col">
          <Pressable onPress={() => navigate('Techniques')}> 
            <HomeCard
              icon="clock"
              iconColor="#333"
              title="Techniques"
              description="Use study techniques to increase your productivity"
              bgColor="#C4B5FD"
            />
          </Pressable>
          <HomeCard
            icon="book"
            iconColor="#333"
            title="Mind-mapping & Notes"
            description="Make notes of important things to keep it unforgettable"
            bgColor="#FDBA74"
          />
          <HomeCard
            icon="cpu"
            iconColor="#333"
            title="Nexum Briefly (AI)"
            description="An AI that summarizes and provides concise information"
            bgColor="#93C5FD"
          />
          <HomeCard
            icon="check-circle"
            iconColor="#333"
            title="Habits Tracker"
            description="Form new habits and track your habit streak"
            bgColor="#22CB68"
          />
        </View>
      </ScrollView>
    </Layout>
  );
};

export default Home;
