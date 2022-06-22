import React from 'react';
import { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { AppContext } from "../app/Provider";
import { getCurrentUser, createOrder } from '../app/api';
import { async } from '@firebase/util';

const Cart = () => {
    const { state, clearProduct } = useContext(AppContext);

    const generateOrder = async () => {
        const u = await getCurrentUser();
        console.log(u)
        const order = {
            buyer: u.email,
            items: state,
            total: getTotal(),
            date: new Date().toLocaleString()
        }
        createOrder(order);
    }

    const getTotal = () => state.reduce((acc, obj) => acc + obj.price, 0)
    return (
        <View><Text>Cart 4324</Text>

            <FlatList
                data={state}
                renderItem={({ item }) => <View>
                    <Text>{item.name}</Text>
                    <Text>{item.price}</Text>
                    <TouchableOpacity onPress={() => clearProduct(item)}>Borrar</TouchableOpacity>
                </View>}
                keyExtractor={item => item.id}
            />

            <Text>{getTotal()}</Text>

            <TouchableOpacity onPress={() => generateOrder()}>Hacer pedido</TouchableOpacity>
        </View>
    )
}

export default Cart