import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { selectSearchedMovie } from '../store/movie/movieSelectors';
import SearchSVG from '../assets/icons/SearchSVG';
import { Mixins, Colors, Styles } from '../styles/index';

interface Props {
  onChangeText: any;
  searchText: string,
  searchedMovie: object[]
}

const Search = (props: Props) => {
  return (
    <View>
      {/* Search Input Wrapper */}
      <View style={styles.searchWrapper}>
        <SearchSVG stroke={Colors.GRAY_MEDIUM} style={styles.iconContainer} />
        <TextInput
          style={styles.searchInput}
          onChangeText={text => props.onChangeText(text)}
          value={props.searchText}
          placeholder='Enter Your Username'
        />
      </View>

      {/* Search Result Wrapper */}
      {
        (Object.keys(props.searchedMovie).length && props.searchedMovie.results.length) ?
          <View style={styles.searchResult}>
            {props.searchedMovie.results.map(movie => <Text key={movie.id} style={Styles.regularText}>{movie.title}</Text>)}
          </View>
          :
          null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  searchWrapper: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.WHITE,
    marginHorizontal: 15,
    height: 50,
    marginTop: 25,
    ...Mixins.boxShadow('rgba(0, 0, 0, 0.01)', { height: 1, width: 1 }, 4)
  },
  searchInput: {
    flex: 1
  },
  searchResult: {
    position: 'absolute',
    maxHeight: 200,
    padding: 5,
    marginHorizontal: 15,
    top: 70,
    backgroundColor: Colors.WHITE,
    ...Mixins.boxShadow('rgba(0, 0, 0, 0.01)', { height: 1, width: 1 }, 4),
    overflow: 'hidden'
  },
  iconContainer: {
    paddingLeft: 45
  }
})

const mapStateToProps = state => ({
  searchedMovie: selectSearchedMovie(state),
});

export default connect(mapStateToProps)(Search);