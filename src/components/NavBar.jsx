import Logo from "./Logo"
import Menu from "./Menu"
import "./src/globals.css"

export default function NavBar () {
    return (
        <div className="navBar">
            <Menu />
            <Logo />
            <img className="avatar--user" src="public/exampleUser.png" alt="" />
        </div>
    )
}