import { Checkbox, FormControlLabel, TextField } from "@mui/material"
import "../assets/styles/form.css"
import SvgLogin from "../components/SvgLogin"
import { Link } from "react-router-dom"
import { login } from "../Features/AuthSlice"
import { useReducer, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import SimpleLoadingSpinner from "../components/simpleLoadingSpinner"
export default function Login() {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.AuthReducer.isLoading)

  const email = useRef()
  const password = useRef()
  function handleLogin() {
    // const formData = new FormData()
    // formData.append("email", email.current.value)
    // formData.append("password", password.current.value)

    console.log(email.current.value, password.current.value)
    dispatch(
      login({
        email: email.current.value,
        password: password.current.value,
      })
    )
  }
  return (
    <>
      <div className="form-container">
        <div className="background bg-gradient-to-r from-sky-500 to-indigo-500">
          <SvgLogin />
        </div>
        <div className="form-elements">
          <span>
            <h1>Sign In</h1>
            <h2>
              Dont have an account ? <Link to="/register">Sign Up</Link>
            </h2>
          </span>
          <TextField label="Email" type="outlined" inputRef={email} />
          <TextField label="Password" type="password" inputRef={password} />
          <div className="checkbox">
            <Checkbox id="remember" />
            {/* <input type="checkbox" name="" id="" /> */}
            <label htmlFor="remember">Remember me ?</label>
          </div>
          <button
            className="position-relative"
            onClick={() => {
              handleLogin()
            }}
          >
            {isLoading ? <SimpleLoadingSpinner /> : "Login"}
          </button>

          <Link to="/" className="redirect-home">
            Back to home
          </Link>
        </div>
      </div>
    </>
  )
}
