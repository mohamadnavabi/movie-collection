import React from 'react';
import { View, TouchableWithoutFeedback, Text, FlatList } from 'react-native';
import { Styles } from '../styles/index';

interface Props {
    categories: object[],
    navigation: any
}

function CategoryList({ categories, navigation }: Props) {
    // Render List Items
    const _renderItem = ({ item }) => (
        <TouchableWithoutFeedback onPress={() => navigation.push('CategoryMovies', { name: item.name })} >
            <View style={Styles.listView}>
                <Text style={Styles.regularText}>{item.name}</Text>
            </View>
        </TouchableWithoutFeedback>
    )

    return (
        <FlatList
            data={categories || []}
            keyExtractor={item => String(item.id)}
            renderItem={_renderItem}
        />
    )
}

export default CategoryList;
