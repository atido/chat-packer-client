import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import "./Menu.css";

export default function () {
  //revoir note
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="menu">
      <div className="menuUp">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <button onClick={e => logout()}>Logout</button>
            <span>{user && user.username}</span>
            <li className="">
              <a href=""></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
