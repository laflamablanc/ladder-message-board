import React,{useState,useEffect} from 'react';
import Message from './Message'
import MessageBar from './MessageBar'


class MessageBoard extends React.Component {

    state = {
        messages: ""
    }

    render(){
        console.log("Message Props", this.props.messages)
        return(
            <div>
                <h1> 🛠 Ladder Message Board</h1>
                <MessageBar addMessage = {this.props.addMessage}/>
                { this.state.messages && this.state.messages.map(msg => <Message text={msg.text}/>)}
            </div>
        )
    }

    componentDidMount(){
        this.setState({
            messages: this.props.messages
        })
    }


}

export default MessageBoard