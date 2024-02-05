import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const login = createAsyncThunk("auth/login", async (data) => {
  return axios
    .post("https://mmc-authentification.azurewebsites.net/api/Auth/Login", data)
    .then((response) => response.data)
    .catch((err) => err)
})

export const register = createAsyncThunk("auth/register", async (data) => {
  console.log(data)
  return axios
    .post(
      "https://mmc-authentification.azurewebsites.net/api/Auth/Register",
      data
    )
    .then((response) => console.log(response.data))
    .catch((err) => err)
})

const initialState = {
  username: localStorage.getItem("username"),
  email: localStorage.getItem("email") ? localStorage.getItem("email") : null,
  token: localStorage.getItem("token"),
  "X-token": null,
  role: localStorage.getItem("role") ? localStorage.getItem("role") : null,
  isLoading: false,
}

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, { payload }) => {
      state.token = null
      state.username = null
      state.email = null
      state.role = null
      localStorage.clear()
      console.log("logged out")
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.isLoading = false
      console.log(payload)
      if (payload.userName != undefined) {
        console.log(payload)
        localStorage.setItem("username", payload?.userName)
        localStorage.setItem("token", payload?.token)
        payload?.roles.includes("Admin")
          ? localStorage.setItem("role", "Admin")
          : payload?.roles.includes("Speaker")
          ? localStorage.setItem("role", "Speaker")
          : payload?.roles.includes("User")
          ? localStorage.setItem("role", "User")
          : null

        state.token = payload.token
        state.role = localStorage.getItem("Admin")
        state.username = payload.userName
      }
      console.log(state.username)
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
export const { logout } = AuthSlice.actions
