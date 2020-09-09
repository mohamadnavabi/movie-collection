import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Styles } from '../styles/index';

// Prop Types
interface Props {
    title: string,
    movies: object[]
}

// Movie Horizontal Carousel
function MovieCarousel({ title, movies }: Props) {

    // Render List Items
    const _renderItem = ({ item }) => (
        <View style={Styles.horizontalListItem}>
            <View style={[Styles.flexRowSpaceBetween, Styles.flexWrap]}>
                <Text style={[Styles.boldText, Styles.flexWrap]}>{item.title}</Text>
                <Text style={Styles.regularText}>{item.date_of_release}</Text>
            </View>
            <View style={Styles.flexRowSpaceBetween}>
                <Text style={Styles.regularText}>Rating: {item.rating}</Text>

                <View style={Styles.flexRowCenter}>
                    {
                        item.tags.map(
                            (tag: string, index: number) =>
                                <Text key={index} style={Styles.regularText}>{tag}{(item.tags.length - 1) > index && ','} </Text>
                        )
                    }
                </View>
            </View>
        </View>
    )

    return (
        <>
            {/* Carousel Header */}
            <Text style={Styles.listTitle}>{title}</Text>

            {/* Carousel List */}
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={movies || []}
                keyExtractor={item => String(item.id)}
                renderItem={_renderItem}
            />
        </>
    )
}

export default MovieCarousel;
