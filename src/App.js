import './App.css';

import React from 'react';
import SignIn from './components/SignIn'
import SignOut from './components/SignOut'
import MessageBoard from './components/MessageBoard'
import Firebase from './components/Firebase/Firebase'

// import { useAuthState } from 'react-firebase-hooks/auth'
// import { useCollectionData } from 'react-firebase-hooks/firestore'
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
    const query = db.collection('messages').orderBy('timestamp', 'asc');
    query.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const messageObj = {}
        messageObj.data = change.doc.data()
        messageObj.id = change.doc.id
        this.setState({
          ...this.state,
          messages: [messageObj, ...this.state.messages]
        })
      })  
    })
  }

  removeMessage = (msgID) => {
    const newArray = this.state.messages.filter((msg) => msg.id != msgID)
    this.setState({
      ...this.state,
      messages: newArray
    })
  }

  render(){
    console.log(this.state.messages)
    return (
      <div className="App">
        {this.state.user ? 
          <SignOut user = {this.state.user} updateUser = {this.updateUser}/> 
          : 
          <div> </div>
        }

        {this.state.user ? 
          <MessageBoard messages = {this.state.messages} removeMessage = {this.removeMessage} /> 
          : 
          <SignIn user = {this.state.user} updateUser = {this.updateUser}/>
        }
      </div>
    );
  }

  componentDidMount(){
    this.fetchMessages()
  }
}


export default App;



// ---- Creating Duplicates For Some Reason --- 

  // getMessages = () => {
  //   const messagesArray = []
  //   const query = db.collection('messages').orderBy('timestamp', 'desc');
  //   query.get()
  //   .then((querySnapshot) => {
  //     querySnapshot.forEach((doc)=>{
  //       messagesArray.push(doc.data())
  //     })
  //   })
  //   this.setState({
  //     ...this.state,
  //     messages: messagesArray
  //   })
  // }