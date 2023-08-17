import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './src/navigation/navigation';
import {StatusBar} from 'react-native';
import {presetBase} from './src/utils/color';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={presetBase.colors.darkBlack} />
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
