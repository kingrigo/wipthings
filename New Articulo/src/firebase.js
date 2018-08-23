import {initializeApp} from 'firebase';
import 'firebase/firestore';


const app = initializeApp({
    apiKey: "AIzaSyCy90jseKQNTntu8G0-ubajsBRvEiiTAgc",
    authDomain: "urbantestvfire.firebaseapp.com",
    databaseURL: "https://urbantestvfire.firebaseio.com",
    projectId: "urbantestvfire",
    storageBucket: "urbantestvfire.appspot.com",
    messagingSenderId: "858718951345"
});

export const db = app.firestore();