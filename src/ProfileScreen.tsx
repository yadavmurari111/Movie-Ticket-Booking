import React, {FunctionComponent} from 'react';
import {Button, Text, View} from 'react-native';

const ProfileScreenComponent: FunctionComponent<any> = ({navigation}) => {
  //const navigation = useNavigation();

  return (
    <View style={{flex: 1, padding: 12, backgroundColor: 'white'}}>
      <Text style={{fontSize: 20}}>Profile Screen</Text>
      <Button
        onPress={() => navigation.navigate('Cart')}
        title={'Navigate back to cart'}
      />
    </View>
  );
};

export default ProfileScreenComponent;
