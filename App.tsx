import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './src/navigation/navigation';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import {presetBase} from './src/utils/color';
import {getDataFromStorage, LOGGEDIN_USER} from './src/utils/utils';
import ROUTE_NAME from './src/navigation/navigation-constants';

const App = () => {
  const [initialRoute, setInitialRoute] = useState<string | null>(null);
  useEffect(() => {
    (async () => {
      SplashScreen.hide();
      const user = await getDataFromStorage(LOGGEDIN_USER);
      console.log(user, 'user');
      setInitialRoute(
        user === null
          ? ROUTE_NAME.WELCOME_SCREEN_STACK
          : ROUTE_NAME.LOGGEDIN_SCREEN_STACK,
      );
    })();
  }, []);
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={presetBase.colors.darkBlack} />
      {initialRoute && <MainStack initialRoute={initialRoute} />}
    </NavigationContainer>
  );
};

export default App;
