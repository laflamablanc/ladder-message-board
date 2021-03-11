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

  addMessage = (msg) => {
    this.setState({
      ...this.state,
      messages: [msg, ...this.state.messages]
    })
  }

  fetchMessages = (updateState) => {
    const query = db.collection('messages').orderBy('timestamp', 'desc');
    query.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const msg = change.doc.data()
        this.setState({
          ...this.state,
          messages: [...this.state.messages, msg]
        })
      })  
    })
  }

  render(){
    return (
      <div className="App">
        {this.state.user ? 
          <SignOut user = {this.state.user} updateUser = {this.updateUser}/> 
          : 
          <div> </div>
        }

        {this.state.user ? 
          <MessageBoard messages = {this.state.messages} addMessage={this.addMessage}/> 
          : 
          <SignIn user = {this.state.user} updateUser = {this.updateUser}/>
        }
      </div>
    );
  }

  componentDidMount(){
    this.fetchMessages(this.updateState)
  }
}


export default App;
