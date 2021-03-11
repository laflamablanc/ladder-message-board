import React from 'react'

function SignIn(props){
    const signInUser = () => {
      console.log(props)
      this.setState({user: true})
    }
    return (
      <button onClick= {signInUser}>Sign In </button>
    )
}

export default SignIn