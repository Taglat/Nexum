import { View, Text, Image } from 'react-native';
import React from 'react';
import Button from '@/components/ui/button/Button';
import { useTypedNavigation } from '@/hooks/useTypedNavigation';

const Auth = () => {
  const {navigate} = useTypedNavigation();

  return (
    <View className='h-full w-full bg-white pt-14 pb-10 px-4 flex-col justify-between'>
      <View className='items-center'>
        <Image source={require('@/assets/auth-img.png')} />
      </View>
      
      <View className=''>
          <Text className='mb-2 text-lg text-gray-500'>Welcome to</Text>
          <Text className='text-2xl font-bold text-black'>NEXUMSTUDY</Text>
      </View>

      <View className=''>
        <Button onPress={() => navigate('Login')}>Login</Button>
        <Button className='border bg-white' textClassName="text-black" onPress={() => navigate('Register')}>Register</Button>
      </View>
    </View>
  );
};

export default Auth;
