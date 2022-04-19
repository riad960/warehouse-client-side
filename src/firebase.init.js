// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCioo5OMqZFFcYBuj3JcUlXYIPQ1YwjwGY",
  authDomain: "travel-go-go-c23b7.firebaseapp.com",
  projectId: "travel-go-go-c23b7",
  storageBucket: "travel-go-go-c23b7.appspot.com",
  messagingSenderId: "401633392324",
  appId: "1:401633392324:web:632ac3667f702d639ffb91",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
