import React from 'react'

function SignIn(props){
    console.log(props)
    return (
        
        <button onClick= {props.signInUser}>Sign In </button>
    )
}

export default SignIn