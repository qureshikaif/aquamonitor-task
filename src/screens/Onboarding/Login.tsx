import {View, Text, Image, Pressable} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {OnboardingType} from '../../navigation/types/OnboardingType';
import CustomTextInput from '../../components/CustomTextInput';

const LoginImage = require('../../assets/images/login.png');

const Login = () => {
  const navigation = useNavigation<NavigationProp<OnboardingType>>();
  return (
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
        <View className="flex flex-row items-center">
          {/* <CheckBox value={false} /> */}
          <Text className="ml-2 text-gray-600">Remember Me</Text>
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
        <View className="border-b border-gray-300 w-1/4" />
        <Text className="text-gray-600 mx-2">Login with</Text>
        <View className="border-b border-gray-300 w-1/4" />
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
  );
};

export default Login;
