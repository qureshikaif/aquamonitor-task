import {View, Text, ImageBackground} from 'react-native';
import React from 'react';

const Water = require('../assets/images/water.png');

const WaterStats = () => {
  return (
    <View className="items-center my-5">
      <ImageBackground source={Water} className="w-40 h-40 pt-5 items-center">
        <View className="items-center">
          <Text className="text-black text-sm">Today</Text>
          <Text className="text-black text-lg font-bold">Drink Target</Text>
          <Text className="text-blue-500 text-base font-bold">3000ml</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WaterStats;
