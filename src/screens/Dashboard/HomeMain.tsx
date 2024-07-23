import React, {useState} from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import Dashboard from '../../components/StatusBar/Dashboard';
import WeeklyOverview from '../../components/WeeklyOverview';
import CheckBox from '@react-native-community/checkbox';
import WaterStats from '../../components/WaterStats';

const Bottle = require('../../assets/images/icons/bottle.png');

const records = [
  {amount: '100ml', time: '08:35 pm', completed: true},
  {amount: '50ml', time: '06:00 pm', completed: true},
];

const HomeMain = () => {
  const [checkboxStates, setCheckboxStates] = useState(
    records.map(record => record.completed),
  );

  const handleCheckboxChange = (index, value) => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = value;
    setCheckboxStates(newCheckboxStates);
  };

  return (
    <View className="flex-1">
      <Dashboard text="Dashboard" />
      <ScrollView className="px-4 flex-1">
        <WaterStats />
        <WeeklyOverview />
        <Text className="text-black text-lg font-semibold my-4">
          Today's Record
        </Text>
        {records.map((record, index) => (
          <View
            key={index}
            className="flex flex-row justify-between items-center my-2">
            <View className="flex flex-row items-center space-x-3">
              <Image source={Bottle} className="w-8 h-8" />
              <Text className="text-black font-medium">{record.amount}</Text>
            </View>
            <View className="flex flex-row items-center space-x-3">
              <Text className="text-black font-medium">{record.time}</Text>
              <CheckBox
                value={checkboxStates[index]}
                onValueChange={value => handleCheckboxChange(index, value)}
                tintColors={{false: '#0197F6', true: '#0197F6'}}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeMain;
