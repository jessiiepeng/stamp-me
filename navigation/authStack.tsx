import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/SignInFlow/Welcome';
import SignInScreen from '../screens/SignInFlow/SignInScreen';
import SignOutScreen from "../screens/SignInFlow/SignUpScreen"

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Sign In" component={SignInScreen} />
            <Stack.Screen name="Sign Up" component={SignOutScreen} />
        </Stack.Navigator>
    );
}