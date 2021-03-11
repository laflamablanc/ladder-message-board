import './App.css';
import firebase from "firebase/app";
import "firebase/firestore";
import React from 'react';
import SignIn from './SignIn'
import SignOut from './SignOut'

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
    user: false
  }

  updateUser = () => {
    console.log('yo')
    console.log(this.state.user)
    this.setState({user: !this.state.user})
  }

  render(){
    return (
      <div className="App">
        {this.state.user ? <MessageBoard/> : <SignIn user = {this.state.user} updateUser = {this.updateUser}/>}
        {this.state.user ? <SignOut user = {this.state.user} updateUser = {this.updateUser}/> : <div> </div>}
      </div>
    );
  }

}


// function SignOut() {
//   return <button>Sign Out</button>
// }

function MessageBoard(){
  return(
    <div>
      MessageBoard
    </div>
  )
}

export default App;
