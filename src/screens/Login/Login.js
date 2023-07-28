import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './styles.css'

function Login() {
  const { loginWithRedirect } = useAuth0()

  return (
    <div className='login-main'>
      <button className='login-button' onClick={loginWithRedirect}>Login</button>
    </div>
  )
}

export default Login