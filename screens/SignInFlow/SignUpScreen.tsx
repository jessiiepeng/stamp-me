import React, { useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import mockStampCollection from '../../components/mock/mockData';

export default function SignUpScreen({ navigation }: RootTabScreenProps<'StampMap'>) {
    return (
        <View style={styles.container}>
            <Text>Sign up screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

    },
});
