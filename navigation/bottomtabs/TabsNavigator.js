import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '../../constants/colors';
import { View, Text } from 'react-native';
import ShopNavigator from '../stacks/ShopNavigator';
import CartNavigator from '../stacks/CartNavigator';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomTabs = createBottomTabNavigator();

const BTabs = () => (
    <BottomTabs.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: COLORS.primary
            },
            headerShown: false,
            tabBarShowLabel: true,
            tabBarStyles: styles.tabBar,
            headerTintColor: COLORS.secondary,
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}
    >

        <BottomTabs.Screen name="ShopTab" component={ShopNavigator}

            options={{
                tabBarIcon: ({ focused }) => <Ionicons name="md-home" size={30} color="#900" />,
                title: "Shop"
            }}


        />
        <BottomTabs.Screen name="CartTab" component={CartNavigator}

            options={{
                tabBarIcon: ({ focused }) => <Ionicons name="md-cart" size={30} color="#900" />,
                title: 'cart'
            }}

        />

    </BottomTabs.Navigator >
);


export default BTabs;

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: '#7f5df0',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})