import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
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
import {MovieItem} from './constants/constant';
import SmallMovieCardComponent from './components/small-movie-card/small-movie-card.component';
import ROUTE_NAME from './navigation/navigation-constants';

const HomeScreenComponent = ({navigation}: any) => {
  const {width} = useWindowDimensions();

  const [popularMovies, setPopularMovies] = useState<
    MovieItem[] | [] | undefined
  >(undefined);
  const [nowPlayingMoviesList, setNowPlayingMoviesList] = useState<
    MovieItem[] | undefined
  >(undefined);
  const [upcomingMoviesList, setUpcomingMoviesList] = useState<
    MovieItem[] | undefined
  >(undefined);

  const navigateToMovieDetail = (id: number) => {
    navigation.navigate(ROUTE_NAME.MOVIE_DETAIL, {movieId: id});
  };

  useEffect(() => {
    (async () => {
      let tempNowPlaying = await getNowPlayingMoviesList();
      console.log(JSON.stringify(tempNowPlaying), '====now playing=====');
      setNowPlayingMoviesList([...tempNowPlaying.results]);

      let tempPopular = await getPopularMoviesList();
      setPopularMovies(tempPopular.results);

      let tempUpcoming = await getUpcomingMoviesList();
      setUpcomingMoviesList(tempUpcoming.results);
    })();
  }, []);

  return (
    <View style={styles.container}>
      {popularMovies === undefined && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size={'large'} color={presetBase.colors.white} />
        </View>
      )}

      {popularMovies !== undefined && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardDismissMode={'on-drag'}>
          <SearchInputComponent searchMovie={() => {}} />

          <View style={styles.nowPlayingTitle}>
            <LabelComponent
              color={presetBase.colors.white}
              variant={ETypographyVariant.LARGE_SEMIBOLD}>
              Now playing
            </LabelComponent>
          </View>

          <View>
            <FlatList
              horizontal={true}
              data={nowPlayingMoviesList}
              keyExtractor={item => String(item.id)}
              renderItem={({item}) => (
                <NowPlayingComponent
                  props={item}
                  onMoviePress={() => navigateToMovieDetail(item.id)}
                />
              )}
            />
          </View>

          <LabelComponent
            color={presetBase.colors.white}
            variant={ETypographyVariant.LARGE_SEMIBOLD}>
            Popular
          </LabelComponent>
          <View>
            <FlatList
              horizontal={true}
              data={popularMovies}
              snapToInterval={width * 0.7}
              keyExtractor={item => String(item.id)}
              renderItem={({item}) => (
                <SmallMovieCardComponent
                  props={item}
                  onMoviePress={() => navigateToMovieDetail(item.id)}
                />
              )}
            />
          </View>

          <LabelComponent
            color={presetBase.colors.white}
            variant={ETypographyVariant.LARGE_SEMIBOLD}>
            Upcoming
          </LabelComponent>
          <View>
            <FlatList
              horizontal={true}
              data={upcomingMoviesList}
              snapToInterval={width * 0.7}
              keyExtractor={item => String(item.id)}
              renderItem={({item}) => (
                <SmallMovieCardComponent
                  props={item}
                  onMoviePress={() => navigateToMovieDetail(item.id)}
                />
              )}
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: presetBase.colors.darkBlack,
  },
  loaderContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nowPlayingTitle: {paddingTop: 12},
});

export default HomeScreenComponent;
