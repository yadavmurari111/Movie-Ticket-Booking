import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  useWindowDimensions,
  View,
} from 'react-native';
import {presetBase} from './utils/color';
import SearchInputComponent from './components/search-input/search-input.component';
import NowPlayingComponent from './components/now-playing/now-playing.component';
import LabelComponent from './components/typography/label/label.component';
import {ETypographyVariant} from './components/typography/label/model/label.interface';
import {
  getNowPlayingMoviesList,
  getPopularMoviesList,
  getUpcomingMoviesList,
} from './data/api-calls';
import {MovieItem, sampleResponse} from './constants/constant';

const HomeScreenComponent = ({navigation}: any) => {
  const {width} = useWindowDimensions();
  const [popularMovies, setPopularMovies] = useState<
    MovieItem[] | [] | undefined
  >(undefined);

  const [nowPlayingMoviesList, setNowPlayingMoviesList] = useState<
    any[] | undefined
  >(undefined);

  useEffect(() => {
    (async () => {
      let tempNowPlaying = await getNowPlayingMoviesList();
      console.log(JSON.stringify(tempNowPlaying), '====now playing=====');
      setNowPlayingMoviesList([...tempNowPlaying.results]);

      let tempPopular = await getPopularMoviesList();
      setPopularMovies(tempPopular.results);

      // let tempUpcoming = await getUpcomingMoviesList();
      // setUpcomingMoviesList(tempUpcoming.results);

      //==============

      // getPopularMoviesList().then(res => {
      //   console.log(res, '======');
      //   console.log(JSON.stringify(res), '===json===');
      //   setPopularMovies(res.results);
      // });
    })();
  }, []);

  return (
    <View
      style={{
        padding: 12,
        backgroundColor: presetBase.colors.darkBlack,
      }}>
      {popularMovies === undefined && (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator size={'large'} color={presetBase.colors.white} />
        </View>
      )}

      {popularMovies !== undefined && (
        <ScrollView>
          <SearchInputComponent searchMovie={() => {}} />

          <LabelComponent
            color={presetBase.colors.white}
            variant={ETypographyVariant.LARGE_SEMIBOLD}>
            Now playing
          </LabelComponent>

          <View>
            <FlatList
              horizontal={true}
              data={popularMovies}
              snapToInterval={width * 0.7}
              renderItem={({item}) => (
                <NowPlayingComponent props={item} onMoviePress={() => {}} />
              )}
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default HomeScreenComponent;
