import React, {FunctionComponent, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {getMovieCasteData, getMovieData} from './data/api-calls';
import {presetBase} from './utils/color';
import {baseImagePath} from './data/api';
import {MovieItem} from './constants/constant';

const MovieDetailScreen: FunctionComponent<any> = ({navigation, route}) => {
  const movieId = route.params.movieId;
  const [movieData, setMovieData] = useState<MovieItem | undefined>(undefined);
  const [movieCasteData, setMovieCasteData] = useState<
    MovieItem[] | [] | undefined
  >(undefined);

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
    <View style={styles.container}>
      <StatusBar hidden />
      {movieData && !movieData.original_title && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size={'large'} color={presetBase.colors.white} />
        </View>
      )}

      {movieData?.original_title && (
        <View style={{flex: 1, backgroundColor: 'red'}}>
          <ImageBackground
            source={{
              uri: baseImagePath('w780', movieData?.backdrop_path),
            }}
            style={styles.imageBG}>
            <LinearGradient
              colors={['transparent', 'black']}
              locations={[0.9, 0.99]}
              style={styles.linearGradient}>
              <Text>1dsds</Text>
            </LinearGradient>
          </ImageBackground>

          <LinearGradient
            colors={['red', 'yellow']}
            locations={[0.4, 0.5]}
            style={styles.linearGradient}>
            <Text>1dsds</Text>
          </LinearGradient>
        </View>
      )}
    </View>
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

  imageBG: {
    width: '100%',
    height: '100%',
    aspectRatio: 3072 / 1727,
  },
  linearGradient: {
    height: '100%',
  },
});

export default MovieDetailScreen;
//<View
//           style={{
//             flex: 1,
//             display: 'flex',
//           }}>
//           <Image
//             style={{width: '100%', aspectRatio: 16 / 9}}
//             source={{uri: baseImagePath('w780', movieData?.backdrop_path)}}
//           />
//           <LinearGradient
//             colors={[presetBase.colors.black, presetBase.colors.white]}
//             style={{flex: 1, marginTop: -10}}>
//             <View />
//           </LinearGradient>
//         </View>
