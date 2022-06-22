import { View, Text, FlatList } from "react-native";
import BreadItem from "../components/BreadItem";
import { BREADS } from "../data/breads";

const Breads = ({ navigation, route }) => {
    const breads = BREADS.filter(bread => bread.category === route.params.categoryId)

    const handleSelected = (item) => {
        navigation.navigate('Detail', {
            bread: item
        })
    }
    return (
        <View>
            <FlatList
                data={breads}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <BreadItem item={item} onSelected={() => handleSelected(item)} />}
            >
                <Text>{route.params.name}</Text>
                <Text>{route.params.categoryId}</Text>

            </FlatList>
        </View>
    )
}

export default Breads