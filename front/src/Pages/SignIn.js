import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { login } from '../store/user'

import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'

function SignIn() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const nav = useNavigate()
  const dispatch = useDispatch()

  // envoi formulaire
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('email', email)
    console.log('password', password)

    // response body swagger
    // {
    //   "status": 200,
    //   "message": "Successfully got user profile data",
    //   "body": {
    //     "email": "tony@stark.com",
    //     "firstName": "Tony",
    //     "lastName": "Stark",
    //     "createdAt": "2022-11-09T19:36:44.024Z",
    //     "updatedAt": "2022-11-09T19:36:44.024Z",
    //     "id": "636c014c0f53c369e6f461e1"
    //   }
    // }
    // {
    //   "status": 200,
    //   "message": "User successfully logged in",
    //   "body": {
    //     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmMwMTRjMGY1M2MzNjllNmY0NjFlMSIsImlhdCI6MTY2ODYwNTc0MSwiZXhwIjoxNjY4NjkyMTQxfQ.abYij2gLXNZ5YkfgUSblTvK_UWZtLEog20DPBy_lQlM"
    //   }
    // }

    // Envoi email-passwd pour le login
    axios
      .post('http://localhost:3001/api/v1/user/login', {
        email: email,
        password: password,
      })
      .then((response) => {
        // dans la reponse: je recois le token
        axios.defaults.headers[
          'Authorization'
        ] = `Bearer ${response.data.body.token}`

        localStorage.setItem('userToken', response.data.body.token)

        // recupère données user
        axios
          .post('http://localhost:3001/api/v1/user/profile')
          .then((response) => {
            dispatch(login(response.data.body))
            nav('/user')
          })
      })
  }

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
