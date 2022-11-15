import logo from '../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../store/user'

function Logout() {
  // const { userInfo, userToken } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const nav = useNavigate()

  const SignOut = () => {
    console.log('logout')
    nav('/')
  }

  return (
    <div className="header flex items-center justify-between border">
      <div className="w-60 ml-5">
        <Link to="/">
          <img src={logo} alt="logo application" />
        </Link>
      </div>
      <div className="flex">
        <Link
          to="/SignIn"
          className="flex items-center justify-around gap-2 mr-5"
        >
          <i className="fa-solid fa-circle-user"></i>
          <p>User</p>
        </Link>
        <Link to="/" className="flex items-center justify-around gap-2 mr-5">
          <i className="fa-solid fa-right-from-bracket"></i>
          <p
            onClick={() => {
              dispatch(logout())
              SignOut()
            }}
            className="hover:underline"
          >
            Sign Out
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Logout
