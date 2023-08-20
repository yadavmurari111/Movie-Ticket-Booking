import React, {FunctionComponent, useEffect, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {formatRunTime} from './utils/utils';
import {baseImagePath} from './data/api';
import LinearGradient from 'react-native-linear-gradient';
import {presetBase} from './utils/color';
import {MovieDetailItem, RowNumber} from './constants/constant';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LabelComponent from './components/typography/label/label.component';
import {ETypographyVariant} from './components/typography/label/model/label.interface';
import {IDayDateItem} from './components/day-date/day-date.component';
import {ISeatRow} from './components/seat-item/seat-item.component';
import EncryptedStorage from 'react-native-encrypted-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface ITicketData {
  movieData: MovieDetailItem;
  dateSlotSelected: IDayDateItem;
  timeSlotSelected: string;
  seatsSelected: ISeatRow[];
}

const TicketScreenComponent: FunctionComponent<any> = ({navigation, route}) => {
  const [storedTicketData, setStoredTicketData] = useState<ITicketData>();

  console.log(storedTicketData, '==storedTicketData==');
  useEffect(() => {
    (async () => {
      const ticketData = await EncryptedStorage.getItem('TicketData');
      console.log(ticketData, '==ticketData==');
      if (route.params) {
        console.log('==route==');
        setStoredTicketData(route.params);
      } else if (ticketData !== null) {
        console.log('==route==');
        const tempData = JSON.parse(ticketData);
        console.log(tempData);
        setStoredTicketData(tempData);
      }
    })();
  }, [route.params]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Ionicons
          name={'arrow-back-circle'}
          color={presetBase.colors.blueBase}
          size={40}
        />
      </TouchableOpacity>
      <View style={styles.linearGradientContainer}>
        {storedTicketData && (
          <Image
            style={styles.imageBG}
            source={{
              uri: baseImagePath(
                'w780',
                storedTicketData.movieData?.poster_path,
              ),
            }}
          />
        )}
        <View style={styles.linearGradientBox}>
          <LinearGradient
            colors={[
              'transparent',
              'transparent',
              'transparent',
              presetBase.colors.blueBase,
              presetBase.colors.blueBase,
            ]}
            locations={[0, 0.03, 0.4, 0.7, 1]}
            style={styles.linearGradient}>
            <View style={styles.linearGradient}>
              <View style={styles.topLeftQuadCircle} />
              <View style={styles.topRightQuadCircle} />
            </View>
          </LinearGradient>
        </View>

        <View style={styles.dashedLine} />

        {storedTicketData && (
          <View>
            <View style={styles.bottomLeftQuadCircle} />
            <View style={styles.bottomRightQuadCircle} />
            <View style={styles.footerBox}>
              <View style={styles.footerSubContainer}>
                <View style={styles.footerItemContainer}>
                  <LabelComponent
                    variant={ETypographyVariant.MEDIUM_SEMIBOLD}
                    color={presetBase.colors.white}>
                    {storedTicketData.dateSlotSelected.dateNumber}
                  </LabelComponent>
                  <LabelComponent
                    variant={ETypographyVariant.MEDIUM_SEMIBOLD}
                    color={presetBase.colors.white}>
                    {storedTicketData.dateSlotSelected.dayName}
                  </LabelComponent>
                </View>
                <View style={styles.footerItemContainer}>
                  <LabelComponent
                    variant={ETypographyVariant.SMALL_SEMIBOLD}
                    color={presetBase.colors.white}>
                    Time
                  </LabelComponent>
                  <LabelComponent
                    variant={ETypographyVariant.SMALL_SEMIBOLD}
                    color={presetBase.colors.white}>
                    {storedTicketData.timeSlotSelected}
                  </LabelComponent>
                </View>
                <View style={styles.footerItemContainer}>
                  <AntDesignIcons
                    size={16}
                    name={'clockcircleo'}
                    color={presetBase.colors.white}
                  />
                  <LabelComponent
                    variant={ETypographyVariant.SMALL_SEMIBOLD}
                    color={presetBase.colors.white}>
                    {' ' + formatRunTime(storedTicketData.movieData.runtime)}
                  </LabelComponent>
                </View>
              </View>
              <View style={styles.footerSubContainer}>
                <View style={styles.footerItemContainer}>
                  <LabelComponent
                    variant={ETypographyVariant.MEDIUM_SEMIBOLD}
                    color={presetBase.colors.white}>
                    Hall no.
                  </LabelComponent>
                  <LabelComponent
                    variant={ETypographyVariant.SMALL_SEMIBOLD}
                    color={presetBase.colors.white}>
                    01
                  </LabelComponent>
                </View>
                <View style={styles.footerItemContainer}>
                  <LabelComponent
                    variant={ETypographyVariant.MEDIUM_SEMIBOLD}
                    color={presetBase.colors.white}>
                    Seats
                  </LabelComponent>
                  <View style={styles.seatsBox}>
                    {storedTicketData.seatsSelected &&
                      storedTicketData.seatsSelected.map(item => (
                        <View key={item.id}>
                          <LabelComponent
                            variant={ETypographyVariant.SMALL_SEMIBOLD}
                            color={presetBase.colors.white}>
                            {RowNumber[item.Row] + '-' + item.Column + ' '}
                          </LabelComponent>
                        </View>
                      ))}
                  </View>
                </View>
              </View>
              <MaterialCommunityIcons
                name={'barcode'}
                color={'white'}
                size={50}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: presetBase.colors.darkBlack,
  },

  imageBG: {
    width: '100%',
    aspectRatio: 9 / 16,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  imagePoster: {borderRadius: 18, aspectRatio: 3 / 4},
  linearGradient: {
    width: '100%',
    aspectRatio: 9 / 16,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    opacity: 0.5,
    justifyContent: 'flex-end',
  },
  linearGradientContainer: {
    width: '70%',
    aspectRatio: 9 / 16,
    borderRadius: 50,
    borderWidth: 5,
  },
  linearGradientBox: {
    zIndex: 2,
    position: 'absolute',
    width: '100%',
    aspectRatio: 9 / 16,
  },
  dashedLine: {
    borderWidth: 1,
    borderStyle: 'dashed',
    width: '100%',
    borderColor: 'white',
  },
  footerBox: {
    width: '100%',
    alignItems: 'center',
    opacity: 0.7,
    backgroundColor: presetBase.colors.blueBase,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  footerSubContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: presetBase.colors.orangeBase,
    borderRadius: 12,
    marginVertical: 5,
    marginHorizontal: 12,
    justifyContent: 'space-evenly',
  },
  footerItemContainer: {alignItems: 'center'},
  seatsBox: {flexDirection: 'row'},
  topLeftQuadCircle: {
    zIndex: 4,
    left: -40,
    bottom: -33,
    width: 70,
    height: 70,
    borderRadius: 100,
    position: 'absolute',
    backgroundColor: 'black',
  },
  topRightQuadCircle: {
    zIndex: 4,
    right: -40,
    bottom: -33,
    width: 70,
    height: 70,
    borderRadius: 100,
    position: 'absolute',
    backgroundColor: 'black',
  },
  bottomLeftQuadCircle: {
    zIndex: 4,
    left: -40,
    top: -40,
    width: 70,
    height: 70,
    position: 'absolute',
    borderRadius: 100,
    backgroundColor: 'black',
  },
  bottomRightQuadCircle: {
    zIndex: 4,
    right: -40,
    top: -40,
    width: 70,
    height: 70,
    position: 'absolute',
    borderRadius: 100,
    backgroundColor: 'black',
  },
  backButton: {width: '100%', padding: 12},
});

export default TicketScreenComponent;
