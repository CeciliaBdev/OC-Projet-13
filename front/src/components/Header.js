import logo from '../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import React from 'react'

function Header() {
  return (
    <div className="header flex items-center justify-between border">
      <div className="w-60 ml-5">
        <Link to="/">
          <img src={logo} alt="logo application" />
        </Link>
      </div>
      <Link
        to="/SignIn"
        className="flex items-center justify-around gap-2 mr-5"
      >
        <i className="fa-solid fa-circle-user"></i>
        <p className="hover:underline">Sign In</p>
      </Link>
    </div>
  )
}

export default Header
