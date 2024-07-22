import React from 'react';
import Weight from './src/screens/Profile/Weight';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Weight />
    </NavigationContainer>
  );
}

export default App;
