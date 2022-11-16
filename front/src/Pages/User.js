import Footer from '../components/Footer'
import Logout from '../components/Logout'
import { useSelector } from 'react-redux'
import { useState } from 'react'

function User() {
  const user = useSelector((state) => state.user)
  const [firstName, setFirstName] = useState(user.firstName)
  const [lastName, setLastName] = useState(user.lastName)

  const EditName = () => {
    console.log('edit')
  }
  return (
    <div>
      <Logout />

      <div className=" flex flex-col h-[100vh] bg-[#13072B]  text-white font-bold pt-8 items-center gap-3">
        <p className="text-2xl">Welcome back</p>
        <p className="text-2xl">
          {user.firstName} {user.lastName}
        </p>
        <button
          type="button"
          className="bg-[#00bc77] p-2 w-24 text-sm font-light border "
          onClick={() => EditName()}
        >
          Edit Name
        </button>
      </div>

      <Footer />
    </div>
  )
}

export default User
