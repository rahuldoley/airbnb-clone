import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDwlx1R0fUWdcvv6YgiNk-nb6eVSrQ2UBU",
    authDomain: "airbnb-clone-a71de.firebaseapp.com",
    projectId: "airbnb-clone-a71de",
    storageBucket: "airbnb-clone-a71de.appspot.com",
    messagingSenderId: "46921262910",
    appId: "1:46921262910:web:0ecd504b3b4b2a7e196e6f",
    measurementId: "G-01B9V9MK23"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };