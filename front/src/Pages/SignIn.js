import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from '../store/user'
import Header from '../components/Header'
import Footer from '../components/Footer'

function SignIn() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const nav = useNavigate()
  const dispatch = useDispatch()

  // envoi formulaire
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email)
    console.log(password)
    dispatch(userActions.login({ email, password }))
  }
  const user = useSelector((state) => state.user)

  useEffect(() => {
    if (user.isLogged == true) {
      console.log('OK')
      nav('/user')
    } else {
      console.log('nok')
    }
  }, [user])

  return (
    <div>
      <Header />
      <div className=" flex h-[85vh] bg-[#13072B] justify-center ">
        <div className="h-80  bg-white mt-20">
          <div className=" w-64 bg-white flex flex-col p-5">
            <i className="fa-solid fa-circle-user text-center mb-4"></i>
            <h2 className="text-center mb-4 text-xl">Sign In</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                className="form-control block px-4 py-2 border border-solid border-[#2c3e50] w-[100%] mb-3 rounded"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="entrer votre email"
                required
              />
              <label htmlFor="password"> Password</label>
              <input
                type="password"
                id="password"
                className="form-control block px-4 py-2 border border-solid border-[#2c3e50] w-[100%] rounded"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="flex gap-3 my-3">
                <input id="remeber" type="checkbox" />
                <label htmlFor="remember" className="font-light">
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                className="bg-[#00bc77] p-2 w-full w-18 block my-3 text-white underline"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SignIn
