import React from 'react';
import Message from './Message'
import MessageBar from './MessageBar'

function MessageBoard(props) {
    
    return(
        <div>
            <h1> 🛠  Ladder Message Board</h1>
            <MessageBar/>
            {props.messages.map(msg => <Message key = {msg.data.id} text={msg.data.text}/>)}
        </div>
    )

}

export default MessageBoard