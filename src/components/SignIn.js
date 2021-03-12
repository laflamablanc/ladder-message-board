import React from 'react'

function SignIn(props){
    return (
        <div className = "Sign-In">
            <h3> Please Sign in to your Account</h3>
            <input placeholder = "Enter Username"></input>
            <input placeholder = "Enter Password" type="password"></input>
            <button onClick= {props.updateUser}>Sign In </button>
        </div>
    )
}

export default SignIn