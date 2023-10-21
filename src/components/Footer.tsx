import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <h1> Footer </h1>
       <>
      <ul>
        <li>
          <Link to="/news"> FOOTER </Link>
        </li>
      </ul>
    </>
    </div>
  )
}

export default Footer