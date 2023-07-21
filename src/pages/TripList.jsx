import { Icon } from "@iconify/react";
import NavBar from "../components/NavBar";

export default function TripList () {
    return (
        <>
            <NavBar />
            <div className="tripList">
                <ul>
                    <li></li>
                </ul>
            </div>
            <Icon id="addTripBtn" icon={"zondicons:add-solid"}></Icon>
        </>
    )
}