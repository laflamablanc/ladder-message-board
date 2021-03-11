import React from 'react'

function SignIn(props){
    return (
        <div>
            <input placeholder = "Enter Username"></input>
            <input placeholder = "Enter Password" type="password"></input>
            <button onClick= {props.updateUser}>Sign In </button>
        </div>
    )
}

export default SignIn