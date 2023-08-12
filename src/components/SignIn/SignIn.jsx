import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './SignIn.css'

const SignIn = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSignIn = async (e) => {
    e.preventDefault()
    const response = await axios.post('http://localhost:8000/api/users/createSession', {
    method: 'POST',
    headers:{
        'Content-Type': 'application/json',
    },
    body :{
        name,
        email,
        password,
      }
    })
    if(response.data.data){
        localStorage.setItem('token', response.data.data)
        window.location.href = '/home'
    }else{
        alert('Invalid Credentials')
    }
}

  return (
    <div className='sign_in'>
            <h2 className='sign_in_heading'>Sign In</h2>
            <form action="" className='sign_in_form' onSubmit={handleSignIn}>
            <input type="text" placeholder='Name' name='name' onChange= {(e) => setName(e.target.value)} />
        <input type="text" placeholder='Email' name='email' onChange= {(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder='Password' name='password' onChange= {(e) => setPassword(e.target.value)}/>
        <button >Sign In</button>
        </form>
        <p className='sign_in_switch_para'>Do Not Have Account ?? <a href="/sign-up">Sign Up</a> </p>
    </div>
  )
}

export default SignIn