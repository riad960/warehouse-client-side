// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDt-Ebc4U_68wPr5SEE-xG7g_HbVWmCwsI",
    authDomain: "watch-world-c349c.firebaseapp.com",
    projectId: "watch-world-c349c",
    storageBucket: "watch-world-c349c.appspot.com",
    messagingSenderId: "293788615110",
    appId: "1:293788615110:web:fe6545fc3230d89bef32c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;