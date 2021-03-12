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
    console.log(query)
    // query.onSnapshot((snapshot) => {
    //   snapshot.docChanges().forEach((change) => {
    //     const msg = change.doc.data()
    //     console.log(msg)
    //     this.setState({
    //       ...this.state,
    //       messages: [msg, ...this.state.messages]
    //     })
    //   })  
    // })
  }

  render(){
    console.log(this.state.user)
    return (
      <div className="App">
        {this.state.user ? 
          <SignOut user = {this.state.user} updateUser = {this.updateUser}/> 
          : 
          <div> </div>
        }

        {this.state.user ? 
          <MessageBoard messages = {this.state.messages} /> 
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
