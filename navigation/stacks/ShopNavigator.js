import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/Home';
import Breads from '../../screens/Breads';
import Detail from '../../screens/Detail';
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

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Breads" component={Breads} />
        <Stack.Screen name="Detail" component={Detail} />

    </Stack.Navigator>
);