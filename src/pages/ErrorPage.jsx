import React from 'react'
import { useRouteError, Link } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)
  
  return (
    <div className="error-page">
      <h1>Oops! Kuch toh gadbad hai!</h1>
      <p>Sorry, unexpected error aa gaya.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">Wapas home pe jao</Link>
    </div>
  )
}

export default ErrorPage