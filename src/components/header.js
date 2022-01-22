import React from "react"
import { Link } from "gatsby"
// import "./header.module.scss"

import * as headerStyles from "./header.module.scss"
const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          Ted Vu
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link className={headerStyles.link} to="/">
              Home
            </Link>
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
