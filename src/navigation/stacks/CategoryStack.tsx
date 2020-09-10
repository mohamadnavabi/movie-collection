import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Routes
import CategoriesList from '../../screens/CategoriesList';
import CategoryMovies from '../../screens/CategoryMovies';

const Stack = createStackNavigator();

// Stack Navigators
function CategoryStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="CategoriesList"
                options={{ title: 'Categories List' }}
                component={CategoriesList}
            />
            <Stack.Screen
                name="CategoryMovies"
                options={{ title: 'Category Movies' }}
                component={CategoryMovies}
            />
        </Stack.Navigator>
    );
}

export default CategoryStack;