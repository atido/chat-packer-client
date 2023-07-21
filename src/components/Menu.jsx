import { Link } from "react-router-dom";
import "./Menu.css";

export default function () {
  return (
    <div className="menu">
      <div className="menuUp">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li className="">
              <a href=""></a>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}
