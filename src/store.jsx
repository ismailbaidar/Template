import { configureStore } from "@reduxjs/toolkit"
import NavigationReducer from "./Features/NavigationSlice"

const store = configureStore({
  reducer: {
    NavigationReducer,
  },
})

export default store
