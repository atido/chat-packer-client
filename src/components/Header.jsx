import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "./Logo";

export default function Header(params) {
  return (
    <header className="header">
      <h1><Logo /></h1>
      <div className="btn-group">
        <button className="btn btn--primary">Sign Up</button>
        <button className="btn btn--secondary">Login</button>
      </div>
    </header>
  );
}
