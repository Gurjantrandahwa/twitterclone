import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAk1LHnSfZqM9qlsPNlGXVtkxoxtTFHjmI",
    authDomain: "twitter-clone-94586.firebaseapp.com",
    databaseURL: "https://twitter-clone-94586-default-rtdb.firebaseio.com",
    projectId: "twitter-clone-94586",
    storageBucket: "twitter-clone-94586.appspot.com",
    messagingSenderId: "770025475680",
    appId: "1:770025475680:web:3719bd82e2d41a81d43d05",
    measurementId: "G-HTH1SW0GJK"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;