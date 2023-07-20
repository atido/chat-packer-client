import "./Card.css"
import "./TripCard.css"

export default function TripCard () {
    return (
    <div className="card">
        <div className="TripCard--Top" style={{background:`url("public/exampleTravel.png")`}}>
            <div className="cardGradient"></div>
            <h3 className="cardHeading--White" style={{top:"65%"}}>Buenos Aires</h3>
        </div>
        <div className="TripCard--Bottom">
            <div className="subtitle">Argentine</div>
            <div className="TripCard--Date">
                <span>14 Dec 2023</span><span> - </span><span>30 Dec 2023</span>
            </div>
        </div>
    </div>

    )
}