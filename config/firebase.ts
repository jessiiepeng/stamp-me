// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import Constants from 'expo-constants';
import "firebase/auth";
import 'firebase/database';
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: Constants.manifest?.extra?.firebaseApiKey,
    authDomain: Constants.manifest?.extra?.firebaseAuthDomain,
    projectId: Constants.manifest?.extra?.firebaseProjectId,
    storageBucket: Constants.manifest?.extra?.firebaseStorageBucket,
    messagingSenderId: Constants.manifest?.extra?.firebaseMessagingSenderId,
    appId: Constants.manifest?.extra?.firebaseAppId,
    measurementId: Constants.manifest?.extra?.measurementId,
    databaseURL: Constants.manifest?.extra?.firebaseDatabaseURL,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

export const storage = getStorage(app);

export default app;
