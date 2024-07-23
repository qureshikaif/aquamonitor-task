import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {OnboardingStack} from './src/navigation/stacks/OnboardingStack';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <OnboardingStack />
    </NavigationContainer>
  );
}

export default App;
