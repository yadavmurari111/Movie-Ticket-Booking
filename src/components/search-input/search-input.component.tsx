import React, {FunctionComponent, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {presetBase} from '../../utils/color';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome';

interface ISearchInputComponent {
  searchMovie(movieName: string): void;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    height: 45,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: presetBase.colors.blueBase,
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    color: presetBase.colors.blueBase,
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchButton: {
    margin: 10,
    justifyContent: 'center',
  },
});

const SearchInputComponent: FunctionComponent<ISearchInputComponent> = ({
  searchMovie,
}) => {
  const [searchText, setSearchText] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={'Search movie...'}
        placeholderTextColor={presetBase.colors.grey80}
        style={styles.textInput}
        onChangeText={setSearchText}
      />
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => searchMovie(searchText)}>
        <MaterialCommunityIcons
          size={24}
          name={'search'}
          color={presetBase.colors.blueBase}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInputComponent;
