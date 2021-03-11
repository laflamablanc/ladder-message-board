import './App.css';

import React from 'react';
import SignIn from './components/SignIn'
import SignOut from './components/SignOut'
import MessageBoard from './components/MessageBoard'
import Firebase from './components/Firebase/Firebase'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { db } from './components/Firebase/Firebase'



class App extends React.Component {

  
  state = {
    user: false,
    messages: []
  }

  updateUser = () => {
    this.setState({user: !this.state.user})
  }

  fetchMessages = () => {
    const query = db.collection('messages');
    let messageArray = []
    query.onSnapshot(function(snapshot){
      snapshot.docChanges().forEach(function(change){
        const msg = change.doc.data()
        messageArray.push(msg)
      })
    })
    this.setState({
      ...this.state,
      messages: messageArray
    })
  }

  render(){
    return (
      <div className="App">
        {this.state.user ? <SignOut user = {this.state.user} updateUser = {this.updateUser}/> : <div> </div>}
        {this.state.user ? <MessageBoard messages = {this.state.messages}/> : <SignIn user = {this.state.user} updateUser = {this.updateUser}/>}
      </div>
    );
  }

  componentDidMount(){
    this.fetchMessages()
  }
}


export default App;
