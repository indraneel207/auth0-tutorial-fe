import React from 'react'
import './styles.css'
import { useAuth0 } from '@auth0/auth0-react'

function Home() {
  const { logout, user } = useAuth0()

  return (
    <div className='home-main'>
      <h2>Home page</h2>

      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>

      <button className='login-button' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Logout
      </button>
    </div>
  )
}

export default Home
