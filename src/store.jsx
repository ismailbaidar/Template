import { configureStore } from "@reduxjs/toolkit"
import NavigationReducer from "./Features/NavigationSlice"
import { useState } from "react"

const store = configureStore({
  reducer: {
    NavigationReducer,
  },
})

export default store
