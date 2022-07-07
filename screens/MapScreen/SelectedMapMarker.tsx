import React from 'react';
import { Stamp } from '../types/StampTypes';
import { StyleSheet, Image } from "react-native";
import { View, Text } from '../../components/Themed';

interface SelectedMapMarkerProps {
    stamp: Stamp;
}

export default function SelectedMapMarker(props: SelectedMapMarkerProps) {
    const { stamp } = props;
    console.log(stamp);
    console.log(stamp.name)
    // placeholder
    const getDate = () => {
        const d = new Date(stamp.stampDate);
        return d.toDateString();
    };

    return (
        <View style={styles.stampInfo}>
            <Image style={styles.tinyLogo} source={{
                uri: stamp.imageUrl,
            }} />
            <View style={styles.stampDetails}>
                <Text style={styles.stampName} lightColor="rgba(0,0,0,0.8)"
                    darkColor="rgba(255,255,255,0.8)"> {stamp.name} </Text>
                <Text lightColor="rgba(0,0,0,0.8)"
                    darkColor="rgba(255,255,255,0.8)"> Stamped on: </Text>
                <Text lightColor="rgba(0,0,0,0.8)"
                    darkColor="rgba(255,255,255,0.8)"> {getDate()} </Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    stampInfo: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginTop: '5%',
        width: '100%',
        paddingHorizontal: '4%'


    },
    tinyLogo: {
        width: 100,
        height: 100,
        padding: 2
    },
    stampDetails: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 2
    },
    stampName: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 3
    }
});
