import React from 'react'

function Message(props){
    return (
        <div className = "Message">
            {props.text}
        </div>
    )
}


export default Message