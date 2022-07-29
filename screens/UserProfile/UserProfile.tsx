import { getAuth, signOut } from 'firebase/auth';
import { getDatabase, onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Button, Pressable } from 'react-native';

import { Text, View } from '../../components/Themed';
import app from '../../config/firebase';
import { useAuthentication } from '../../utils/hooks/useAuthentication';

const auth = getAuth(app);

export default function UserProfile({ navigation }: { navigation: any }) {
    // todo replace placehodler with actual user information
    // todo also make fields maybe editable like changing profile picture ?
    // probably also want to show how many stamps collected or something?
    const placeholderPicture = "https://wegotthiscovered.com/wp-content/uploads/2022/05/Spy-x-Family-anya.png"
    const [joinedDate, setJoinedDate] = useState<number>(0);
    const { user } = useAuthentication();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true)
        const db = getDatabase();
        const createdAtRef = ref(db, 'users/' + user?.uid + '/created_at');
        let data = 0;
        onValue(createdAtRef, (snapshot) => {
            console.log(snapshot)
            data = snapshot.val();
            setJoinedDate(data);
            setLoading(false)
        });

    })

    useEffect(() => {
        console.log('rerender joined date', joinedDate);
    }, [joinedDate, loading])

    const getDate = () => {
        const d = new Date(joinedDate);
        return d.toLocaleDateString();
    }

    return (
        <View style={styles.container}>
            <Image style={styles.userPicture} source={{
                uri: placeholderPicture
            }} />
            <View style={styles.userInfo}>
                <Text lightColor="rgba(0,0,0,0.8)"
                    darkColor="rgba(255,255,255,0.8)" style={styles.userInfoText} >Email: {auth.currentUser?.email}</Text>
                {/* <Text lightColor="rgba(0,0,0,0.8)"
                    darkColor="rgba(255,255,255,0.8)" style={styles.userInfoText}>Username: yuesie</Text> */}
                <Text lightColor="rgba(0,0,0,0.8)"
                    darkColor="rgba(255,255,255,0.8)" style={styles.userInfoText}>Joined on: {getDate()}</Text>
                <Text lightColor="rgba(0,0,0,0.8)"
                    darkColor="rgba(255,255,255,0.8)" style={styles.userInfoText}>Stamps collected: 20</Text>
                <Text lightColor="rgba(0,0,0,0.8)"
                    darkColor="rgba(255,255,255,0.8)" style={styles.userInfoText}>Stamps approved: 6</Text>
            </View>
            <Pressable style={({ pressed }) => [styles.logoutButton, { opacity: pressed ? 0.5 : 1 }]} onPress={() => { }} >
                <Text style={styles.logoutText} onPress={() => signOut(auth)}>Logout</Text>
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20
    },
    userPicture: {
        width: 150,
        height: 150,
        borderRadius: 75,
        overflow: 'hidden',
        marginTop: 50

    },
    userInfo: {
        width: '86%',
        paddingVertical: 40,
        marginTop: 30
    },
    userInfoText: {
        fontSize: 18,
        paddingVertical: 5
    },
    logoutButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#b55b46',
        marginTop: 80
    },
    logoutText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white'
    }
});