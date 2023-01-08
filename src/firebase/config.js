// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-QzvamNlGVIk-lR_eDDDV-KSwlOASEUc",
    authDomain: "journal-app-52604.firebaseapp.com",
    projectId: "journal-app-52604",
    storageBucket: "journal-app-52604.appspot.com",
    messagingSenderId: "120177670174",
    appId: "1:120177670174:web:6d25f246fcc76e7081560f"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );

