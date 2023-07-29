import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import myaxios from "../../myaxios";
import "../globals.css";
import "./SignupLoginPage.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    login(email, password).then(() => {
      navigate("/trips");
    }).catch(err => {
      setErrorMessage('Wrong credentials')
    })
    
  };

  return (
    <div className="signupLoginDisplay">
      <div className="heading--SignupLogin">
        <h2>Get ready for your next amazing adventure 🏖️</h2>
        <i>Log in to check your trip details</i>
      </div>
      <div className="container--SignupLogin">
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleLoginSubmit} className="form--editForm">
          <label className="label--editForm">
            Email
            <input
              className="input--editForm"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="label--editForm">
            Password
            <input
              className="input--editForm"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className="btn btn--primary" type="submit">
            Login
          </button>
          <div className="text--SignupLogin">
            <span>No account yet? </span>
            <Link to={"/auth/signup"}>
              <span className="hyperlink--sm"> Sign up</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
