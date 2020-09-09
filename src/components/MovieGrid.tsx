import React from 'react';
import { View, TouchableWithoutFeedback, Text, FlatList } from 'react-native';
import { Styles } from '../styles/index';

interface Props {
    movies: object[]
}

function MovieGrid({ movies }: Props) {
    const _renderItem = ({ item }) => (
        <View style={Styles.gridView}>
            <View style={[Styles.flexRowSpaceBetween, Styles.flexWrap]}>
                <Text style={[Styles.boldText, Styles.flexWrap]}>{item.title}</Text>
                <Text style={Styles.regularText}>{item.date_of_release}</Text>
            </View>
            <View style={Styles.flexRowSpaceBetween}>
                <Text style={Styles.regularText}>Rating: {item.rating}</Text>
            </View>
        </View>
    )

    return (
        <FlatList
            data={movies || []}
            numColumns={2}
            keyExtractor={item => String(item.id)}
            renderItem={_renderItem}
        />
    )
}

export default MovieGrid;
