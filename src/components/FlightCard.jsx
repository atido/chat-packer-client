import { Icon } from "@iconify/react"

import "./Card.css"
import "./FlightCard.css"

export default function FlightCard () {
    return (
    <div className="card">
          <div className="flightCard--Top">
            <div className="cardHeading--White">
              <div>BEST</div>
              <div>$1147</div>
            </div>
            <div className="flightTicket--container">
              <div className="flightTicket--row">
                <div className="flightTicket--Info">
                  <div >13:10</div>
                  <h6>CDG</h6>
                </div>
                <img src="public/depart.svg" alt="" />
                <div className="flightTicket--Info">
                  <div >21:35</div>
                  <h6>EZE</h6>
                </div>
                <img src="" alt="af" />
              </div>
              <div className="flightTicket--row">
                <div className="flightTicket--Info">
                  <div >23:55</div>
                  <h6>EZE</h6>
                </div>
                <img src="public/return.svg" alt="" />
                <div className="flightTicket--Info">
                  <div >17:55</div>
                  <h6>CDG</h6>
                </div>
                <img src="" alt="af" />
              </div>
            </div>
          </div>
          <div className="flightCard--Bottom">
            <div className="cardHeading--Black">
                <div>Paris-Buenos Aires</div>
                <div>$1147</div>
            </div>
            <h6><Icon icon={"formkit:arrowright"}/> Fri 14 Dec, 21:35   .  13h 25m</h6>
            <h6><Icon icon={"formkit:arrowleft"}/> Fri 14 Dec, 21:35   .  13h 25m</h6>
          </div>

        </div>
)}