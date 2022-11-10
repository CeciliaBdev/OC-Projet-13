import logo from '../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header flex items-center justify-between border">
      <div className="w-60 ml-5">
        <Link to="/">
          <img src={logo} alt="logo application" />
        </Link>
      </div>
      <div>
        <Link
          to="/SignIn"
          className="flex items-center justify-around gap-2 mr-5"
        >
          <i className="fa-solid fa-circle-user"></i>
          <p>Sign In</p>
        </Link>
      </div>
    </div>
  )
}

export default Header
