import React, { useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Dimensions, TouchableOpacity, TextInput, Image } from 'react-native';

import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import { MaterialIcons, Entypo, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../../config/firebase';
import { getDatabase, ref, onValue, set, push } from 'firebase/database';
import { useAuthentication } from '../../utils/hooks/useAuthentication';

const auth = getAuth(app);


export default function SignUpScreen({ navigation }: any) {
    const [value, setValue] = React.useState({
        email: '',
        password: '',
        error: '',
        username: '',
        profile_picture: '',
    })

    function writeUserData(userId: any, name: string, email: string, imageUrl: string) {
        const db = getDatabase(app);
        const today = Date.now();
        set(ref(db, 'users/' + userId), {
            username: name,
            email: email,
            profile_picture: imageUrl,
            created_at: today,
        });
    }

    async function signUp() {
        if (value.email === '' || value.password === '') {
            setValue({
                ...value,
                error: 'Email and password are mandatory.'
            })
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, value.email, value.password)
                .then(userCredential => {
                    writeUserData(userCredential.user.uid, value.username, value.email, value.profile_picture)
                });

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
                <View style={styles.inputContainer}>
                    <Entypo name="pencil" size={24} color="black" />
                    <TextInput
                        placeholder='Username'
                        style={styles.control}
                        value={value.username}
                        onChangeText={(text: string) => setValue({ ...value, username: text })}
                        autoCapitalize='none'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesome name="user-circle-o" size={24} color="black" />
                    <TextInput
                        placeholder='Profile Picture Image URL'
                        style={styles.control}
                        value={value.profile_picture}
                        onChangeText={(text: string) => setValue({ ...value, profile_picture: text })}
                        autoCapitalize='none'
                    />
                </View>
                {value.profile_picture ? <Image style={styles.userPicture} source={{
                    uri: value.profile_picture
                }} /> : <View style={{ alignItems: 'center' }}><FontAwesome name="user-circle-o" size={150} color="black" /></View>}

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
    },
    userPicture: {
        width: 150,
        height: 150,
        borderRadius: 75,
        overflow: 'hidden',
        marginTop: 50

    },
});
