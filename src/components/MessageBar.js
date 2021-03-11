import React from 'react'

class MessageBar extends React.Component {

    state = {
        messageText: ""
    }

    inputHandler = (e) => {
        this.setState({messageText: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log('submit')
        this.setState({messageText:""})
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