import React from 'react';
import AuthScreen from '../../screens/AuthScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShow: false }}
        >
            <Stack.Screen name="Auth" component={AuthScreen} />
        </ Stack.Navigator>
    )
}

export default AuthNavigator