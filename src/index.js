import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { Auth0Provider } from '@auth0/auth0-react'
import { RouterProvider } from 'react-router-dom'
import router from './components/Router'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-ozpmzyr356adqgtv.us.auth0.com'
      clientId='I38zPMzyLG5HP4yoZUk14wmqOciThPdS'
      authorizationParams={{
        redirect_uri: window.location.origin + '/home'
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
