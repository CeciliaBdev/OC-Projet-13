import Footer from '../components/Footer'
import Header from '../components/Header'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import Logout from '../components/Logout'

function User() {
  const { userInfo } = useSelector((state) => state.user)

  useEffect(() => {
    if (userInfo) {
      console.log(' page user ok')
    } else {
      console.log('page user nok')
    }
  }, [userInfo])

  return (
    <div>
      <Logout />

      <div className=" flex flex-col h-[100vh] bg-[#13072B]  text-white font-bold pt-8 items-center gap-2">
        <p className="text-2xl">Welcome back</p>
        <p className="text-2xl">User</p>
        <button
          type="button"
          className="bg-[#00bc77] p-2 w-24 text-sm font-light border "
        >
          Edit Name
        </button>
      </div>

      <Footer />
    </div>
  )
}

export default User
