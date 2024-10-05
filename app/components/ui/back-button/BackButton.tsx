import { Pressable } from "react-native";
import React from "react";
import { useTypedNavigation } from "@/hooks/useTypedNavigation";
import AntDesign from '@expo/vector-icons/AntDesign';

interface IBackButton {
  className?: string;
} 

const BackButton = ({className}:IBackButton) => {
  const { goBack } = useTypedNavigation();

  return (
    <Pressable onPress={goBack} className={className}>
      <AntDesign name="back" size={25} color="black" />
    </Pressable>
  );
};

export default BackButton;
