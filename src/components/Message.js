import React from 'react'

function Message(props){
    return (
        <div className = "Message">
            <p>
            {props.text}
            </p>
            <button>x</button>
        </div>
    )
}


export default Message