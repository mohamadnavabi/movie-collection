import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUserAuth } from '../store/user/userSelectors';
import { Colors } from '../styles/index';

// Routes
import Login from '../screens/Login';
import BottomTabNavigators from './BottomTabNavigators';


// Custom Navigation Container Theme
const customTheme = {
    ...DefaultTheme,
    backgroundColor: 'red',
    colors: {
        ...DefaultTheme.colors,
        primary: Colors.PRIMARY,
        background: Colors.WHITE
    }
};

const Stack = createStackNavigator();

function RootNavigator({ auth }) {
    return (
        <NavigationContainer theme={customTheme}>
            <Stack.Navigator headerMode='none'>
                {
                    // Check that the user is logged in
                    auth.hasOwnProperty('token') ?
                        <Stack.Screen name="Home" component={BottomTabNavigators} />
                        :
                        <Stack.Screen name="Login" component={Login} />
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    auth: selectUserAuth
});

export default connect(mapStateToProps)(RootNavigator);