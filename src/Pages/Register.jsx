import { Checkbox, FormControlLabel, TextField } from "@mui/material"
import "../assets/styles/form.css"
import Svg from "../components/SvgLogin"
import { Link, Navigate } from "react-router-dom"
import SvgRegister from "../components/SvgRegister"
import { useRef, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import GoogleLogin from "react-google-login"
import { register } from "../Features/AuthSlice"
export default function Register() {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.AuthReducer.isLoading)

  const fullNameRef = useRef()
  const usernameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()

  const clientId =
    "201912823014-alq12a2d01h9t0a3k9q7vtfir277m9mr.apps.googleusercontent.com"
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId,

        scope: "",
      })
    }
    gapi.load("client:auth2", start)
  }, [])

  const responseGoogle = async (response) => {
    console.log(response)
  }

  function registerHandler() {
    dispatch(
      register({
        fullName: fullNameRef.current.value,
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
    )
  }

  return (
    <div className="form-container">
      <div className="background bg-gradient-to-r from-sky-500 to-indigo-500">
        <SvgRegister />
      </div>
      <div className="form-elements">
        <span>
          <h1>Sign Up</h1>
          <h2>
            Already have an account ? <Link to="/login">Sign In</Link>
          </h2>
        </span>
        <TextField label="Full Name" type="outlined" inputRef={fullNameRef} />
        <TextField label="Username" type="outlined" inputRef={usernameRef} />
        <TextField label="Email" type="outlined" inputRef={emailRef} />
        <TextField label="Password" type="password" inputRef={passwordRef} />

        <button onClick={registerHandler}>Sign Up</button>
        <GoogleLogin
          className="google-sign-up-button"
          clientId="201912823014-alq12a2d01h9t0a3k9q7vtfir277m9mr.apps.googleusercontent.com"
          buttonText="Sign in with Google"
          onSuccess={responseGoogle}
          // onFailure={responseGoogle}
        />
        <Link to="/" className="redirect-home">
          Back to home
        </Link>
      </div>
    </div>
  )
}
