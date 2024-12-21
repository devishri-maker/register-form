import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <h1>Icecream showroom</h1>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/Register online">Register online</Link>
            <Link to="/Products"> Products</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>

        </ul>
    </nav>
  )
}

