import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDIyZDux--MsC9lwPyt6pJvijYqa8yrp-E",
    authDomain: "thandionlinecv.firebaseapp.com",
    databaseURL: "https://thandionlinecv.firebaseio.com",
    projectId: "thandionlinecv",
    storageBucket: "thandionlinecv.appspot.com",
    messagingSenderId: "446264588604",
    appId: "1:446264588604:web:2699c1c0fea6e96f7a8639"
});

var database = firebase.firestore();
export {database};