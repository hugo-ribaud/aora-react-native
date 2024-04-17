// @ts-nocheck
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className='flex flex-1 items-center justify-center bg-white'>
      <Text className='text-3xl font-pblack'>Aora</Text>
      <StatusBar style='auto' />
      <Link
        href='/profile'
        className='text-blue-500 hover:text-blue-700'
      >
        Go to Profile
      </Link>
    </View>
  );
}
