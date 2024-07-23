import {View, TextInput, Image} from 'react-native';
import Dashboard from '../../components/StatusBar/Dashboard';

const GoalIcon = require('../../assets/images/icons/goal.png');
const Intake = require('../../assets/images/icons/intake.png');
const Time = require('../../assets/images/icons/time.png');
const Quote = require('../../assets/images/icons/quote.png');

const Goal = () => {
  return (
    <View className="bg-white flex-1">
      <Dashboard text="Goal Set" />
      <View className="my-4 px-4">
        <View className="flex flex-row justify-between items-center border border-gray-300 rounded-lg p-2 my-2">
          <View className="flex flex-row items-center">
            <Image source={GoalIcon} className="w-6 h-6 mr-2 ml-3" />
            <TextInput
              className="text-black text-left"
              placeholder="Set Goal/Target"
              keyboardType="numeric"
              placeholderTextColor={'gray'}
            />
          </View>
        </View>
        <View className="flex flex-row justify-between items-center border border-gray-300 rounded-lg p-2 my-2">
          <View className="flex flex-row items-center">
            <Image source={Intake} className="w-6 h-6 mr-2 ml-3" />
            <TextInput
              className="text-black"
              placeholder="Intake per time"
              keyboardType="numeric"
              placeholderTextColor={'gray'}
            />
          </View>
        </View>
        <View className="flex flex-row justify-between">
          <View className="flex flex-row items-center border border-gray-300 rounded-lg p-2 my-2 flex-1 mr-1">
            <Image source={Time} className="w-6 h-6 mr-2 ml-3" />
            <TextInput
              className="text-black flex-1"
              placeholder="From time"
              placeholderTextColor={'gray'}
            />
          </View>
          <View className="flex flex-row items-center border border-gray-300 rounded-lg p-2 my-2 flex-1 ml-1">
            <Image source={Time} className="w-6 h-6 mr-2 ml-3" />
            <TextInput
              className="text-black flex-1"
              placeholder="To time"
              placeholderTextColor={'gray'}
            />
          </View>
        </View>
        <View className="flex flex-row items-center border border-gray-300 rounded-lg p-4 my-2">
          <Image source={Quote} className="w-6 h-6 mr-2" />
          <TextInput
            className="text-black flex-1"
            placeholder="Motivation quote"
            placeholderTextColor={'gray'}
            multiline
          />
        </View>
      </View>
    </View>
  );
};

export default Goal;
