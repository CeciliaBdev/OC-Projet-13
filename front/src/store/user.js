import { createSlice } from '@reduxjs/toolkit'

const token = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

const initialState = {
  id: null,
  email: null,
  firstName: null,
  lastName: null,
  isLogged: false,
  token,
  isEditing: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      state.id = action.payload.id
      state.email = action.payload.email
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.isLogged = true
      state.token = token
    },
  },
})

export const userActions = userSlice.actions

export default userSlice.reducer
