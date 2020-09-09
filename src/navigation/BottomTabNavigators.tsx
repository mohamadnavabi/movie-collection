import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../styles/index';
import { HomeSVG, GridSVG, MovieSVG } from '../assets/icons/index';

// Screens
import Home from '../screens/Home';
import StackNavigators from './StackNavigators';

type BottomTabNavigatorsList = {
    Home: undefined;
    CategoriesList: undefined;
    CategoryMovies: undefined;
}

const BottomTab = createBottomTabNavigator<BottomTabNavigatorsList>();

function BottomTabNavigators() {
    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: Colors.PRIMARY,
            }}
        >
            <BottomTab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <HomeSVG stroke={color} width={size} height={size} fill='none' />
                    ),
                }}
            />
            <BottomTab.Screen
                name="CategoriesList"
                component={StackNavigators}
                options={{
                    tabBarLabel: 'Categories',
                    tabBarIcon: ({ color, size }) => (
                        <GridSVG stroke={color} width={size} height={size} fill='none' />
                    )
                }}
            />
        </BottomTab.Navigator>
    );
}

export default BottomTabNavigators;