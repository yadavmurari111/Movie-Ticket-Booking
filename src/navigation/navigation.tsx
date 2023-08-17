import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreenComponent from '../WelcomeScreen';
import HomeScreenComponent from '../HomeScreen';
import ProfileScreenComponent from '../ProfileScreen';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ROUTE_NAME from './navigation-constants';
import {presetBase} from '../utils/color';

import SearchScreenComponent from '../SearchScreen';
import TicketScreenComponent from '../TicketScreen';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTE_NAME.WELCOME_SCREEN_STACK}
        component={WelcomeScreenStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTE_NAME.LOGGEDIN_SCREEN_STACK}
        component={LoggedInScreenStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const WelcomeScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTE_NAME.WELCOME_SCREEN}
        component={WelcomeScreenComponent}
      />
    </Stack.Navigator>
  );
};

export const LoggedInScreenStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        headerShadowVisible: true,
      }}>
      <Stack.Screen
        name={ROUTE_NAME.BOTTOM_TABS}
        component={BottomTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTE_NAME.HOME_TAB}
        component={HomeScreenComponent}
      />
      <Stack.Screen
        name={ROUTE_NAME.SEARCH_TAB}
        component={SearchScreenComponent}
      />
      <Stack.Screen
        name={ROUTE_NAME.TICKET_TAB}
        component={TicketScreenComponent}
      />
      <Stack.Screen
        name={ROUTE_NAME.PROFILE_TAB}
        component={ProfileScreenComponent}
      />
    </Stack.Navigator>
  );
};

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      activeColor={presetBase.colors.blueBase}
      inactiveColor={presetBase.colors.whiteSmooth}
      barStyle={{backgroundColor: presetBase.colors.black}}
      sceneAnimationType={'shifting'}
      initialRouteName={ROUTE_NAME.HOME_TAB}>
      <Tab.Screen
        name={ROUTE_NAME.HOME_TAB}
        component={HomeScreenComponent}
        options={{
          title: 'HOME',
          tabBarIcon: ({focused, color}) => (
            <MaterialCommunityIcons
              name={focused ? 'home' : 'home-outline'}
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTE_NAME.SEARCH_TAB}
        component={HomeScreenComponent}
        options={{
          title: 'SEARCH',
          tabBarIcon: ({color}) => (
            <FontAwesome name={'search'} size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTE_NAME.TICKET_TAB}
        component={TicketScreenComponent}
        options={{
          title: 'TICKET',
          tabBarIcon: ({color}) => (
            <FontAwesome name={'ticket'} size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTE_NAME.PROFILE_TAB}
        component={ProfileScreenComponent}
        options={{
          title: 'PROFILE',
          tabBarIcon: ({focused, color}) => (
            <MaterialCommunityIcons
              name={focused ? 'account' : 'account-outline'}
              size={20}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
