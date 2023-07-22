import Logo from "./Logo"
import Menu from "./Menu"
import "./NavBar.css"

export default function NavBar () {
    return (
        <div className="navBar">
            <Menu />
            <h3><Logo /></h3>
            <img className="avatar--user" src="public/exampleUser.png" alt="" />
        </div>
    )
}