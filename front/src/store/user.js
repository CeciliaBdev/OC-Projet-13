import { createSlice } from '@reduxjs/toolkit'

const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

const initialState = {
  id: null,
  firstName: null,
  lastName: null,
  email: null,
  login: false,
  userToken,
  isEdit: false,
}

const userSlice = createSlice({
  name: 'user',
  //
  initialState,
  reducers: {
    login(state, action) {
      state.id = action.payload.id
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.email = action.payload.email
      state.login = true
      state.userToken = localStorage.getItem('userToken')
    },
    logout: (state) => {
      state.id = null
      state.firstName = null
      state.lastName = null
      state.email = null
      state.login = null
      state.userToken = localStorage.removeItem('userToken')
      state.isEdit = null
    },
    isEditing: (state, action) => {
      // on recupere la nouvelle 'identité'
      // tester ici le destructuring et verifier si 'bug' dans le changement
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.isEdit = true // on a édité l'user

      //on peut créer une copie du user pour le modifier: ici inutil dans le projet
      // state.user = {
      //   ...state.user,
      //   firstName: action.payload.firstName,
      //   lastName: action.payload.lastName,
      //   isEdit: true,
      // }
    },
  },
})

export const { login, logout, isEditing } = userSlice.actions

export default userSlice.reducer
