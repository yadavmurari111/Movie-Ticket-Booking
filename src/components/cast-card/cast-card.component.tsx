import React, {FunctionComponent} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {CastItem} from '../../constants/constant';
import {baseImagePath} from '../../data/api';
import LabelComponent from '../typography/label/label.component';
import {ETypographyVariant} from '../typography/label/model/label.interface';
import {presetBase} from '../../utils/color';

interface ICastCardComponent {
  props: CastItem;
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    marginHorizontal: 5,
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {aspectRatio: 2 / 3, width: 80, borderRadius: 25},
});

const CastCardComponent: FunctionComponent<ICastCardComponent> = ({props}) => {
  return (
    <View style={{...styles.container}}>
      <Image
        style={{...styles.image}}
        source={{uri: baseImagePath('w780', props.profile_path)}}
      />
      <LabelComponent
        numberOfLines={1}
        color={presetBase.colors.white}
        variant={ETypographyVariant.SMALL_REGULAR}>
        {props.name}
      </LabelComponent>
    </View>
  );
};

export default CastCardComponent;
