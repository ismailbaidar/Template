import { Checkbox, FormControlLabel, TextField } from "@mui/material"
import "../assets/styles/form.css"
import Svg from "../components/SvgLogin"
import { Link } from "react-router-dom"
import SvgRegister from "../components/SvgRegister"
export default function Register() {
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
        <TextField label="Email" type="outlined" />
        <TextField label="Password" type="password" />
        <TextField label="Username" type="outlined" />
        <TextField label="Phone" type="outlined" />

        <button>Sign Up</button>
      </div>
    </div>
  )
}
