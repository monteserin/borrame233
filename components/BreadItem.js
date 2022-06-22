import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler"
import { StyleSheet } from "react-native";

const BreadItem = ({ item, onSelected }) => {
    return (
        <TouchableOpacity onPress={() => onSelected(item)}>
            <View style={styles.breadItem}>
                <View>
                    <Text style={styles.tit}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.details}>{item.price}</Text>
                    <Text style={styles.details}>{item.weight}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default BreadItem;

const styles = StyleSheet.create({
    breadItem: {
        padding: 20,
        margin: 10,
        borderRadius: 3,
        backgroundColor: '#ccc'
    },
    tit: {
        fontSize: 20,
    },
    details: {
        fontSize: 18
    }
})