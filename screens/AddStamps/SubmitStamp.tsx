
import React, { useState } from 'react';
import { Button, Pressable, StyleSheet, TextInput, Image } from 'react-native';
import { Text, View } from '../../components/Themed';
import useColorScheme from '../../hooks/useColorScheme';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';




export default function SubmitStamp({ navigation }: { navigation: any }) {
    const theme = useColorScheme();

    const [stampName, setStampName] = useState<string>('');
    const [latitude, setLatitude] = useState<string>('');
    const [longitude, setLongitude] = useState<string>('');
    const [image, setImage] = useState<string>('');

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };


    // need to regex check that latitdue and longtidue are valid numbers
    // also make correct check that stamp is correct
    // also need to make button greyed out if incorrect

    return (
        <View style={styles.container}>
            <Text lightColor="black"
                darkColor="white" style={styles.prompt}> New stamp information: </Text>
            <TextInput
                style={theme === 'light' ? styles.lightTextInput : styles.darkTextInput}
                onChangeText={setStampName}
                value={stampName}
                placeholder="Stamp name"
            />
            <TextInput
                style={theme === 'light' ? styles.lightTextInput : styles.darkTextInput}
                onChangeText={setLatitude}
                value={latitude}
                placeholder="Latitude" />

            <TextInput
                style={theme === 'light' ? styles.lightTextInput : styles.darkTextInput}
                onChangeText={setLongitude}
                value={longitude}
                placeholder="Longitude" />



            <Pressable style={({ pressed }) => [styles.selectStampButton, { opacity: pressed ? 0.5 : 1 }]} onPress={pickImage} >
                <Text lightColor="black"
                    darkColor="white" style={styles.selectStampText}>Select stamp from camera roll</Text>
                <MaterialIcons name="insert-photo" size={30} color={theme === 'light' ? 'black' : "white"} />
            </Pressable>
            <View style={{ alignItems: 'center' }}>
                {image ? <Image source={{ uri: image }} style={{ width: 200, height: 200 }} /> :
                    <MaterialCommunityIcons name="postage-stamp" size={200} color={theme === 'light' ? '#635468' : "#eea382"} />}
            </View>

            <Pressable style={({ pressed }) => [styles.addStampButton, { opacity: pressed ? 0.5 : 1 }]} onPress={() => { }} >
                <Text style={styles.buttonText}>Submit for stamp review</Text>
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 30,
        paddingBottom: 80,
        justifyContent: 'space-around',
    },
    prompt: {
        fontSize: 20,

    },
    lightTextInput: {
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        marginTop: 20,
        padding: 10,
        color: 'black',
    },
    darkTextInput: {
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        marginTop: 20,
        padding: 10,
        color: 'white',
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
        backgroundColor: '#b55b46',
        marginVertical: 10,
    },
    selectStampButton: {
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 10,
        elevation: 3,
        flexDirection: 'row',
    },
    selectStampText: {
        fontSize: 15,
        lineHeight: 18,
        letterSpacing: 0.25,
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'white',
        fontWeight: 'bold'
    },
    emptyStampIcon: {
        alignItems: 'center',
    },

});
