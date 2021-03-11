import './App.css';
import firebase from "firebase/app";
import "firebase/firestore";
import React from 'react';
import SignIn from './SignIn'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyAn7SbuBhKPMlIh1JjVIRX-lGhODx81ONk",
  authDomain: "ladder-react-challenge.firebaseapp.com",
  projectId: "ladder-react-challenge",
  storageBucket: "ladder-react-challenge.appspot.com",
  messagingSenderId: "584391455757",
  appId: "1:584391455757:web:b014c05af9858a58889144"
})

const firestore = firebase.firestore()

class App extends React.Component {
  
  state = {
    user: null
  }

  signInUser = () => {
    this.setState({user: true})
  }

  render(){
    return (
      <div className="App">
        {this.state.user ? <MessageBoard/> : <SignIn user = {this.state.user} signInUser = {this.signInUser}/>}
      </div>
    );
  }

}


function SignOut() {
  return <div>No</div>
}

function MessageBoard(){
  return(
    <div>
      MessageBoard
    </div>
  )
}

export default App;
