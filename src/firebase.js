import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBAE-lyrbO1kKhtLnTP1IBT_ODgAN2MWZw",
    authDomain: "streethub-e1b32.firebaseapp.com",
    projectId: "streethub-e1b32",
    storageBucket: "streethub-e1b32.appspot.com",
    messagingSenderId: "292542174022",
    appId: "1:292542174022:web:5482b4fd402801ba2bcb47",
    measurementId: "G-1KP8992HVZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth}; 
  

  