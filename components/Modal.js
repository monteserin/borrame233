import { useEffect } from 'react';
import { Text, View, Modal, TouchableOpacity } from 'react-native';
import styles from '../styles';

const MyModal = ({ item, close, deleteItem, visible }) => {
    return (
        <Modal animationType="slide" presentationStyle="formSheet" visible={visible}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <View style={{ backgroundColor: 'white', padding: 30, maxWidth: 700, position: 'relative' }}>
                    <TouchableOpacity style={{ position: 'absolute', top: 10, right: 10 }} onPress={close}><Text>X</Text></TouchableOpacity>

                    <View style={styles.modalTitle}>
                        <Text style={styles.modalTitleText}>¿Realmente quieres borrar el producto?</Text>
                    </View>

                    <View style={styles.modalMessage}>
                        <Text style={styles.modalItem}>{item && item.value}</Text>
                    </View>
                    <TouchableOpacity style={styles.modalButton} onPress={() => {
                        deleteItem(item.id);
                        close();
                    }}><Text style={styles.modalButtonText}>Borrar</Text></TouchableOpacity>


                </View>
            </View>
        </Modal >
    );
}


export default MyModal;