import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUserAuth } from '../store/user/userSelectors';
import { selectCategoryMovies } from '../store/movie/movieSelectors';
import { fetchMovieWithCategory, clearCategoryMovies } from '../store/movie/movieAction';
import { Styles } from '../styles/index';
import GridList from '../components/MovieGrid';

interface Props {
    getMovieWithCategory: any,
    clearCategoryMovies: any,
    auth: any,
    categoryMovies: object[],
    route: string
}

const CategoryMovies = (props: Props) => {
    useEffect(() => {
        props.getMovieWithCategory(props.auth.token, props.route.params.name);

        // Unmount Component
        return () => { props.clearCategoryMovies(); };
    }, []);


    return (
        <SafeAreaView style={Styles.container}>
            <GridList movies={props.categoryMovies.results} />
        </SafeAreaView>
    )
}

const mapStateToProps = createStructuredSelector({
    auth: selectUserAuth,
    categoryMovies: selectCategoryMovies,
});

const mapDispatchToProps = dispatch => ({
    getMovieWithCategory: (token: string, category: string) => dispatch(fetchMovieWithCategory(token, category)),
    clearCategoryMovies: () => dispatch(clearCategoryMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryMovies);
