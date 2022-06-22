import { StyleSheet, View, Text } from 'react-native';
import { FlatList, TouchableOpacity } from "react-native-gesture-handler"
import GridItem from '../components/GridItem/GridItem';
import { CATEGORIES } from '../data/categories';

const Home = ({ navigation, route }) => {

    const handleSelectedCategory = (item) => {
        navigation.navigate('Breads', {
            categoryId: item.id,
            name: item.title
        })
    }
    return (
        <View style={styles.container}>
            <FlatList data={CATEGORIES} numColumns={2} keyExtractor={item => item.id}
                renderItem={({ item }) => <GridItem key={item.id} item={item} onSelected={handleSelectedCategory} />} />
        </View >
    )
}



const styles = StyleSheet.create({

    btn: {
        marginLeft: 20,
        backgroundColor: 'gray',
        padding: 10,
        color: 'white',
        borderRadius: 5
    },
    white: {
        color: 'white'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    grid: {
        flex: 1,
        alignItems: 'stretch',
        flexDirection: 'row',

    }

});

export default Home