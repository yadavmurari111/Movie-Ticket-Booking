import React, {FunctionComponent, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {getMovieCasteData, getMovieData} from './data/api-calls';
import {presetBase} from './utils/color';
import {baseImagePath} from './data/api';
import {MovieCastItem, MovieDetailItem} from './constants/constant';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import LabelComponent from './components/typography/label/label.component';
import {ETypographyVariant} from './components/typography/label/model/label.interface';
import CastCardComponent from './components/cast-card/cast-card.component';
import ROUTE_NAME from './navigation/navigation-constants';
import {formatRunTime} from './utils/utils';

const MovieDetailScreen: FunctionComponent<any> = ({navigation, route}) => {
  const movieId = route.params.movieId;
  const {width, height} = useWindowDimensions();

  const [containerHeight, setContainerHeight] = useState(height);
  const [movieData, setMovieData] = useState<MovieDetailItem | undefined>(
    undefined,
  );
  const [movieCasteData, setMovieCasteData] = useState<
    MovieCastItem | undefined
  >(undefined);

  const handleLayout = (event: any) => {
    const imageBannerHeight = 150;
    const h = event.nativeEvent.layout.height;
    setContainerHeight(h - imageBannerHeight);
  };

  const navigateToSeatSelection = (data: MovieDetailItem) => {
    navigation.navigate(ROUTE_NAME.MOVIE_SEAT_SELECTION, {movieData: data});
  };

  useEffect(() => {
    (async () => {
      let tempMovieData = await getMovieData(movieId);
      setMovieData({...tempMovieData});

      let tempMovieCasteData = await getMovieCasteData(movieId);
      setMovieCasteData(tempMovieCasteData);
    })();
  }, [movieId]);

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
          <View style={styles.backGroundContainer}>
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
                  presetBase.colors.darkBlack,
                  presetBase.colors.darkGrey,
                  presetBase.colors.darkGrey,
                  presetBase.colors.grey80,
                  presetBase.colors.grey60,
                  presetBase.colors.grey60,
                  presetBase.colors.grey60,
                  presetBase.colors.white,
                ]}
                locations={[0, 0.04, 0.1, 0.2, 0.3, 0.4, 0.5, 0.7, 0.8, 0.9, 1]}
                style={{
                  height: containerHeight,
                  ...styles.linearGradient,
                }}
              />
            </View>
          </View>
          <View onLayout={handleLayout} style={styles.forGroundContainer}>
            <View style={styles.imagePosterContainer}>
              <Image
                style={{width: width * 0.6, ...styles.imagePoster}}
                source={{uri: baseImagePath('w780', movieData?.poster_path)}}
              />
            </View>
            <View style={styles.timeBox}>
              <AntDesignIcons
                size={20}
                name={'clockcircleo'}
                color={presetBase.colors.white}
              />
              <LabelComponent
                variant={ETypographyVariant.LARGE_SEMIBOLD}
                color={presetBase.colors.white}>
                {' ' + formatRunTime(movieData.runtime)}
              </LabelComponent>
            </View>
            <View>
              <LabelComponent
                color={presetBase.colors.white}
                variant={ETypographyVariant.HEADER_H1}>
                {movieData.original_title}
              </LabelComponent>
            </View>
            <View style={styles.generaBox}>
              {movieData.genres.map(item => (
                <View key={item.id} style={styles.generaItem}>
                  <Text style={styles.generaText}>{item.name}</Text>
                </View>
              ))}
            </View>
            <View>
              <LabelComponent
                color={presetBase.colors.white}
                variant={ETypographyVariant.LARGE_REGULAR}>
                {movieData.tagline}
              </LabelComponent>
            </View>
            <View style={styles.detailsContainer}>
              <View style={styles.ratingBox}>
                <AntDesignIcons
                  name={'star'}
                  size={20}
                  color={presetBase.colors.yellowBase}
                />
                <LabelComponent
                  variant={ETypographyVariant.MEDIUM_SEMIBOLD}
                  color={presetBase.colors.white}>
                  {' ' +
                    movieData.vote_average +
                    ' (' +
                    movieData.vote_count +
                    ')'}
                </LabelComponent>
                <LabelComponent
                  variant={ETypographyVariant.LARGE_REGULAR}
                  color={presetBase.colors.white}>
                  {'  ' + movieData.release_date}
                </LabelComponent>
              </View>
              <View style={styles.itemSeparator}>
                <LabelComponent
                  variant={ETypographyVariant.LARGE_REGULAR}
                  color={presetBase.colors.white}>
                  {movieData.overview}
                </LabelComponent>
              </View>
              <View style={styles.itemSeparator}>
                <LabelComponent
                  variant={ETypographyVariant.HEADER_H1}
                  color={presetBase.colors.white}>
                  Top cast
                </LabelComponent>
              </View>
              <View>
                {movieCasteData && (
                  <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={movieCasteData.cast}
                    renderItem={({item}) => <CastCardComponent props={item} />}
                  />
                )}
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigateToSeatSelection(movieData)}
              style={styles.selectSeatButton}>
              <LabelComponent
                variant={ETypographyVariant.LARGE_SEMIBOLD}
                color={presetBase.colors.white}>
                Select seats
              </LabelComponent>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
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
    display: 'flex',
    flex: 1,
  },
  linearGradientBox: {marginTop: -30, display: 'flex', flex: 1},
  timeBox: {padding: 3, flexDirection: 'row', alignItems: 'center'},

  generaBox: {flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'},
  generaItem: {
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: presetBase.colors.white,
  },
  generaText: {fontSize: 16, fontWeight: '700', color: presetBase.colors.white},
  backGroundContainer: {zIndex: 1},
  forGroundContainer: {
    zIndex: 2,
    position: 'absolute',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePosterContainer: {marginTop: '30%'},
  detailsContainer: {flex: 1, width: '100%'},
  ratingBox: {flexDirection: 'row', padding: 5},
  itemSeparator: {padding: 5},
  selectSeatButton: {
    backgroundColor: presetBase.colors.blueBase,
    paddingHorizontal: 50,
    borderRadius: 50,
    paddingVertical: 5,
    marginTop: 20,
  },
});

export default MovieDetailScreen;
