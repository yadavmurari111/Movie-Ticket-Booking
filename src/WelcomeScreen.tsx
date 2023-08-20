import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ROUTE_NAME from './navigation/navigation-constants';
import {presetBase} from './utils/color';
import {LOGGEDIN_USER, storeDataToAsyncStorage} from './utils/utils';

const WelcomeScreenComponent = ({navigation}: any) => {
  const navigateToLoggedInScreen = () => {
    navigation.navigate(ROUTE_NAME.LOGGEDIN_SCREEN_STACK, {
      screen: ROUTE_NAME.BOTTOM_TABS,
    });
  };

  const handleGoogleLogin = async () => {
    // Implement Google login logic here
    // After successful login, navigate to the next screen
    navigateToLoggedInScreen();
    await storeDataToAsyncStorage(LOGGEDIN_USER, {username: 'murari123'});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MyCinema</Text>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW92aWUlMjBib29raW5nJTIwYXBwJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        }}
        style={styles.logo}
      />
      <Text style={styles.subtitle}>Sign in to get started</Text>
      <TouchableOpacity onPress={handleGoogleLogin} style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: presetBase.colors.darkBlack,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: presetBase.colors.white,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 16,
    borderRadius: 100,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    color: presetBase.colors.white,
  },
  signInButton: {
    backgroundColor: presetBase.colors.redOnLight,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  signInButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: presetBase.colors.white,
  },
});

export default WelcomeScreenComponent;
