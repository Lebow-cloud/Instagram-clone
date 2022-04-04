

// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app"


  const firebaseApp = initializeApp({
    apiKey: "AIzaSyBgqAVt-rJECuurAxK7P28XOktXNjAsDzY",
    authDomain: "instagram-clone-lebow.firebaseapp.com",
    projectId: "instagram-clone-lebow",
    storageBucket: "instagram-clone-lebow.appspot.com",
    messagingSenderId: "175746316487",
    appId: "1:175746316487:web:998f6cd6c2b76f9f7466e2",
    measurementId: "G-1CNXR7181W"
  })

  const db = firebase.firestore()
  const auth = firebase.auth()
  const storage = firebase.storage()

  export {db, auth, storage}

