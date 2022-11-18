import Footer from '../components/Footer'
import Logout from '../components/Logout'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import axios from 'axios'
import { isEditing } from '../store/user'
import Transaction from '../components/Transaction'
import { datas } from '../Datas/datas_account.js'

function User() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const [firstName, setFirstName] = useState(user.firstName)
  const [lastName, setLastName] = useState(user.lastName)
  const [clicked, setClicked] = useState(true) // true = menu class(hidden)
  const [isEdit, setEdit] = useState(false) //pas édité - passe à true si sauvegardé

  // toggle class pour editer un nouveau name
  let menuEdit = clicked ? 'hidden' : 'flex'
  const EditName = () => {
    setClicked((clicked) => !clicked) // menu apparait (flex)
  }

  // je modifie l'identité du user et je sauvegarde
  const saveName = () => {
    console.log('firstname save:', firstName)
    console.log('lastname save:', lastName)
    // puis mettre a jour user.firstName - user.lastName (reducer) avec un put
    axios
      .put('http://localhost:3001/api/v1/user/profile', {
        firstName: firstName,
        lastName: lastName,
      })
      .then((response) => dispatch(isEditing(response.data.body)))
  }

  const cancelName = () => {
    console.log('cancel')
    setClicked((clicked) => !clicked) // menu apparait (flex)
  }

  return (
    <div>
      <Logout />

      <div className=" flex flex-col h-[100vh] w-[100vw]  bg-[#13072B]  text-white font-bold pt-8 items-center gap-3">
        <p className="text-2xl">Welcome back</p>

        {isEdit === false ? (
          // affichage normal - on n'a pas encore cliqué sur Edit puis Save
          <p className="text-2xl">
            {user.firstName} {user.lastName}
          </p>
        ) : (
          //on a cliqué sur Edit puis Save pour changer les noms
          <p className="text-2xl">
            {firstName} {lastName}
          </p>
        )}

        <div className={`${menuEdit}  flex-col items-center`}>
          <div className="flex gap-3">
            <input
              type="text"
              id="firstName"
              className="form-control block px-4 py-2 border border-solid border-[#2c3e50] w-[50%] mb-3 rounded text-black"
              placeholder={user.firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              id="lastName"
              className="form-control block px-4 py-2 border border-solid border-[#2c3e50] w-[50%] mb-3 rounded text-black"
              placeholder={user.lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex gap-3">
            <button
              className="bg-[white] p-2 w-24 text-sm  border border-[purple] text-purple-500 "
              onClick={() => saveName(setEdit((isEdit) => !isEdit))}
            >
              Save
            </button>
            <button
              className="bg-[white] p-2 w-24 text-sm  border border-[purple] text-purple-500 "
              onClick={() => {
                cancelName()
              }}
            >
              Cancel
            </button>
          </div>
        </div>
        <button
          type="button"
          className="bg-[#00bc77] p-2 w-24 text-sm font-light border "
          onClick={() => EditName()}
        >
          Edit Name
        </button>
        <div className="w-[100vh] mt-12 flex flex-col gap-5">
          {datas.map((data) => {
            return <Transaction key={data.index} {...data} />
          })}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default User
