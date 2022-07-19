import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';


export default function AddStamps({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            <Text> Add stamps</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    tinyLogo: {
        width: '15%',
        height: 100,
        padding: 50
    },

});
