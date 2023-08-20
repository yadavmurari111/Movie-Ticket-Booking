import React, {FunctionComponent} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {presetBase} from './utils/color';
import HeaderComponent from './components/header/header.component';
import LabelComponent from './components/typography/label/label.component';
import {ETypographyVariant} from './components/typography/label/model/label.interface';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileScreenComponent: FunctionComponent<any> = ({navigation}) => {
  //const navigation = useNavigation();

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <HeaderComponent navigation={navigation} title={'My profile'} />
        <TouchableOpacity style={styles.imageAvatarBox}>
          <Image
            style={styles.imageAvatar}
            source={{
              uri: 'https://t4.ftcdn.net/jpg/02/14/74/61/240_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg',
            }}
          />
          <Text style={styles.username}>{'Rahul Sharma'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingsContainer}>
          <View style={styles.iconBox}>
            <Ionicons name={'person-outline'} size={20} color={'grey'} />
          </View>
          <LabelComponent
            variant={ETypographyVariant.LARGE_SEMIBOLD}
            color={presetBase.colors.white}>
            {'Account'}
          </LabelComponent>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsContainer}>
          <View style={styles.iconBox}>
            <Ionicons name={'settings-outline'} size={20} color={'grey'} />
          </View>
          <LabelComponent
            variant={ETypographyVariant.LARGE_SEMIBOLD}
            color={presetBase.colors.white}>
            {'Settings'}
          </LabelComponent>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsContainer}>
          <View style={styles.iconBox}>
            <Ionicons name={'gift-outline'} size={20} color={'grey'} />
          </View>
          <LabelComponent
            variant={ETypographyVariant.LARGE_SEMIBOLD}
            color={presetBase.colors.white}>
            {'Rewards'}
          </LabelComponent>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsContainer}>
          <View style={styles.iconBox}>
            <Ionicons
              name={'information-circle-outline'}
              size={20}
              color={'grey'}
            />
          </View>
          <LabelComponent
            variant={ETypographyVariant.LARGE_SEMIBOLD}
            color={presetBase.colors.white}>
            {'About'}
          </LabelComponent>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsContainer}>
          <View style={styles.iconBox}>
            <Ionicons
              name={'power-sharp'}
              size={20}
              color={presetBase.colors.redOnLight}
            />
          </View>
          <LabelComponent
            variant={ETypographyVariant.LARGE_SEMIBOLD}
            color={presetBase.colors.redOnLight}>
            {'Logout'}
          </LabelComponent>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    padding: 12,
    backgroundColor: presetBase.colors.darkBlack,
  },
  container: {
    flex: 1,
    backgroundColor: presetBase.colors.darkBlack,
  },
  settingsContainer: {
    paddingVertical: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: 'white',
  },
  iconBox: {marginHorizontal: 30},
  username: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
    paddingTop: 12,
  },
  imageAvatar: {width: 150, height: 150, borderRadius: 100},
  imageAvatarBox: {alignItems: 'center', paddingVertical: 40},
});

export default ProfileScreenComponent;
