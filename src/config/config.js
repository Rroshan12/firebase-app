import  firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const  firebaseConfig = {
    apiKey: "AIzaSyBxcRfhao08DOL3HTp4vavxR-FzaoEizA8",
    authDomain: "crwn-db-d3556.firebaseapp.com",
    databaseURL: "https://crwn-db-d3556-default-rtdb.firebaseio.com",
    projectId: "crwn-db-d3556",
    storageBucket: "crwn-db-d3556.appspot.com",
    messagingSenderId: "865902761509",
    appId: "1:865902761509:web:cb8103e40c9b4c10b251cc",
    measurementId: "G-Y77D44Z2GP"
  };

  firebase.initializeApp(firebaseConfig);


  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();

  export {auth,db,storage}


