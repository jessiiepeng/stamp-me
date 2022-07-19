import React, { useState } from 'react';
import { StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import mockStampCollection from '../../components/mock/mockData';
import { RootTabScreenProps } from '../../types';

export default function StampCollection({ navigation }: RootTabScreenProps<'StampCollection'>) {
    const [selectedStampIndex, setSelectedStampIndex] = useState<number>(-1);

    // need to create empty state honestly probably pass all stamps in parent component of this one


    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>My Stamp Collection</Text> */}
            {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
            {mockStampCollection.map((stamp, index) => (
                <TouchableOpacity key={index} onPress={() => {
                    navigation.navigate('StampDetail', { stamp: stamp })
                }} style={styles.stamp} >
                    <Image style={styles.tinyLogo} source={{
                        uri: stamp.imageUrl,
                    }} />
                </TouchableOpacity>

            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: "wrap",
    },
    stamp: {
        padding: 15
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
