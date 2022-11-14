import Header from '../components/Header'
import Footer from '../components/Footer'

function SignIn() {
  return (
    <div>
      <Header />
      <div className=" flex h-[85vh] bg-indigo-900 justify-center ">
        <div className="h-80  bg-white mt-20">
          <div className=" w-64 bg-white flex flex-col p-5">
            <i className="fa-solid fa-circle-user text-center mb-4"></i>
            <h2 className="text-center mb-4 text-xl">Sign In</h2>
            <label for="username"> Username</label>
            <input
              type="text"
              id="username"
              className="form-control block px-4 py-2 border border-solid border-[#2c3e50] w-[100%] mb-3 rounded"
            />
            <label for="password"> Password</label>
            <input
              type="password"
              id="password"
              className="form-control block px-4 py-2 border border-solid border-[#2c3e50] w-[100%] rounded"
            />
            <div className="flex gap-3 my-3">
              <input id="remeber" type="checkbox" />
              <label for="remember" className="font-light">
                Remember me
              </label>
            </div>

            <button
              type="button"
              className="bg-[#00bc77] p-2 w-full w-18 block my-3 text-white underline"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SignIn
