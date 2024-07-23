import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Onboarding from '../../components/StatusBar/Onboarding';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {OnboardingType} from '../../navigation/types/OnboardingType';

const Wakeup = require('../../assets/images/wakeup.png');
const Sleep = require('../../assets/images/sleep.png');

const SleepRoutine: React.FC = () => {
  const navigation = useNavigation<NavigationProp<OnboardingType>>();

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView className="flex-grow">
        <View className="bg-white h-screen p-4">
          <Onboarding />
          <Text className="text-black mt-14 text-lg font-semibold">
            Wakeup and Sleep Time
          </Text>
          <Text className="text-black mt-3 text-base">
            It is a long established fact that a reader will be distracted by
            the readable
          </Text>
          <View className="flex flex-row justify-between px-6 py-24 space-x-6">
            <View className="flex">
              <Pressable className="border border-[#D9D9D9] bg-[#F8F8F8] p-4 h-32 rounded-md">
                <Image source={Wakeup} />
              </Pressable>
              <TextInput
                placeholder="12:00 pm"
                className="border border-[#D9D9D9] bg-[#F8F8F8] text-black text-center mt-5"
                placeholderTextColor={'black'}
              />
            </View>
            <View>
              <Pressable className="border border-[#D9D9D9] bg-[#F8F8F8] p-5 h-32 rounded-md flex items-center justify-center">
                <Image source={Sleep} />
              </Pressable>
              <TextInput
                placeholder="02:00 am"
                className="border border-[#D9D9D9] bg-[#F8F8F8] text-black text-center mt-5"
                placeholderTextColor={'black'}
              />
            </View>
          </View>
          <Pressable
            className="bg-[#0188DD] text-white text-center rounded-md p-3 my-4 flex items-center justify-center"
            onPress={() => navigation.navigate('RootTabs')}>
            <Text className="font-semibold text-lg text-white">Next</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SleepRoutine;
