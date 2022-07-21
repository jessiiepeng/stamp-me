import React, { useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import SelectedMapMarker from './SelectedMapMarker';
import StampMap from './StampMap';
import mockStampCollection from '../../components/mock/mockData';

export default function MapScreen({ navigation }: RootTabScreenProps<'StampMap'>) {
    const [selectedStampIndex, setSelectedStampIndex] = useState<number>(-1);
    // todo change initial region to position of user
    return (
        <View style={styles.container}>
            <StampMap stampCollection={mockStampCollection} setSelectedStampIndex={setSelectedStampIndex} />
            {selectedStampIndex >= 0 ? < SelectedMapMarker stamp={mockStampCollection[selectedStampIndex]} /> :
                <Text style={styles.body} >Select a marker to see more details! </Text>}
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
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.60,
    },
    body: {
        fontSize: 15,
        marginTop: 75
    }
});
