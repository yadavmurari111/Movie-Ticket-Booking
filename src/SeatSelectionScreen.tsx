import React, {FunctionComponent, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {presetBase} from './utils/color';
import {baseImagePath} from './data/api';
import {MovieDetailItem} from './constants/constant';
import LabelComponent from './components/typography/label/label.component';
import {ETypographyVariant} from './components/typography/label/model/label.interface';
import ROUTE_NAME from './navigation/navigation-constants';
import Next15DayDateCards, {
  IDayDateItem,
} from './components/day-date/day-date.component';
import SeatsComponent, {
  ISeatRow,
} from './components/seat-item/seat-item.component';
import TimeSelectionComponent from './components/time-selection/time-selection.component';
import EncryptedStorage from 'react-native-encrypted-storage';

const SeatSelectionScreen: FunctionComponent<any> = ({navigation, route}) => {
  const movieData = route.params.movieData as MovieDetailItem;

  const [ticketsPrice, setTicketsPrice] = useState(0);
  const [timeSlotSelected, setTimeSlotSelected] = useState('');
  const [seatsSelected, setSeatsSelected] = useState<ISeatRow[] | never[]>([]);

  const [dateSlotSelected, setDateSlotSelected] = useState<
    IDayDateItem | never
  >({
    dateNumber: 0,
    dayName: '',
  });

  const dataToTicketComponent = {
    timeSlotSelected,
    dateSlotSelected,
    seatsSelected,
    movieData,
  };

  const navigateToTicketScreen = async () => {
    if (
      dateSlotSelected.dateNumber === 0 &&
      timeSlotSelected === '' &&
      seatsSelected.length === 0
    ) {
      ToastAndroid.show('Please select valid info', ToastAndroid.TOP);
    } else {
      await EncryptedStorage.setItem(
        'TicketData',
        JSON.stringify(dataToTicketComponent), // save ticketData to EncryptedStorage
      );

      navigation.navigate(ROUTE_NAME.BOTTOM_TABS, {
        screen: ROUTE_NAME.TICKET_TAB,
        params: dataToTicketComponent, // Pass your data as a parameter
      });
    }
  };

  const handleSeatSelected = async (item: ISeatRow) => {
    console.log(item, '--item--');
    await setTicketsPrice(ticketsPrice + item.ticketsPrice);
    await setSeatsSelected([...seatsSelected, item]);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      style={styles.container}>
      <StatusBar hidden />

      {movieData && !movieData.original_title && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size={'large'} color={presetBase.colors.white} />
        </View>
      )}

      {movieData?.original_title && (
        <View style={styles.container}>
          <View style={styles.linearGradient}>
            <Image
              style={styles.imageBG}
              source={{uri: baseImagePath('w780', movieData?.backdrop_path)}}
            />
            <View style={styles.linearGradientBox}>
              <LinearGradient
                colors={[
                  'transparent',
                  presetBase.colors.darkBlack,
                  presetBase.colors.darkBlack,
                  presetBase.colors.white,
                ]}
                locations={[0, 0.03, 0.7, 1]}
                style={styles.linearGradient}>
                <View style={styles.linearGradient}>
                  <View style={styles.subContainer}>
                    <SeatsComponent
                      row={12}
                      column={8}
                      title={'SILVER ₹150'}
                      ticketPrice={150}
                      setSeatSelected={handleSeatSelected}
                    />
                  </View>

                  <View style={styles.subContainer}>
                    <SeatsComponent
                      row={2}
                      column={10}
                      title={'GOLD ₹250'}
                      ticketPrice={250}
                      setSeatSelected={handleSeatSelected}
                    />
                  </View>

                  <View style={styles.subContainer}>
                    <TimeSelectionComponent
                      timeSlotSelected={timeSlotSelected}
                      setTimeSlotSelected={setTimeSlotSelected}
                    />
                  </View>

                  <View style={styles.subContainer}>
                    <Next15DayDateCards
                      dateSlotSelected={dateSlotSelected}
                      setDateSlotSelected={setDateSlotSelected}
                    />
                  </View>

                  <View style={styles.footerBox}>
                    <View>
                      <LabelComponent
                        variant={ETypographyVariant.MEDIUM_SEMIBOLD}
                        color={presetBase.colors.white}>
                        {'Total : ₹' + ticketsPrice}
                      </LabelComponent>
                    </View>
                    <TouchableOpacity
                      onPress={navigateToTicketScreen}
                      style={styles.footerBookSeat}>
                      <LabelComponent
                        variant={ETypographyVariant.LARGE_SEMIBOLD}
                        color={presetBase.colors.white}>
                        Book Ticket
                      </LabelComponent>
                    </TouchableOpacity>
                  </View>
                </View>
              </LinearGradient>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: presetBase.colors.darkBlack,
  },
  loaderContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageBG: {width: '100%', aspectRatio: 16 / 9},
  imagePoster: {borderRadius: 18, aspectRatio: 3 / 4},
  linearGradient: {
    height: '100%',
  },
  linearGradientBox: {marginTop: -25, display: 'flex', height: '100%'},
  footerBox: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  footerBookSeat: {
    backgroundColor: presetBase.colors.blueBase,
    paddingHorizontal: 50,
    borderRadius: 50,
    paddingVertical: 5,
  },
  subContainer: {marginTop: 20},
});

export default SeatSelectionScreen;
