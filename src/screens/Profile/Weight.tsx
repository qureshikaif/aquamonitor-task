import {View, Text, Image, Pressable, TextInput} from 'react-native';
import Onboarding from '../../components/StatusBar/Onboarding';

const WeightIcon = require('../../assets/images/weight.png');

const Weight = () => {
  return (
    <View className="bg-white h-screen p-4">
      <Onboarding />
      <Text className="text-black mt-14 text-lg font-semibold">
        Your Weight
      </Text>
      <Text className="text-black mt-3 text-base">
        It is a long established fact that a reader will be distracted by the
        readable
      </Text>
      <View className="flex flex-row justify-center py-32">
        <View>
          <Pressable className="border border-[#D9D9D9] p-5 rounded-md">
            <Image source={WeightIcon} />
          </Pressable>
          <TextInput
            className="text-black text-center text-base font-semibold border border-[#D9D9D9]"
            placeholder="60 KG"
            placeholderTextColor={'gray'}
          />
        </View>
      </View>
      <Pressable
        className="bg-[#0188DD] text-white text-center rounded-md p-3 my-4 flex items-center justify-center"
        onPress={() => console.log('Login button pressed')}>
        <Text className="font-semibold text-lg text-white">Next</Text>
      </Pressable>
    </View>
  );
};

export default Weight;