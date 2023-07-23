import { Link } from "react-router-dom"
import Logo from "./Logo"
import Menu from "./Menu"
import "./NavBar.css"

export default function NavBar () {
    return (
        <div className="navBar">
            <Menu />
            <h3><Logo /></h3>
            <Link to={"/profile"}><img className="avatar--user" src="/exampleUser.png" alt="" /></Link>
        </div>
    )
}