import React, {FunctionComponent} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import ROUTE_NAME from './navigation/navigation-constants';

const WelcomeScreenComponent: FunctionComponent<any> = ({navigation}) => {
  const navigateToLoggedInScreen = () => {
    navigation.navigate(ROUTE_NAME.LOGGEDIN_SCREEN_STACK, {
      screen: ROUTE_NAME.BOTTOM_TABS,
    }); // Navigate to the BOTTOM_TABS screen in LOGGEDIN_SCREEN_STACK
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>Welcome Screen</Text>
      <Button
        onPress={() => navigateToLoggedInScreen()}
        title={'Navigate to Home Screen'}
      />
    </View>
  );
};

export default WelcomeScreenComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
