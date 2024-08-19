import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCtLoos2YMvUfqmL0jflstgHxsoi3eqjk0",
    authDomain: "fir-5b538.firebaseapp.com",
    projectId: "fir-5b538",
    storageBucket: "fir-5b538.appspot.com",
    messagingSenderId: "201778526713",
    appId: "1:201778526713:web:3a99fb98b6fc014d002528",
    measurementId: "G-CGL1DMSL97"
  };

export const Firebase = firebase.initializeApp(firebaseConfig)