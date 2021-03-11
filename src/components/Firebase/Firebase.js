import React from 'react'
import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAn7SbuBhKPMlIh1JjVIRX-lGhODx81ONk",
    authDomain: "ladder-react-challenge.firebaseapp.com",
    projectId: "ladder-react-challenge",
    storageBucket: "ladder-react-challenge.appspot.com",
    messagingSenderId: "584391455757",
    appId: "1:584391455757:web:b014c05af9858a58889144"
}

class Firebase {
    constructor(){
      firebase.initializeApp(config)
    }
    
}

export default Firebase
  