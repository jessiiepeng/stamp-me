import React, { useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import SelectedMapMarker from './SelectedMapMarker';
import StampMap from './StampMap';
import mockStampCollection from '../../components/mock/mockData';

import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';

const LOCATION_TASK_NAME = 'background-location-task';

// const requestPermissions = async () => {
//     const { status } = await Location.requestPermissionsAsync();
//     if (status === 'granted') {
//         await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
//             accuracy: Location.Accuracy.Balanced,
//         });
//     }
// };

// const PermissionsButton = () => (
//     <TouchableOpacity onPress={requestPermissions}>
//         <Text>Enable background location</Text>
//     </TouchableOpacity>
// );

TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }: any) => {
    if (error) {
        // Error occurred - check `error.message` for more details.
        return;
    }
    if (data) {
        const { locations } = data;
        // do something with the locations captured in the background
        console.log(locations);
    }
});



export default function MapScreen({ navigation }: RootTabScreenProps<'StampMap'>) {
    const [selectedStampIndex, setSelectedStampIndex] = useState<number>(-1);
    // todo change initial region to position of user

    return (
        <View style={styles.container}>
            {/* <PermissionsButton /> */}
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
