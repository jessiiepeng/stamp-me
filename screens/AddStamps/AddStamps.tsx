import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';


export default function AddStamps({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            <Text lightColor="black"
                darkColor="white" style={styles.prompt}> What do you want to do? </Text>
            <View style={styles.buttonGroup}>
                <Pressable style={({ pressed }) => [styles.addStampButton, { opacity: pressed ? 0.5 : 1 }]} onPress={() => { }} >
                    <Text style={styles.buttonText}>Submit a stamp</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [styles.reviewStampsButton, { opacity: pressed ? 0.5 : 1 }]} onPress={() => { }} >
                    <Text style={styles.buttonText}>Review submitted stamps</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [styles.approveStampsButton, { opacity: pressed ? 0.5 : 1 }]} onPress={() => { }} >
                    <Text style={styles.buttonText}>Approve stamps</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    prompt: {
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    buttonGroup: {
        marginTop: 20
    },
    addStampButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 18,
        paddingHorizontal: 60,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#f5d488',
        marginVertical: 10,
    },
    reviewStampsButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 18,
        paddingHorizontal: 60,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#f5b488',
        marginVertical: 10
    },
    approveStampsButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 18,
        paddingHorizontal: 60,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#dc8ba3',
        marginVertical: 10
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'white',
        fontWeight: 'bold'
    },
    tinyLogo: {
        width: '15%',
        height: 100,
        padding: 50
    },

});
