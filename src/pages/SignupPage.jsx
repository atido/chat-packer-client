import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myaxios from "../../myaxios";
import "../globals.css";
import "./SignupLoginPage.css";

export default function SignupPage(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { username, email, password };

    myaxios
      .post(`${import.meta.env.VITE_BACKEND_HOST}/api/users/register`, requestBody)
      .then(() => {
        setUsername("");
        setEmail("");
        setPassword("");

        navigate("/auth/login");
      })
      .catch((err) => setErrorMessage(err.message));
  };

  return (
    <div className="signupLoginDisplay">
      <div className="heading--SignupLogin">
        <h2>Step into to your next delightful journeys🏖️ </h2>
        <i>Sign up to plan effortlessly with your super trip adviser</i>
      </div>
      <div className="container--SignupLogin">
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSubmit} className="form--editForm">
          <label className="label--editForm">
            Username
            <input
              className="input--editForm"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label className="label--editForm">
            Email
            <input
              className="input--editForm"
              type="email"
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
            Sign up
          </button>
          <div className="text--SignupLogin">
            <span>Already have account? </span>
            <Link to={"/auth/login"}>
              <span className="hyperlink--sm"> Login</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
