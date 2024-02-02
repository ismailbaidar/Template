import { configureStore } from "@reduxjs/toolkit"
import NavigationReducer from "./Features/NavigationSlice"
import { useState } from "react"
import AdminNavigationReducer from "./Features/AdminNavigationSlice"
import AuthReducer from "./Features/AuthSlice"
const store = configureStore({
  reducer: {
    NavigationReducer,
    AdminNavigationReducer,
    AuthReducer
  },
})

export default store
