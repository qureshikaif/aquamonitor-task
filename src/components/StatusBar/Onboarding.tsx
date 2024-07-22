import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';

const BackArrow = require('../../assets/images/icons/arrow-left.png');

const Onboarding = () => {
  return (
    <View className="flex flex-row items-center justify-between">
      <Pressable>
        <Image source={BackArrow} className="w-7 h-7" />
      </Pressable>
      <Pressable className="bg-[#D9D9D9] px-4 py-1 rounded-lg">
        <Text className="text-black font-medium text-">Skip</Text>
      </Pressable>
    </View>
  );
};

export default Onboarding;
