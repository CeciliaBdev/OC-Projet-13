import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// userActions.js
export const userLogin = createAsyncThunk(
  'user/login',
  async ({ email, password, firstName }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(
        'http://localhost:3001/api/v1/user/login',
        { email, password, firstName },
        config
      )
      // store user's token in local storage
      localStorage.setItem('userToken', data.userToken)
      return { data }
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)
