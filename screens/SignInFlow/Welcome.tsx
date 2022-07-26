import React, { useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import mockStampCollection from '../../components/mock/mockData';

export default function Welcome({ navigation }: any) {
    // todo add bg cute image
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Stamped!</Text>
            <Text style={styles.subtitle}>Ready to start your stamp collection?</Text>

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Sign In')}>
                    <Text style={{ color: '#b55b46' }}>Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Sign Up')}>
                    <Text style={{ color: 'white' }}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        paddingBottom: 10,
    },
    subtitle: {
        fontSize: 15,
        paddingBottom: 10,
    },
    buttons: {
        flexDirection: 'row',
    },
    button1: {
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 4,
        borderColor: '#b55b46',
        borderWidth: 1,
        marginHorizontal: 10
    },
    button2: {
        padding: 15,
        backgroundColor: '#b55b46',
        borderRadius: 4,
    }
});
