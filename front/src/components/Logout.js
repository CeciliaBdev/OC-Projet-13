import logo from '../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { logout } from '../store/user'

function Logout() {
  // const { userInfo, userToken } = useSelector((state) => state.user)
  const Dispatch = useDispatch()
  const Nav = useNavigate()

  const user = useSelector((state) => state.user)
  const [firstName, setFirstName] = useState(user.firstName)
  const [lastName, setLastName] = useState(user.lastName)

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
          <p>{user.firstName}</p>
        </Link>
        <Link to="/" className="flex items-center justify-around gap-2 mr-5">
          <i className="fa-solid fa-right-from-bracket"></i>
          <p
            onClick={() => {
              Dispatch(logout())
              Nav('/')
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
