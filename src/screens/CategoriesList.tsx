import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUserAuth } from '../store/user/user.selectors';
import { selectCategories } from '../store/category/category.selectors';
import { fetchCategories } from '../store/category/category.action';
import CategoryList from '../components/CategoryList';

// Prop Types
interface Props {
    getCategories: any,
    auth: any,
    categories: object[]
}

const CategoriesList = (props: Props) => {
    useEffect(() => {
        props.getCategories(props.auth.token);
    }, []);

    return <CategoryList categories={props.categories.results} navigation={props.navigation} />
}

const mapStateToProps = createStructuredSelector({
    auth: selectUserAuth,
    categories: selectCategories
});

const mapDispatchToProps = dispatch => ({
    getCategories: (token: string) => dispatch(fetchCategories(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);
