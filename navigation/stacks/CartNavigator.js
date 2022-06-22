import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/Cart';
import { COLORS } from '../../constants/colors';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: COLORS.primary
            },
            headerTintColor: COLORS.secondary,
            headerTitleStyle: {
                fontWeight: 'bold'
            }

        }}
    >

        <Stack.Screen name="Cart" component={Home} options={{ title: 'Carrito' }} />


    </Stack.Navigator>
);