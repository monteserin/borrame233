import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'


const GridItem = ({ item, onSelected }) => {
    return (<View>
        <TouchableOpacity onPress={() => onSelected(item)}
            style={{ ...styles.container, backgroundColor: item.color }}>
            <View style={{ height: 150, width: 200, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

export default GridItem