import {View, Text, Image} from 'react-native';
import React from 'react';

const Hamburger = require('../../assets/images/icons/hamburger.png');
const Notifiction = require('../../assets/images/icons/notification.png');

type DashboardProps = {
  text: string;
};

const Dashboard = ({text}: DashboardProps) => {
  return (
    <View className="flex flex-row items-center justify-between px-4 py-6">
      <Image source={Hamburger} className="w-7 h-7" />
      <Text className="text-black text-lg font-semibold">{text}</Text>
      <Image source={Notifiction} className="w-7 h-7" />
    </View>
  );
};

export default Dashboard;
