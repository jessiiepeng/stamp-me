import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';


export default function UserProfile({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            <Text> User Profile and Logout page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

    },
});