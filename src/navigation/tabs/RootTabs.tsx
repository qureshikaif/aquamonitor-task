import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, Text, View} from 'react-native';
import HomeMain from '../../screens/Dashboard/HomeMain';
import Progress from '../../screens/Dashboard/Progress';
import Goal from '../../screens/Dashboard/Goal';
import Profile from '../../screens/Dashboard/Profile';

const Tab = createBottomTabNavigator();

const icons: {[index: string]: any} = {
  Dashboard: require('../../assets/images/icons/home.png'),
  DashboardFocused: require('../../assets/images/icons/home-focused.png'),
  Progress: require('../../assets/images/icons/progress.png'),
  ProgressFocused: require('../../assets/images/icons/progress-focused.png'),
  Goal: require('../../assets/images/icons/goal.png'),
  GoalFocused: require('../../assets/images/icons/goal-focused.png'),
  Profile: require('../../assets/images/icons/profile.png'),
  ProfileFocused: require('../../assets/images/icons/profile-focused.png'),
};

const styles = StyleSheet.create({
  tabBarLabel: {
    color: '#717A8B',
    fontSize: 12,
    textTransform: 'uppercase',
    fontFamily: 'Poppins-SemiBold',
    maxWidth: 100,
  },
  tabBarLabelFocused: {
    color: 'white',
  },
});

export const tabBarStyle = {
  borderTopWidth: 0,
  paddingBottom: 10,
  height: 80,
  paddingHorizontal: 10,
};

const TabBarIcon = (focused: boolean, routeName: string) => {
  const iconSource = focused ? icons[`${routeName}Focused`] : icons[routeName];
  //   return <Image source={iconSource} alt="Tab Bar Icons" />;
  return (
    <View className={`${focused ? 'bg-[#0188DD] p-4 rounded-full' : ''}`}>
      <Image source={iconSource} alt="Tab Bar Icons" />
    </View>
  );
};

const TabBarStyle = (focused: boolean, routeName: string) => {
  return (
    <Text
      style={
        focused
          ? {...styles.tabBarLabel, ...styles.tabBarLabelFocused}
          : styles.tabBarLabel
      }
      ellipsizeMode="tail"
      numberOfLines={1}>
      {routeName}
    </Text>
  );
};

const screens = [
  {name: 'Dashboard', component: HomeMain},
  {name: 'Progress', component: Progress},
  {name: 'Goal', component: Goal},
  {name: 'Profile', component: Profile},
];

export const RootTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => TabBarIcon(focused, route.name),
        tabBarLabel: ({focused}) => TabBarStyle(focused, route.name),
        headerShown: false,
        tabBarStyle,
        lazy: true,
        tabBarHideOnKeyboard: true,
      })}>
      {screens.map((screen, index) => (
        <Tab.Screen
          key={index}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Tab.Navigator>
  );
};
