import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {OnboardingType} from '../../navigation/types/OnboardingType';
import CustomTextInput from '../../components/ui/CustomTextInput';
import CheckBox from '@react-native-community/checkbox';

const LoginImage = require('../../assets/images/login.png');

const Login = () => {
  const navigation = useNavigation<NavigationProp<OnboardingType>>();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView className="flex-grow">
        <View className="bg-white h-screen p-4">
          <Text className="text-black font-semibold text-2xl my-12">
            Hi, Welcome to AquaMonitor
          </Text>
          <Image source={LoginImage} className="mx-auto mb-8 w-36 h-36" />
          <CustomTextInput label="Email" placeholder="Enter your email" />
          <View className="h-8" />
          <CustomTextInput
            label="Password"
            placeholder="Enter your password"
            secureTextEntry
          />
          <View className="flex flex-row justify-between my-2">
            <View className="flex flex-row items-center -ml-1">
              <CheckBox
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
                tintColors={{true: '#0188DD', false: '#D9D9D9'}}
              />
              <Text className="text-gray-600">Remember Me</Text>
            </View>
            <Text className="text-blue-500 font-semibold text-sm">
              Forgot Password?
            </Text>
          </View>
          <Pressable
            className="bg-blue-500 text-white text-center rounded-md p-3 my-4 flex items-center justify-center"
            onPress={() => navigation.navigate('Gender')}>
            <Text className="font-semibold text-lg text-white">Log in</Text>
          </Pressable>
          <View className="flex flex-row items-center justify-center my-4">
            <View className="border-b border-gray-300 w-1/3" />
            <Text className="text-gray-600 mx-2">Login with</Text>
            <View className="border-b border-gray-300 w-1/3" />
          </View>
          <View className="flex flex-row justify-center my-4 space-x-5">
            <Pressable className="mx-2">
              <Image
                source={require('../../assets/images/google.png')}
                className="w-10 h-10"
              />
            </Pressable>
            <Pressable className="mx-2">
              <Image
                source={require('../../assets/images/facebook.png')}
                className="w-10 h-10"
              />
            </Pressable>
            <Pressable className="mx-2">
              <Image
                source={require('../../assets/images/instagram.png')}
                className="w-10 h-10"
              />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
