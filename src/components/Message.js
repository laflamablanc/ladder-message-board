import React from 'react'

function Message(props){

    const clickHandler = (e) => {
        const msgID = e.target.parentNode.id
        props.removeMessage(msgID)
    }

    return (
        <div id = {props.id} className = "Message">
            <p>
            {props.text}
            </p>
            <button onClick={clickHandler}>x</button>
        </div>
    )
}


export default Message