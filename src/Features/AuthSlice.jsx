import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const login = createAsyncThunk("auth/login", async (data) => {
  return axios
    .post("https://mmc-authentification.azurewebsites.net/api/Auth/Login", data)
    .then((response) => response.data)
    .catch((err) => console.log(err))
})

export const register = createAsyncThunk("auth/login", async () => {
  return axios
    .post("https://mmc-authentification.azurewebsites.net/api/Auth/Register")
    .then((response) => response.data)
})

const initialState = {
  user: null,
  token: null,
  role: null,
  isLoading: false,
}

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      console.log(payload)
      state.isLoading = false
    })
    builder.addCase(login.pending, (state, { payload }) => {
      state.isLoading = true
    })

    builder.addCase(login.rejected, (state, { payload }) => {
      console.log(payload)
      state.isLoading = false
    })
  },
})

export default AuthSlice.reducer
