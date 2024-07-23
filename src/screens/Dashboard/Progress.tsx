import React, {useState} from 'react';
import {Image, Text, View, ScrollView} from 'react-native';
import Dashboard from '../../components/StatusBar/Dashboard';
import WaterStats from '../../components/WaterStats';
import CheckBox from '@react-native-community/checkbox';

const Bottle = require('../../assets/images/icons/bottle.png');

interface Record {
  amount: string;
  time: string;
  completed: boolean;
}

const records: Record[] = [
  {amount: '20ml', time: '08:35 pm', completed: false},
  {amount: '30ml', time: '08:35 pm', completed: false},
  {amount: '80ml', time: '08:35 pm', completed: false},
  {amount: '150ml', time: '08:35 pm', completed: false},
  {amount: '100ml', time: '08:35 pm', completed: false},
  {amount: '50ml', time: '06:00 pm', completed: true},
  {amount: '300ml', time: '08:35 pm', completed: true},
  {amount: '200ml', time: '06:00 pm', completed: true},
  {amount: '100ml', time: '08:35 pm', completed: false},
  {amount: '50ml', time: '06:00 pm', completed: true},
];

const Progress: React.FC = () => {
  const [checkboxStates, setCheckboxStates] = useState<boolean[]>(
    records.map(record => record.completed),
  );

  const handleCheckboxChange = (index: number, value: boolean) => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = value;
    setCheckboxStates(newCheckboxStates);
  };

  return (
    <View className="flex-1 bg-white">
      <Dashboard text="Progress & Statistics" />
      <ScrollView className="px-4 flex-1">
        <WaterStats />
        <View className="flex flex-row justify-between items-center">
          <Text className="text-black text-lg font-bold my-4">
            Today's Record
          </Text>
          <View className="flex items-center">
            <Text className="text-black text-base">Completed</Text>
            <Text className="font-extrabold text-[#0197F6]">1500 ml</Text>
          </View>
        </View>
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

export default Progress;
