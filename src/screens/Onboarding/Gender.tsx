import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import Onboarding from '../../components/StatusBar/Onboarding';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {OnboardingType} from '../../navigation/types/OnboardingType';

const Male = require('../../assets/images/male.png');
const Female = require('../../assets/images/female.png');

const Gender: React.FC = () => {
  const navigation = useNavigation<NavigationProp<OnboardingType>>();
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  return (
    <View className="bg-white h-screen p-4">
      <Onboarding />
      <Text className="text-black mt-14 text-lg font-semibold">
        Your Gender
      </Text>
      <Text className="text-black mt-3 text-base">
        It is a long established fact that a reader will be distracted by the
        readable
      </Text>
      <View className="flex flex-row justify-between px-12 py-32">
        <View className="flex">
          <Pressable
            className={`border ${
              selectedGender === 'Male'
                ? 'border-[#0188DD]'
                : 'border-[#D9D9D9]'
            } bg-[#F8F8F8] p-4 rounded-md`}
            onPress={() => setSelectedGender('Male')}>
            <Image source={Male} />
          </Pressable>
          <Text className="text-black text-center text-base font-semibold">
            Male
          </Text>
        </View>
        <View>
          <Pressable
            className={`border ${
              selectedGender === 'Female'
                ? 'border-[#0188DD]'
                : 'border-[#D9D9D9]'
            } bg-[#F8F8F8] p-5 rounded-md`}
            onPress={() => setSelectedGender('Female')}>
            <Image source={Female} />
          </Pressable>
          <Text className="text-black text-center text-base font-semibold">
            Female
          </Text>
        </View>
      </View>
      <Pressable
        android_ripple={{color: '#0168DD'}}
        className="bg-[#0188DD] text-white text-center rounded-md p-3 my-4 flex items-center justify-center"
        onPress={() => navigation.navigate('Weight')}>
        <Text className="font-semibold text-lg text-white">Next</Text>
      </Pressable>
    </View>
  );
};

export default Gender;
