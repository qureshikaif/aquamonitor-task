import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import Onboarding from '../../components/StatusBar/Onboarding';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {OnboardingType} from '../../navigation/types/OnboardingType';

const WeightIcon = require('../../assets/images/weight.png');

const Weight = () => {
  const navigation = useNavigation<NavigationProp<OnboardingType>>();
  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView className="flex-grow">
        <View className="bg-white h-screen p-4">
          <Onboarding />
          <Text className="text-black mt-14 text-lg font-semibold">
            Your Weight
          </Text>
          <Text className="text-black mt-3 text-base">
            It is a long established fact that a reader will be distracted by
            the readable
          </Text>
          <View className="flex justify-center py-24">
            <View className="mx-auto">
              <Pressable className="border border-[#D9D9D9] bg-[#F8F8F8] p-5 rounded-md w-28">
                <Image source={WeightIcon} />
              </Pressable>
            </View>
            <TextInput
              className="text-black text-center text-base border border-[#D9D9D9] bg-[#F8F8F8] mt-5 w-2/3 mx-auto"
              placeholder="60 KG"
              placeholderTextColor={'gray'}
            />
          </View>
          <Pressable
            className="bg-[#0188DD] text-white text-center rounded-md p-3 my-4 flex items-center justify-center"
            onPress={() => navigation.navigate('SleepRoutine')}>
            <Text className="font-semibold text-lg text-white">Next</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Weight;
