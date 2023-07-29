import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import Logo from "./Logo";
import Menu from "./Menu";
import "./NavBar.css";
import { useContext } from "react";

export default function NavBar() {
  const {user} = useContext(AuthContext)
  if (!user) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="nav-bar">
      <Menu />
      <Logo isSmall={true} />
      <Link to={"/profile"}>
        <div className="avatarNav"><img src={user.avatar} alt="user avatar" /></div>
      </Link>
    </div>
  );
}
