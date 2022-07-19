import React from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../../components/Themed';
import SelectedMapMarker from '../MapScreen/SelectedMapMarker';


export default function StampDetail({ navigation, route }: { navigation: any, route: any }) {
    return (
        <View style={styles.container}>
            <SelectedMapMarker stamp={route.params.stamp} isScreenView />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: "wrap"
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
