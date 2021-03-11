import React,{useState,useEffect} from 'react';
import Message from './Message'


class MessageBoard extends React.Component {

    state = {
        messages: this.props.messages
    }

    render(){
        console.log("Message Props", this.props.messages)
        return(
            <div>
                <h1> 🛠 Ladder Message Board</h1>
                { this.state.messages && this.state.messages.map(msg => <Message text={msg.text}/>)}
            </div>
        )
    }


}

export default MessageBoard