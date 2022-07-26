import React, { useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';

export default function SignInScreen({ navigation }: RootTabScreenProps<'StampMap'>) {
    return (
        <View style={styles.container}>
            <Text>Sign in screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

    },
});
