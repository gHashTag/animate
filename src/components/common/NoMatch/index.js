import React from 'react'
import { Link } from 'react-router-dom'

const NoMatch = ({ location }) => (
  <div>
    <h3>
      Путь <code>{location.pathname}</code> не найден!
    </h3>
    <p>
      <Link to="/">Go back to the main page</Link>
    </p>
  </div>
)

export { NoMatch }
