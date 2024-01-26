import { configureStore } from "@reduxjs/toolkit"
import NavigationReducer from "./Features/NavigationSlice"
import { useState } from "react"
import AdminNavigationReducer from "./Features/AdminNavigationSlice"
const store = configureStore({
  reducer: {
    NavigationReducer,
    AdminNavigationReducer,
  },
})

export default store
