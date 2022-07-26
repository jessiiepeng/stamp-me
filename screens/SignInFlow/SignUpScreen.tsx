import React, { useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native';

import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../../config/firebase';

const auth = getAuth(app);

export default function SignUpScreen({ navigation }: any) {
    const [value, setValue] = React.useState({
        email: '',
        password: '',
        error: ''
    })


    async function signUp() {
        if (value.email === '' || value.password === '') {
            setValue({
                ...value,
                error: 'Email and password are mandatory.'
            })
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, value.email, value.password);
            // navigation.navigate('Sign In');
        } catch (error: any) {
            setValue({
                ...value,
                error: error.message,
            })
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign up!</Text>
            <View style={styles.controls}>
                {!!value.error && <View style={styles.error}><Text>{value.error}</Text></View>}
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
                <TouchableOpacity style={styles.button2} onPress={signUp}>
                    <Text style={{ color: 'white' }}>Sign up</Text>
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
    button2: {
        padding: 15,
        backgroundColor: '#b55b46',
        borderRadius: 4,
        marginTop: 10,
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
