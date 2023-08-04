import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

export default function EndButtons() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="end-buttons">
      <div className="btn-group">
        {!isLoggedIn && (
          <>
            <Link to="/auth/signup">
              <button className="btn btn--primary btn--round">Sign Up</button>
            </Link>
            <Link to="/auth/login">
              <button className="btn btn--primary btn--round">Login</button>
            </Link>
          </>
        )}
        <Link to="/trips">
          <button className="btn btn--primary btn--round">Your Trips</button>
        </Link>
        <a href="/">
          <button className="btn btn--primary btn--round">New Trip</button>
        </a>
      </div>
    </div>
  );
}
