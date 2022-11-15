import Footer from '../components/Footer'
import Header from '../components/Header'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

function User() {
  const user = useSelector((state) => state.user)

  useEffect(() => {
    if (user.isLogged == true) {
      console.log(' user OK')
    } else {
      console.log('user nok')
    }
  }, [user])

  return (
    <div>
      <Header />
      {user.isLogged == true ? (
        <>
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
        </>
      ) : (
        <div>Test</div>
      )}

      <Footer />
    </div>
  )
}

export default User
