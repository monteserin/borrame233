import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, View, Text, TextInput } from 'react-native';
import { signUp, signIn } from '../app/api';
import { COLORS } from '../constants/colors';

const title = 'REGISTRO',
    message = '¿Ta tienes una cuenta?',
    messageAction = 'Ingresar',
    messageTarget = 'login';

const AuthScreen = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <KeyboardAvoidingView
            behavior="height"
            style={styles.screen}
        >
            <View style={styles.container}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input} keyboardType="email-address" autoCapitalize="none" onChangeText={text => setEmail(text)} />
                <Text style={styles.label} >Clave</Text>
                <TextInput style={styles.input} secureTextEntry autoCapitalize="none" onChangeText={text => setPassword(text)} />

                <View style={styles.prompt}>
                    <Text style={styles.promptMessage}>
                        {message}
                    </Text>
                    <TouchableOpacity onPress={() => signIn(email, password)}>
                        <Text style={styles.promptButton}>
                            {messageAction}
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => signUp(email, password)}><Text>Sign Up</Text></TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default AuthScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContet: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 18,
        textAlign: 'center'
    },
    container: {
        width: '80%',
        maxWidth: 400,
        padding: 12,
        margin: 12,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    prompt: {
        alignItems: 'center',
    },
    promptMessage: {
        fontSize: 16,
        color: '#333'
    },
    promptButton: {
        fontSize: 16,
        color: COLORS.primary
    },
    button: {
        backgroundColor: COLORS.primary,
        marginVertical: 20
    },
    label: {

    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        padding: 12,
        marginVertical: 12,
        fontSize: 16,
        color: '#333',
        backgroundColor: '#eee',
        width: '100%'

    }
})