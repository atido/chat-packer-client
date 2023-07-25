import { Link } from "react-router-dom";
import Logo from "./Logo";
import Menu from "./Menu";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <Menu />
      <Logo isSmall={true} />
      <Link to={"/profile"}>
        <img className="avatar--user" src="/exampleUser.png" alt="user avatar" />
      </Link>
    </div>
  );
}
