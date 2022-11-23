import logo from '../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../store/user'
// import { useState } from 'react'

function Logout() {
  // const { userInfo, userToken } = useSelector((state) => state.user)
  const Dispatch = useDispatch()
  const Nav = useNavigate()

  const user = useSelector((state) => state.user)
  // const [firstName, setFirstName] = useState(user.firstName)
  // const [lastName, setLastName] = useState(user.lastName)

  return (
    <div className="header flex items-center justify-between border s:h-18">
      <div className="md:w-60 s:w-32 ml-5">
        <Link to="/">
          <img src={logo} alt="logo application" />
        </Link>
      </div>
      <div className="flex">
        <Link
          to="/user"
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
