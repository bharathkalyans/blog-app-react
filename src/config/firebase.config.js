import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyAQTyG9_OXRn8_v7FOwliLFf70otrqeA98",
    authDomain: "project-assignment-9a024.firebaseapp.com",
    projectId: "project-assignment-9a024",
    storageBucket: "project-assignment-9a024.appspot.com",
    messagingSenderId: "746127582852",
    appId: "1:746127582852:web:f8b24ba7c99902c78744d1",
    measurementId: "G-MDMPF9XWW2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;