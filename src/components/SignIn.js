import React from 'react'

function SignIn(props){
    return (
        <div className = "Sign-In-Page">
            <h3> Welcome to Ladder!</h3>
            <h4>Log in to return to the community.</h4>
            <form className = "Sign-In-Form" onSubmit = {props.updateUser}>
                <input placeholder = "Enter Email"></input>
                <input placeholder = "Enter Password" type="password"></input>
                <input id ='submit' value = 'Submit' type='submit'/>
            </form>
        </div>
    )
}

export default SignIn