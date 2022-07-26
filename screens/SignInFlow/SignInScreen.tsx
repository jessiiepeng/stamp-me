import { Entypo, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';

import { Text, View } from '../../components/Themed';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

export default function SignInScreen({ navigation }: any) {
    const [value, setValue] = React.useState({
        email: '',
        password: '',
        error: ''
    });

    async function signIn() {
        if (value.email === '' || value.password === '') {
            setValue({
                ...value,
                error: 'Email and password are mandatory.'
            })
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, value.email, value.password);
        } catch (error: any) {
            setValue({
                ...value,
                error: error.message,
            })
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign in!</Text>
            {!!value.error && <View style={styles.error}><Text>{value.error}</Text></View>}
            <View style={styles.controls}>
                <View style={styles.inputContainer}>
                    <MaterialIcons name="email" size={24} color="black" />
                    <TextInput
                        placeholder='Email'
                        style={styles.control}
                        value={value.email}
                        onChangeText={(text: string) => setValue({ ...value, email: text })}
                        autoCapitalize='none'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Entypo name="key" size={24} color="black" />
                    <TextInput
                        placeholder='Password'
                        style={styles.control}
                        value={value.password}
                        onChangeText={(text: string) => setValue({ ...value, password: text })}
                        secureTextEntry={true}
                        autoCapitalize='none'
                    />
                </View>
                <TouchableOpacity style={styles.button1} onPress={signIn}>
                    <Text style={{ color: '#b55b46' }}>Sign in</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        paddingBottom: 10,
    },
    controls: {
        width: '60%'
    },
    control: {
        marginTop: 10,
        marginLeft: 10,
    },
    error: {
        marginTop: 10,
        padding: 10,
        color: '#fff',
        backgroundColor: '#D54826FF',
    },
    button1: {
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 4,
        borderColor: '#b55b46',
        borderWidth: 1,
        marginHorizontal: 10,
        alignItems: 'center'
    },
    inputContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#000',
        marginVertical: 10,
        paddingBottom: 5,
    }
});
