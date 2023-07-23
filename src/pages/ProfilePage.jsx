import { Icon } from "@iconify/react"
import NavBar from "../components/NavBar"
import "./ProfilePage.css"
import "../globals.css"

export default function ProfilePage () {
    return (
        <div className="profileDisplay">
            <NavBar/>
            <div className="profilePage">
                <img src="public/exampleUser.png" alt="" />
                <div className="profileInfo">
                    <p className="subtitle">
                        First name
                    </p>
                    <div>Elisa</div>

                    <p className="subtitle">
                        Last name
                    </p>
                    <div>DUPONT</div>

                    <p className="subtitle">
                        Email address
                    </p>
                    <div>elisad@example.com</div>

                    <p className="subtitle">
                        Password
                    </p>
                    <div>********</div>
                    <div className="hyperlink--sm">
                        <Icon icon={"material-symbols:edit-outline"}></Icon>Edit / Delete profile
                    </div>
                </div>

            </div>
        </div>
    )
}