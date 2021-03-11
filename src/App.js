import './App.css';

import React from 'react';
import SignIn from './components/SignIn'
import SignOut from './SignOut'
import Firebase from './components/Firebase/Firebase'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'



class App extends React.Component {

  firebase = new Firebase()
  
  state = {
    user: false
  }

  updateUser = () => {
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


function MessageBoard(){
  return(
    <div>
      MessageBoard
    </div>
  )
}

export default App;
