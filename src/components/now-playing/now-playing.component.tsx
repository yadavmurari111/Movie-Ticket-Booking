import React, {FunctionComponent} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {genres, MovieItem} from '../../constants/constant';
import {baseImagePath} from '../../data/api';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {presetBase} from '../../utils/color';
import LabelComponent from '../typography/label/label.component';
import {ETypographyVariant} from '../typography/label/model/label.interface';

interface INowPlayingComponent {
  props: MovieItem;
  onMoviePress(movieData: MovieItem): void;
}

const styles = StyleSheet.create({
  container: {
    marginRight: 12,
    marginLeft: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {aspectRatio: 2 / 3, borderRadius: 12, width: '100%'},
  ratingBox: {padding: 3, flexDirection: 'row', alignItems: 'center'},
  generaBox: {flexDirection: 'row'},
  generaItem: {
    padding: 5,
    margin: 5,
    borderWidth: 0.8,
    borderRadius: 10,
    borderColor: presetBase.colors.white,
  },
  generaText: {fontSize: 10, color: presetBase.colors.white},
});

const NowPlayingComponent: FunctionComponent<INowPlayingComponent> = ({
  props,
  onMoviePress,
}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={{width: width * 0.9, ...styles.container}}>
      <TouchableOpacity onPress={() => onMoviePress(props)}>
        <Image
          style={{...styles.image}}
          source={{uri: baseImagePath('w780', props.poster_path)}}
        />
      </TouchableOpacity>
      <View style={styles.ratingBox}>
        <AntDesignIcons
          size={16}
          name={'star'}
          color={presetBase.colors.yellowBase}
        />
        <LabelComponent
          variant={ETypographyVariant.SMALL_SEMIBOLD}
          color={presetBase.colors.white}>
          {+props.vote_average + ' (' + props.vote_count + ')'}
        </LabelComponent>
      </View>
      <View style={styles.ratingBox}>
        <LabelComponent
          variant={ETypographyVariant.SMALL_SEMIBOLD}
          color={presetBase.colors.white}>
          {props.title}
        </LabelComponent>
      </View>
      <View style={styles.generaBox}>
        {props.genre_ids.slice(1, 4).map(item => (
          <View key={item} style={styles.generaItem}>
            <Text style={styles.generaText}>{genres[item]}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default NowPlayingComponent;
