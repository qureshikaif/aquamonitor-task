import React from 'react';
import {ImageBackground, ScrollView, View, Text} from 'react-native';
import Dashboard from '../../components/StatusBar/Dashboard';
import WeeklyOverview from '../../components/WeeklyOverview';

const Water = require('../../assets/images/water.png');

const HomeMain = () => {
  return (
    <ScrollView>
      <Dashboard text="Dashboard" />
      <View className="px-4">
        <View className="items-center my-5">
          <ImageBackground
            source={Water}
            className="w-40 h-40 pt-5 items-center">
            <View className="items-center">
              <Text className="text-black text-sm">Today</Text>
              <Text className="text-black text-lg font-bold">Drink Target</Text>
              <Text className="text-blue-500 text-base font-bold">3000ml</Text>
            </View>
          </ImageBackground>
        </View>
        <WeeklyOverview />
      </View>
    </ScrollView>
  );
};

export default HomeMain;
