import React, {FunctionComponent} from 'react';
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
import MovieDetailScreen from '../MovieDetailScreen';
import SeatSelectionScreen from '../SeatSelectionScreen';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export const MainStack: FunctionComponent<{initialRoute: string}> = ({
  initialRoute,
}) => {
  return (
    <Stack.Navigator initialRouteName={initialRoute}>
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
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const LoggedInScreenStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'none',
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
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTE_NAME.PROFILE_TAB}
        component={ProfileScreenComponent}
      />
      <Stack.Screen
        name={ROUTE_NAME.MOVIE_DETAIL}
        component={MovieDetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTE_NAME.MOVIE_SEAT_SELECTION}
        component={SeatSelectionScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      activeColor={presetBase.colors.blueBase}
      inactiveColor={presetBase.colors.whiteSmooth}
      barStyle={{backgroundColor: presetBase.colors.darkBlack}}
      initialRouteName={ROUTE_NAME.HOME_TAB}>
      <Tab.Screen
        name={ROUTE_NAME.HOME_TAB}
        component={HomeScreenComponent}
        options={{
          title: 'HOME',
          tabBarIcon: ({focused, color}) => (
            <MaterialCommunityIcons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTE_NAME.SEARCH_TAB}
        component={SearchScreenComponent}
        options={{
          title: 'SEARCH',
          tabBarIcon: ({color}) => (
            <FontAwesome name={'search'} size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTE_NAME.TICKET_TAB}
        component={TicketScreenComponent}
        options={{
          title: 'TICKET',
          tabBarIcon: ({color}) => (
            <FontAwesome name={'ticket'} size={24} color={color} />
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
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
