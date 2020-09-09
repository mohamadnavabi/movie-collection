import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUserAuth } from '../store/user/userSelectors';
import { selectMovies, selectSearchedMovie } from '../store/movie/movieSelectors';
import { fetchMovies, searchMovies } from '../store/movie/movieAction';
import Search from '../components/Search';
import MovieCarousel from '../components/MovieCarousel';
import { Styles } from '../styles/index';
import { ScrollView } from 'react-native-gesture-handler';

// Prop Types
interface Props {
    search: any,
    searchMovies: any,
    getMovies: any,
    auth: any,
    movies: object[],
    searchedMovie: object[],
}

const Home = (props: Props) => {
    useEffect(() => {
        props.getMovies(props.auth.token);
    }, []);

    const searchChangedText = (text: string) => {
        props.search(props.auth.token, text)
    }

    return (
        <SafeAreaView style={Styles.container}>
            {/* Search Box */}
            <Search onChangeText={(text: string) => searchChangedText(text)} />

            <ScrollView style={Styles.container}>
                {/* Dummy Data */}
                <MovieCarousel title="All Movies" movies={props.movies.results} />

                {/* Dummy Data */}
                <MovieCarousel title="All Movies" movies={props.movies.results} />

                {/* Dummy Data */}
                <MovieCarousel title="All Movies" movies={props.movies.results} />

                {/* Dummy Data */}
                <MovieCarousel title="All Movies" movies={props.movies.results} />
            </ScrollView>
        </SafeAreaView>
    )
}

const mapStateToProps = createStructuredSelector({
    auth: selectUserAuth,
    movies: selectMovies,
    searchedMovie: selectSearchedMovie,
});

const mapDispatchToProps = dispatch => ({
    search: (token: string, searchFor: string) => dispatch(searchMovies(token, searchFor)),
    getMovies: (token: string) => dispatch(fetchMovies(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);