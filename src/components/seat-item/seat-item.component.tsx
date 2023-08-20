import React, {FunctionComponent, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {presetBase} from '../../utils/color';
import LabelComponent from '../typography/label/label.component';
import {ETypographyVariant} from '../typography/label/model/label.interface';

export interface ISeatRow {
  id: string;
  Row: number;
  Column: number;
  ticketsPrice: number;
  SeatSelected: boolean;
  SeatTaken: boolean;
}

interface ISeatItemComponent {
  row: number;
  column: number;
  title?: string;
  ticketPrice: number;
  setSeatSelected(Data: ISeatRow): void;
}

const SeatRowComponent: FunctionComponent<ISeatItemComponent> = ({
  row,
  column,
  title,
  ticketPrice,
  setSeatSelected,
}) => {
  const [selectedSeatsArray, setSelectedSeatsArray] = useState<
    ISeatRow[] | never[]
  >([]);

  const [twoDSeatArray] = useState<ISeatRow[][]>(
    generateSeats2dArray(row, column, ticketPrice),
  );

  const handleSeatSelection = (item: ISeatRow) => {
    const tempSelected = {...item, SeatSelected: !item.SeatSelected};
    setSelectedSeatsArray([...selectedSeatsArray, tempSelected]); // handle selected seat

    setSeatSelected(item); // event to access in parent component
  };

  console.log(selectedSeatsArray, 'selected== ' + title);

  return (
    <View>
      {title && (
        <View style={styles.titleContainer}>
          <LabelComponent
            color={presetBase.colors.white}
            variant={ETypographyVariant.LARGE_SEMIBOLD}>
            {title}
          </LabelComponent>
        </View>
      )}
      {twoDSeatArray.map((rowArray, rowArrayIndex) => {
        return (
          <View style={styles.rowContainer}>
            {rowArray.map((item, columnIndex) => {
              const markSelected = selectedSeatsArray.find(
                seatData => seatData.id === item.id,
              );

              return (
                <TouchableOpacity
                  disabled={item.SeatTaken}
                  key={rowArrayIndex + '-' + columnIndex}
                  onPress={() => handleSeatSelection(item)}
                  style={{
                    marginRight: columnIndex + 1 === column / 2 ? 25 : 0,
                    backgroundColor: markSelected
                      ? presetBase.colors.blueBase
                      : presetBase.colors.grey80,
                    ...styles.rowItem,
                  }}>
                  {!markSelected && (
                    <MaterialCommunityIcons
                      name={'seat'}
                      color={
                        item.SeatTaken
                          ? presetBase.colors.grey60
                          : presetBase.colors.white
                      }
                      size={30}
                    />
                  )}
                  {markSelected && (
                    <MaterialCommunityIcons
                      name={'seat'}
                      color={presetBase.colors.skyblueSmooth}
                      size={30}
                    />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {alignItems: 'center', justifyContent: 'center'},
  rowItem: {
    padding: 1,
    borderRadius: 8,
    margin: 5,
    flexDirection: 'row',
  },
});

export const generateSeats2dArray = (
  rowNum: number,
  column: number,
  ticketPrice: number,
) => {
  const numRows = rowNum ? rowNum : 10;
  const numCols = column ? column : 8;

  const twoDArray = [];
  for (let row = 1; row <= numRows; row++) {
    const rowArray = [];
    for (let col = 1; col <= numCols; col++) {
      const randomBoolean = Math.random() < 0.5;
      const seatData = {
        id: row + '-' + col,
        Row: row,
        Column: col,
        ticketsPrice: ticketPrice,
        SeatSelected: false,
        SeatTaken: randomBoolean,
      } as ISeatRow;
      rowArray.push(seatData); // You can set any initial value here
    }
    twoDArray.push(rowArray);
  }
  return twoDArray;
};

export default SeatRowComponent;
