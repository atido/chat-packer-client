import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../globals.css"
import "./SignupLoginPage.css";
import axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState(undefined)

  const navigate = useNavigate()

  const handleLoginSubmit = (e) => {
    e.preventDefaut()

    const requestBody = {email, password}

    axios
    .post(`${import.meta.env.VITE_BACKEND_HOST}/api/users`, requestBody)
    .then((response) => {
      console.log('JWT token', response.data.authToken)

            storeToken(response.data.authToken)

            authenticateUser()
            navigate(`/profile`)
    })
    .catch((error) => {
      console.log(error)
  })
  }

  return (
    <div className="signupLoginDisplay">
      <div className="container--SignupLogin">
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleLoginSubmit} className="form--editForm">
          <label className="label--editForm">
            Email
            <input className="input--editForm" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label className="label--editForm">
            Password
            <input className="input--editForm" type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button className="btn btn--primary" type="submit">
            Login
          </button>
          <span className="text--sm, text--SignupLogin">No account yet? </span>
          <span className="hyperlink--sm"> Sign up</span>
        </form>
      </div>
    </div>
  );
}
