import React, {FunctionComponent} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {presetBase} from '../../utils/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LabelComponent from '../typography/label/label.component';
import {ETypographyVariant} from '../typography/label/model/label.interface';

interface IHeaderComponent {
  navigation: any;
  title?: string;
  position?: 'absolute' | 'relative' | undefined;
}

const HeaderComponent: FunctionComponent<IHeaderComponent> = ({
  navigation,
  position,
  title,
}) => {
  return (
    <View
      style={{...styles.container, position: position ? position : 'relative'}}>
      <TouchableOpacity
        style={styles.backButtonBox}
        onPress={() => navigation.goBack()}>
        <Ionicons
          name={'arrow-back'}
          color={presetBase.colors.darkBlack}
          size={30}
        />
      </TouchableOpacity>
      <LabelComponent
        variant={ETypographyVariant.LARGE_SEMIBOLD}
        color={presetBase.colors.white}>
        {title}
      </LabelComponent>
      <View style={styles.rightBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightBox: {width: 30, padding: 4},
  backButtonBox: {
    backgroundColor: presetBase.colors.blueBase,
    borderRadius: 100,
    padding: 4,
  },
});

export default HeaderComponent;
