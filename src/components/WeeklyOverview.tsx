import {View, Text, Image} from 'react-native';

const Chevron = require('../assets/images/icons/chevron-right.png');

const WeeklyOverview = () => {
  return (
    <View className="border border-gray-300 rounded-md p-4">
      <Text className="text-lg font-semibold text-black">Weekly Overview</Text>
      <Text className="text-black">
        It is a long established fact that a reader will be distracted by the
        readable
      </Text>
      <View className="w-full h-[0.5] bg-gray-900 my-4" />
      <View className="flex flex-row justify-between items-center">
        <View>
          <Text className="text-black text-base">Set Daily Reminder</Text>
          <Text className="text-black text-sm">
            Reminder after you reached daily limit
          </Text>
        </View>
        <Image source={Chevron} />
      </View>
    </View>
  );
};

export default WeeklyOverview;
