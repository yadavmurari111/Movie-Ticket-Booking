import React, {FunctionComponent} from 'react';
import {Button, Text, View} from 'react-native';
import {LOGGEDIN_USER, storeDataToAsyncStorage} from './utils/utils';

const TicketScreenComponent: FunctionComponent<any> = ({navigation, route}) => {
  const routeData = route.params;
  console.log('route data is :', routeData);
  const saveData = () => {
    storeDataToAsyncStorage(LOGGEDIN_USER, {
      loggedIN: true,
      UserName: 'murari yadav',
    }).then(() => console.log('data save '));
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text
        style={{
          padding: 12,
          fontSize: 20,
          color: 'black',
          backgroundColor: 'white',
        }}>
        Cart Component
      </Text>
      <Button
        onPress={() => navigation.push('Profile')}
        title={'Navigate to Profile'}
      />
      <Text> </Text>
      <Button onPress={saveData} title={'saveData'} />
    </View>
  );
};

export default TicketScreenComponent;
