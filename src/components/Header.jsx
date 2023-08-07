import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context.jsx";
import "./Header.css";
import Logo from "./Logo";

export default function Header() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <header className="header">
      <Logo />
      <div className="btn-group">
        {isLoggedIn ? (
          <Link to="/trips">
            <button className="btn btn--primary">Your trips</button>
          </Link>
        ) : (
          <>
            <Link to="/auth/signup">
              <button className="btn btn--primary">Sign Up</button>
            </Link>
            <Link to="/auth/login">
              <button className="btn btn--secondary">Login</button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
