import BreadItem from "../components/BreadItem"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { AppContext } from "../app/Provider";

const Detail = ({ navigation, route }) => {

    const { addToCart } = useContext(AppContext);

    const bread = route.params.bread;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{bread.id} - {bread.name}</Text>
            <Text>{bread.description}</Text>
            <Text>{bread.price}</Text>
            <Text>{bread.weight}</Text>
            <TouchableOpacity onPress={() => addToCart({ id: bread.id, name: bread.name, price: bread.price, weight: bread.weight })}><Text>Añadir al carrito</Text></TouchableOpacity>
        </View>
    )
}

export default Detail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 10
    }

});