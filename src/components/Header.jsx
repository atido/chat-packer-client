import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <div className="btn-group">
        <Link to="/auth/signup">
          <button className="btn btn--primary">Sign Up</button>
        </Link>
        <Link to="/auth/login">
          <button className="btn btn--secondary">Login</button>
        </Link>
      </div>
    </header>
  );
}
