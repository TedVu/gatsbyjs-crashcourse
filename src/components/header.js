import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <h1>Ted Vu</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
