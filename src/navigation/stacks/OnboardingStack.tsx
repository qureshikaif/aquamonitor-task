import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Onboarding/Login';
import Gender from '../../screens/Onboarding/Gender';
import Weight from '../../screens/Onboarding/Weight';
import SleepRoutine from '../../screens/Onboarding/SleepRoutine';
import {RootTabs} from '../tabs/RootTabs';

const Stack = createNativeStackNavigator();

export const OnboardingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        statusBarColor: 'white',
        statusBarStyle: 'dark',
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Gender" component={Gender} />
      <Stack.Screen name="Weight" component={Weight} />
      <Stack.Screen name="SleepRoutine" component={SleepRoutine} />
      <Stack.Screen name="RootTabs" component={RootTabs} />
    </Stack.Navigator>
  );
};
