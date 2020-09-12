import React from 'react';
import { StyleSheet, View, ScrollView, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { selectSearchedMovie } from '../store/movie/movie.selectors';
import SearchSVG from '../assets/icons/SearchSVG';
import { Mixins, Colors, Typography } from '../styles/index';

interface Props {
  onChangeText: any;
  searchedMovie: object[]
}

const Search = (props: Props) => {
  return (
    <View style={styles.container}>
      {/* Search Input Wrapper */}
      <View style={styles.searchWrapper}>
        <SearchSVG stroke={Colors.GRAY_MEDIUM} style={styles.iconContainer} />
        <TextInput
          style={styles.searchInput}
          onChangeText={text => props.onChangeText(text)}
          placeholder='Enter Your Username'
        />
      </View>

      {/* Search Result Wrapper */}
      {
        (Object.keys(props.searchedMovie).length && props.searchedMovie.results.length) ?
          <ScrollView style={styles.searchResult}>
            {props.searchedMovie.results.map(movie => <Text key={movie.id} style={styles.searchText}>{movie.title}</Text>)}
          </ScrollView>
          :
          null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: 15,
    left: 0,
    right: 0,
    zIndex: 2,
    marginBottom: 15
  },
  searchWrapper: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.WHITE,
    marginHorizontal: 15,
    height: 50,
    marginTop: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    ...Mixins.boxShadow('rgba(0, 0, 0, 0.01)', { height: 1, width: 1 }, 4)
  },
  searchInput: {
    flex: 1
  },
  searchResult: {
    position: 'absolute',
    top: 70,
    right: 0,
    left: 0,
    maxHeight: 200,
    padding: 5,
    marginHorizontal: 15,
    backgroundColor: Colors.WHITE,
    borderTopColor: Colors.PRIMARY,
    borderTopWidth: 1,
    ...Mixins.boxShadow('rgba(0, 0, 0, 0.01)', { height: 1, width: 1 }, 4),
    zIndex: 2
  },
  iconContainer: {
    paddingLeft: 45
  },
  searchText: {
    ...Typography.FONT_REGULAR,
    paddingVertical: 5,
    color: Colors.GRAY_DARK
  }
})

const mapStateToProps = state => ({
  searchedMovie: selectSearchedMovie(state),
});

export default connect(mapStateToProps)(Search);
