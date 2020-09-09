import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Routes
import CategoriesList from '../screens/CategoriesList';
import CategoryMovies from '../screens/CategoryMovies';

const Stack = createStackNavigator();

function StackNavigators() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CategoriesList" component={CategoriesList} />
            <Stack.Screen name="CategoryMovies" component={CategoryMovies} />
        </Stack.Navigator>
    );
}

export default StackNavigators;