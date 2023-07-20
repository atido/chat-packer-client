import { Icon } from "@iconify/react"

import "./Card.css"
import "./AccomCard.css"

export default function AccomCard () {
    return (
        <div className="card">
          <div className="AccomCard--Top " style={{backgroundImage:`url("public/exampleRoom.png")`}}>
              <p className="AccomCard--Location"><Icon icon={"carbon:location-filled"}/>Buenos Aires</p>
              <div className="AccomCard--Price">
                <div>$47 </div><h6> night</h6>
              </div>
          </div>
          <div className="AccomCard--Bottom">
            <div className="AccomCard--HostInfo">
              <span className="cardHeading--Black">Room hosted by Ceci</span>
              <span className="AccomCard--Star">★</span>
              <span className="AccomCard--Rating"><h4>5</h4></span>
            </div>
            <div className="AccomCard--Amenities">
              <span className="AccomCard--Amenity">1 bed</span>
              <span className="AccomCard--Amenity">1 private bathroom</span>
            </div>
          </div>
        </div>
    )
    }