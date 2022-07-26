import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../constants/Colors';

import NotFoundScreen from '../screens/NotFoundScreen';
import StampCollection from '../screens/StampCollection/StampCollection';
import StampDetail from '../screens/StampDetail/StampDetail';
import UserProfile from '../screens/UserProfile/UserProfile';
import AddStamps from '../screens/AddStamps/AddStamps';
import SubmitStamp from '../screens/AddStamps/SubmitStamp';


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function UserStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="UserProfile" component={UserProfile} options={{ title: 'My Profile' }} />
            </Stack.Group>
            <Stack.Screen name="StampDetail" component={StampDetail} options={{ title: 'Stamp Details' }} />
            <Stack.Screen name='AddStamps' component={AddStamps} options={{ title: 'Stamp Processing' }} />
            <Stack.Screen name="SubmitStamp" component={SubmitStamp} options={{ title: 'Submit new stamp' }} />
        </Stack.Navigator>
    );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    // todo convert info model to the profile icon so you can logout and stuff!

    return (
        <BottomTab.Navigator
            initialRouteName="StampMap"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
            }}>
            <BottomTab.Screen
                name="StampMap"
                component={MapScreen}
                options={({ navigation }: RootTabScreenProps<'StampMap'>) => ({
                    title: 'Stamp Map',
                    tabBarIcon: ({ color }) => <TabBarIcon name="map" color={color} />,
                    headerRight: () => (
                        <Pressable
                            onPress={() => navigation.navigate('UserProfile')}
                            style={({ pressed }) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}>
                            <FontAwesome
                                name="user"
                                size={25}
                                color={Colors[colorScheme].text}
                                style={{ marginRight: 15 }}
                            />
                        </Pressable>
                    ),
                    headerLeft: () => (
                        <Pressable
                            onPress={() => navigation.navigate('AddStamps')}
                            style={({ pressed }) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}>
                            <FontAwesome
                                name="plus"
                                size={25}
                                color={Colors[colorScheme].text}
                                style={{ marginLeft: 15 }}
                            />
                        </Pressable>
                    )
                })}
            />
            <BottomTab.Screen
                name="StampCollection"
                component={StampCollection}
                options={{
                    title: 'My Stamp Collection',
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="postage-stamp" size={30} color={color} />,
                }}
            />
        </BottomTab.Navigator>
    );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={25} style={{ marginBottom: -3 }} {...props} />;
}
