import { Checkbox, FormControlLabel, TextField } from "@mui/material"
import "../assets/styles/form.css"
import SvgLogin from "../components/SvgLogin"
import { Link } from "react-router-dom"
export default function Login() {
  return (
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
        <TextField label="Email" type="outlined" />
        <TextField label="Password" type="password" />
        <div className="checkbox">
          <Checkbox id="remember" />
          {/* <input type="checkbox" name="" id="" /> */}
          <label htmlFor="remember">Remember me ?</label>
        </div>
        <button>Login</button>
      </div>
    </div>
  )
}
