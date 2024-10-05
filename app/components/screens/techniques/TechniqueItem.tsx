import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTypedNavigation } from "@/hooks/useTypedNavigation";
import { TypeRootStackParamList } from "@/navigation/navigation.types";

interface TechniqueItemProps {
  title: string;
  path: keyof TypeRootStackParamList | undefined;
  description: string;
  isExpanded: boolean;
  onPress: () => void;
  showGetStarted: boolean;
}

const TechniqueItem: React.FC<TechniqueItemProps> = ({
  title,
  path,
  description,
  isExpanded,
  onPress,
  showGetStarted,
}) => {
  const { navigate } = useTypedNavigation();

  const handleGetStarted = () => {
    if (path) {
      navigate(path);
    }
  };
  
  return (
    <View className="border-b border-gray-200 mb-4">
      <TouchableOpacity
        onPress={onPress}
        className="flex-row justify-between items-center py-2"
      >
        <View className="flex-row items-center">
          <Feather name="book" size={20} color="black" />
          <Text className="font-semibold text-2xl ml-3">{title}</Text>
        </View>
        <Feather
          name={isExpanded ? "chevron-up" : "chevron-down"}
          size={20}
          color="black"
        />
      </TouchableOpacity>

      {isExpanded && (
        <View className="mb-4">
          <Text className="text-gray-600 text-lg my-2">{description}</Text>
          {showGetStarted && (
            <TouchableOpacity
              onPress={handleGetStarted} // Переход по роуту при нажатии
              className="bg-black text-white py-2 px-4 mt-2 rounded-full self-start"
            >
              <Text className="text-white font-semibold">Get Started</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default TechniqueItem;
