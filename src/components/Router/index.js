import { Navigate, createBrowserRouter, useLocation } from 'react-router-dom'
import Login from '../../screens/Login/Login'
import App from '../../App'
import Home from '../../screens/Home/Home'
import ErrorPage from './error-page'
import { useAuth0 } from '@auth0/auth0-react'

function RequireAuth({ children }) {
  const { isAuthenticated, isLoading } = useAuth0()
  const location = useLocation()
  if (isLoading) return <h2>Loading...</h2>
  else if (!isAuthenticated) return <Navigate to='/' state={{ from: location }} replace />
  return children
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: '/app',
    element: <App />
  },
  {
    path: '/home',
    element: (
      <RequireAuth>
        <Home />
      </RequireAuth>
    )
  }
])

export default router
