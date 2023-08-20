import React, {FunctionComponent} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {presetBase} from '../../utils/color';
import LabelComponent from '../typography/label/label.component';
import {ETypographyVariant} from '../typography/label/model/label.interface';

interface ITimeSelection {
  timeSlotSelected: string;
  setTimeSlotSelected(timeSlot: string): void;
}
const timeArray = ['9:00 AM', '12:00 PM', '3:00 PM', '6:00 PM', '9:00 PM'];

const TimeSelectionComponent: FunctionComponent<ITimeSelection> = ({
  timeSlotSelected,
  setTimeSlotSelected,
}) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        {timeArray.map(item => (
          <TouchableOpacity
            key={item}
            onPress={() => setTimeSlotSelected(item)}
            style={{
              backgroundColor:
                timeSlotSelected === item
                  ? presetBase.colors.blueBase
                  : presetBase.colors.grey80,
              ...styles.timeSlot,
            }}>
            <LabelComponent
              color={presetBase.colors.white}
              variant={ETypographyVariant.SMALL_SEMIBOLD}>
              {item}
            </LabelComponent>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  timeSlot: {
    padding: 12,
    marginHorizontal: 8,
    marginVertical: 5,
    borderRadius: 12,
  },
});

export default TimeSelectionComponent;
