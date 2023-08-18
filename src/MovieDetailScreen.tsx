import React, {FunctionComponent, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {getMovieCasteData, getMovieData} from './data/api-calls';
import {presetBase} from './utils/color';
import {baseImagePath} from './data/api';
import {genres, MovieDetailItem, MovieItem} from './constants/constant';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import LabelComponent from './components/typography/label/label.component';
import {ETypographyVariant} from './components/typography/label/model/label.interface';

const MovieDetailScreen: FunctionComponent<any> = ({navigation, route}) => {
  const movieId = route.params.movieId;
  const {width, height} = useWindowDimensions();
  const [movieData, setMovieData] = useState<MovieDetailItem | undefined>(
    undefined,
  );
  const [movieCasteData, setMovieCasteData] = useState<
    MovieItem[] | [] | undefined
  >(undefined);

  const formatTime = (runtime: number) => {
    const hours = Math.floor(runtime / 60);
    const minutes = Math.floor(runtime % 60);
    return hours + ' : ' + minutes;
  };

  useEffect(() => {
    (async () => {
      let tempMovieData = await getMovieData(movieId);
      // console.log(tempMovieData, '------');
      setMovieData({...tempMovieData});

      let tempMovieCasteData = await getMovieCasteData(movieId);
      setMovieCasteData({...tempMovieCasteData});
    })();
  }, [movieId]);

  console.log(movieData, '====data====');
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={styles.container}>
          <View style={{zIndex: 1}}>
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
                style={{height: height - 200, ...styles.linearGradient}}>
                <View style={styles.timeBox}>
                  <AntDesignIcons
                    size={20}
                    name={'clockcircleo'}
                    color={presetBase.colors.white}
                  />
                  <LabelComponent
                    variant={ETypographyVariant.LARGE_SEMIBOLD}
                    color={presetBase.colors.white}>
                    {' ' + formatTime(movieData.runtime)}
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
                <View style={{flex: 1, width, borderWidth: 0}}>
                  <View style={{flexDirection: 'row', padding: 5}}>
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
                  <View style={{padding: 5}}>
                    <LabelComponent
                      variant={ETypographyVariant.LARGE_REGULAR}
                      color={presetBase.colors.white}>
                      {movieData.overview}
                    </LabelComponent>
                  </View>
                  <View style={{padding: 5}}>
                    <LabelComponent
                      variant={ETypographyVariant.LARGE_REGULAR}
                      color={presetBase.colors.white}>
                      {movieData.overview}
                    </LabelComponent>
                  </View>
                  <View style={{padding: 5}}>
                    <LabelComponent
                      variant={ETypographyVariant.LARGE_REGULAR}
                      color={presetBase.colors.white}>
                      {movieData.overview}
                    </LabelComponent>
                  </View>
                  <View style={{padding: 5}}>
                    <LabelComponent
                      variant={ETypographyVariant.LARGE_REGULAR}
                      color={presetBase.colors.white}>
                      {movieData.overview}
                    </LabelComponent>
                  </View>
                </View>
              </LinearGradient>
            </View>
          </View>
          <View
            style={{
              zIndex: 2,
              position: 'absolute',
              width: width,
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{marginTop: '30%'}}>
              <Image
                style={{width: width * 0.6, ...styles.imagePoster}}
                source={{uri: baseImagePath('w780', movieData?.poster_path)}}
              />
            </View>
            {/*<View style={styles.timeBox}>*/}
            {/*  <AntDesignIcons*/}
            {/*    size={20}*/}
            {/*    name={'clockcircleo'}*/}
            {/*    color={presetBase.colors.white}*/}
            {/*  />*/}
            {/*  <LabelComponent*/}
            {/*    variant={ETypographyVariant.LARGE_SEMIBOLD}*/}
            {/*    color={presetBase.colors.white}>*/}
            {/*    {' ' + formatTime(movieData.runtime)}*/}
            {/*  </LabelComponent>*/}
            {/*</View>*/}
            {/*<View>*/}
            {/*  <LabelComponent*/}
            {/*    color={presetBase.colors.white}*/}
            {/*    variant={ETypographyVariant.HEADER_H1}>*/}
            {/*    {movieData.original_title}*/}
            {/*  </LabelComponent>*/}
            {/*</View>*/}
            {/*<View style={styles.generaBox}>*/}
            {/*  {movieData.genres.map(item => (*/}
            {/*    <View key={item.id} style={styles.generaItem}>*/}
            {/*      <Text style={styles.generaText}>{item.name}</Text>*/}
            {/*    </View>*/}
            {/*  ))}*/}
            {/*</View>*/}
            {/*<View>*/}
            {/*  <LabelComponent*/}
            {/*    color={presetBase.colors.white}*/}
            {/*    variant={ETypographyVariant.LARGE_REGULAR}>*/}
            {/*    {movieData.tagline}*/}
            {/*  </LabelComponent>*/}
            {/*</View>*/}
            {/*<View style={{flex: 1, width, borderWidth: 0}}>*/}
            {/*  <View style={{flexDirection: 'row', padding: 5}}>*/}
            {/*    <AntDesignIcons*/}
            {/*      name={'star'}*/}
            {/*      size={20}*/}
            {/*      color={presetBase.colors.yellowBase}*/}
            {/*    />*/}
            {/*    <LabelComponent*/}
            {/*      variant={ETypographyVariant.MEDIUM_SEMIBOLD}*/}
            {/*      color={presetBase.colors.white}>*/}
            {/*      {' ' +*/}
            {/*        movieData.vote_average +*/}
            {/*        ' (' +*/}
            {/*        movieData.vote_count +*/}
            {/*        ')'}*/}
            {/*    </LabelComponent>*/}
            {/*    <LabelComponent*/}
            {/*      variant={ETypographyVariant.LARGE_REGULAR}*/}
            {/*      color={presetBase.colors.white}>*/}
            {/*      {'  ' + movieData.release_date}*/}
            {/*    </LabelComponent>*/}
            {/*  </View>*/}
            {/*  <View style={{padding: 5}}>*/}
            {/*    <LabelComponent*/}
            {/*      variant={ETypographyVariant.LARGE_REGULAR}*/}
            {/*      color={presetBase.colors.white}>*/}
            {/*      {movieData.overview}*/}
            {/*    </LabelComponent>*/}
            {/*  </View>*/}
            {/*  <View style={{padding: 5}}>*/}
            {/*    <LabelComponent*/}
            {/*      variant={ETypographyVariant.LARGE_REGULAR}*/}
            {/*      color={presetBase.colors.white}>*/}
            {/*      {movieData.overview}*/}
            {/*    </LabelComponent>*/}
            {/*  </View>*/}
            {/*</View>*/}
          </View>
        </ScrollView>
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
});

export default MovieDetailScreen;
