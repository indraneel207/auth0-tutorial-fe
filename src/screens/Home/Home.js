import React, { useEffect, useState } from 'react'
import './styles.css'
import { useAuth0 } from '@auth0/auth0-react'

function Home() {
  const { logout, user, getAccessTokenSilently } = useAuth0()
  const [userMetadata, setUserMetadata] = useState(null)
  const [accessToken, setAccessToken] = useState(null)

  useEffect(() => {
    let isSubscribed = true
    const getUserMetadata = async () => {
      const domain = 'dev-ozpmzyr356adqgtv.us.auth0.com'

      try {
        const newAccessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: `https://${domain}/api/v2/`,
            scope: 'read:current_user'
          }
        })

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${newAccessToken}`
          }
        })

        const user_metadata = await metadataResponse.json()

        if (isSubscribed) {
          setAccessToken(newAccessToken)
          setUserMetadata(user_metadata)
        }
      } catch (e) {
        console.log(e.message)
      }
    }

    getUserMetadata()

    return () => (isSubscribed = false)
  }, [getAccessTokenSilently, user?.sub])

  return userMetadata && (
    <div className='home-main'>
      <h2>Home page</h2>
      <div>
        <img src={userMetadata.picture} alt={userMetadata.name} />
        <h2>{userMetadata.name}</h2>
        <p>{userMetadata.email}</p>
        <h3>User Metadata</h3>
        {userMetadata ? <pre>{JSON.stringify(userMetadata, null, 2)}</pre> : 'No user metadata defined'}
      </div>

      <button className='login-button' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Logout
      </button>
    </div>
  )
}

export default Home
