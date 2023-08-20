import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Keyboard,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import SearchInputComponent from './components/search-input/search-input.component';
import {presetBase} from './utils/color';
import {MovieItem} from './constants/constant';
import SmallMovieCardComponent from './components/small-movie-card/small-movie-card.component';
import {getSearchedMoviesList} from './data/api-calls';
import ROUTE_NAME from './navigation/navigation-constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchScreenComponent = ({navigation}: any) => {
  const {width} = useWindowDimensions();
  const [loading, setLoading] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState<
    MovieItem[] | [] | undefined
  >(undefined);

  const searchItem = async (keyword: string) => {
    setLoading(true);
    Keyboard.dismiss();
    let tempSearchItem = await getSearchedMoviesList(keyword);
    setSearchedMovies(tempSearchItem.results);
    setLoading(false);
  };

  const navigateToMovieDetail = (id: number) => {
    navigation.navigate(ROUTE_NAME.MOVIE_DETAIL, {movieId: id});
  };

  return (
    <View style={styles.container}>
      <SearchInputComponent searchMovie={keyword => searchItem(keyword)} />

      {loading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size={'large'} color={presetBase.colors.white} />
        </View>
      )}

      {searchedMovies && (
        <FlatList
          numColumns={2}
          data={searchedMovies}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <SmallMovieCardComponent
              props={item}
              cardWidth={width / 2 - 20 - 12}
              onMoviePress={() => navigateToMovieDetail(item.id)}
            />
          )}
        />
      )}
      {!searchedMovies && (
        <View style={styles.loaderContainer}>
          <Ionicons
            name={'search'}
            color={presetBase.colors.blueBase}
            size={100}
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: presetBase.colors.darkBlack,
  },
  loaderContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchScreenComponent;
