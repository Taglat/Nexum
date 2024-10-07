import React from 'react'; 
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TypeFeatherIconNames } from '@/types/icon.interface';

interface HomeCardProps {
  icon: TypeFeatherIconNames;
  iconColor: string;
  title: string;
  description: string;
  bgColor: string;
}

const HomeCard: React.FC<HomeCardProps> = ({ icon, iconColor, title, description, bgColor }) => {
  return (
    <View className='rounded-lg shadow-md p-6 mb-6 w-full flex-row items-center' style={{ backgroundColor: bgColor }}>
      <View className='flex-1 mr-4'>
        <Text className='text-xl font-semibold text-black'>{title}</Text>
        <Text className='mt-2 text-lg text-gray-700'>{description}</Text>
      </View>
      <View className='flex items-center justify-center' style={{ padding: 10, marginRight: 10 }}>
        <Feather name={icon} size={40} color={iconColor} />
      </View>
    </View>
  );
};

export default HomeCard;
