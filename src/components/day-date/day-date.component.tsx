import React, {FunctionComponent} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {presetBase} from '../../utils/color';
import LabelComponent from '../typography/label/label.component';
import {ETypographyVariant} from '../typography/label/model/label.interface';

export interface IDayDateItem {
  dateNumber: number;
  dayName: string;
}

interface IDayDateCard {
  dateSlotSelected: IDayDateItem;
  setDateSlotSelected(Data: IDayDateItem): void;
}

const Next15DayDateCards: FunctionComponent<IDayDateCard> = ({
  dateSlotSelected,
  setDateSlotSelected,
}) => {
  const dates = [];
  const currentDate = new Date();
  const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

  for (let i = 0; i < 15; i++) {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + i);

    const dateNumber = nextDate.getDate();
    const dayName = days[nextDate.getDay()];

    dates.push({dateNumber, dayName});
  }

  return (
    <ScrollView horizontal={true}>
      {dates.map((item, index) => (
        <TouchableOpacity
          onPress={() => setDateSlotSelected(item)}
          key={index}
          style={{
            margin: 10,
            borderRadius: 12,
            paddingVertical: 10,
            paddingHorizontal: 12,
            alignItems: 'center',
            backgroundColor:
              dateSlotSelected?.dateNumber === item.dateNumber
                ? presetBase.colors.blueBase
                : presetBase.colors.grey80,
          }}>
          <LabelComponent
            color={presetBase.colors.white}
            variant={ETypographyVariant.SMALL_SEMIBOLD}>
            {item.dateNumber}
          </LabelComponent>
          <LabelComponent
            color={presetBase.colors.white}
            variant={ETypographyVariant.SMALL_SEMIBOLD}>
            {item.dayName}
          </LabelComponent>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
export default Next15DayDateCards;
