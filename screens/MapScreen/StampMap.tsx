import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';
import { CollectedStamp } from '../types/StampTypes';

interface StampMapProps {
    stampCollection: CollectedStamp[];
    setSelectedStampIndex: (n: number) => void;
}

export default function StampMap(props: StampMapProps) {
    const { stampCollection, setSelectedStampIndex } = props;
    // todo add image instead of pin

    const getDate = (date: number) => {
        const d = new Date(date);
        return d.toDateString();
    };
    return (
        <MapView style={styles.map} initialRegion={{
            latitude: 43.6532,
            longitude: -79.3832,
            latitudeDelta: 0.04,
            longitudeDelta: 0.1,
        }} >
            {
                stampCollection.map((stamp, index) => (
                    <Marker
                        key={index}
                        coordinate={{ latitude: stamp.latitude, longitude: stamp.longitude }}
                        title={stamp.name}
                        description={getDate(stamp.stampDate)}
                        onSelect={(e) => setSelectedStampIndex(index)}
                    />
                ))
            }

        </MapView>
    );
}
const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.60,
    },
});
