import React from 'react'
import { db } from './Firebase/Firebase'
import firebase from "firebase/app";
import "firebase/firestore";

class MessageBar extends React.Component {

    state = {
        messageText: ""
    }

    inputHandler = (e) => {
        this.setState({messageText: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        if (this.state.messageText == ""){
            alert("Message cannot be blank")
        } else {
            const messageRef = db.collection('messages').add({
                text: this.state.messageText,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
            this.setState({messageText:""})
        }
    }

    render(){
        console.log(this.state.messageText)
        return(
            <form className = "MessageBar" onSubmit={this.submitHandler}>
                <input
                    type = "text" 
                    placeholder="Write you post here..." 
                    onChange={this.inputHandler} 
                    value= {this.state.messageText}
                />
                <input id = "button" type="submit" value="Send"/>
            </form>
        )
    }
}

export default MessageBar