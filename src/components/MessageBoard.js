import React from 'react';
import Message from './Message'
import MessageBar from './MessageBar'


function MessageBoard(props) {
    console.log("Messages:", props)
    return(
        <div>
            <h1> 🛠  Ladder Message Board</h1>
            <MessageBar/>
            {props.messages.map(msg => <Message text={msg.text}/>)}
        </div>
    )

}

export default MessageBoard