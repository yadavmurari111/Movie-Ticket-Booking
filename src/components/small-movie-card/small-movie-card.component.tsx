import React, {FunctionComponent} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {MovieItem} from '../../constants/constant';
import {baseImagePath} from '../../data/api';
import {presetBase} from '../../utils/color';
import LabelComponent from '../typography/label/label.component';
import {ETypographyVariant} from '../typography/label/model/label.interface';

interface ISmallMovieCard {
  cardWidth?: number;
  props: MovieItem;
  onMoviePress(movieData: MovieItem): void;
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {aspectRatio: 2 / 3, borderRadius: 12},
  ratingBox: {paddingTop: 6},
});

const SmallMovieCardComponent: FunctionComponent<ISmallMovieCard> = ({
  props,
  cardWidth,
  onMoviePress,
}) => {
  const {width} = useWindowDimensions();
  const movieCardWidth = cardWidth ? cardWidth : width / 3 - 16;

  return (
    <View style={{width: movieCardWidth, ...styles.container}}>
      <TouchableOpacity onPress={() => onMoviePress(props)}>
        <Image
          style={{width: movieCardWidth, ...styles.image}}
          source={{uri: baseImagePath('w780', props.poster_path)}}
        />
      </TouchableOpacity>
      <View style={styles.ratingBox}>
        <LabelComponent
          numberOfLines={1}
          variant={ETypographyVariant.SMALL_REGULAR}
          color={presetBase.colors.white}>
          {props.title}
        </LabelComponent>
      </View>
    </View>
  );
};

export default SmallMovieCardComponent;
