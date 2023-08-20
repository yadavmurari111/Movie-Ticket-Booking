import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './src/navigation/navigation';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import {presetBase} from './src/utils/color';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={presetBase.colors.darkBlack} />
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
