import { Icon } from "@iconify/react";
import "./Section.css";
import "./FlightCard.css";

export default function SectionFlight() {
  return (
    <div className="section">
      <h4 className="sectionHeading"><Icon icon={"fluent-mdl2:airplane"}></Icon> Flight</h4>
      <div className="sectionContainer">

        <div className="flightSubsection">

          <div className="flightTicket--container greenContour">
            <div className="flightTicket--row">
              <div className="flightTicket--Info">
                <div>13:10</div>
                <h6>CDG</h6>
              </div>
              <img src="public/depart.svg" alt="" />
              <div className="flightTicket--Info">
                <div>21:35</div>
                <h6>EZE</h6>
              </div>
            </div>

            <div className="flightTicket--row">
              <div className="dateFlightNb">
                <h5>14 July 2023</h5>
                <h5>AF1234</h5>
              </div>
              <img src="" alt="" />
            </div>
          </div>
          
          <h4>Paris - Buenos Aires</h4>
          <h5>AF1234</h5>
          <br></br>
          <u>Departure</u>
          <span>14 Jul 2023</span><span>13:10</span>
          <p>Paris CDG airport</p>
          <br></br>
          <u>Arrival</u>
          <span>14 Jul 2023</span><span>21:35</span>
          <p>Buenos Aires EZE airport</p>
          
        </div>

        <div className="flightSubsection">

          <div className="flightTicket--container greenContour">
            <div className="flightTicket--row">
              <div className="flightTicket--Info">
                <div>13:10</div>
                <h6>CDG</h6>
              </div>
              <img src="public/depart.svg" alt="" />
              <div className="flightTicket--Info">
                <div>21:35</div>
                <h6>EZE</h6>
              </div>
            </div>

            <div className="flightTicket--row">
              <div className="dateFlightNb">
                <h5>14 July 2023</h5>
                <h5>AF1234</h5>
              </div>
              <img src="" alt="" />
            </div>
          </div>
          
          <h4>Paris - Buenos Aires</h4>
          <h5>AF1234</h5>
          <br></br>
          <u>Departure</u>
          <span>14 Jul 2023</span><span>13:10</span>
          <p>Paris CDG airport</p>
          <br></br>
          <u>Arrival</u>
          <span>14 Jul 2023</span><span>21:35</span>
          <p>Buenos Aires EZE airport</p>
          
        </div>

        <div className="flightSubsection">

          <div className="flightTicket--container greenContour">
            <div className="flightTicket--row">
              <div className="flightTicket--Info">
                <div>13:10</div>
                <h6>CDG</h6>
              </div>
              <img src="public/depart.svg" alt="" />
              <div className="flightTicket--Info">
                <div>21:35</div>
                <h6>EZE</h6>
              </div>
            </div>

            <div className="flightTicket--row">
              <div className="dateFlightNb">
                <h5>14 July 2023</h5>
                <h5>AF1234</h5>
              </div>
              <img src="" alt="" />
            </div>
          </div>
          
          <h4>Paris - Buenos Aires</h4>
          <h5>AF1234</h5>
          <br></br>
          <u>Departure</u>
          <span>14 Jul 2023</span><span>13:10</span>
          <p>Paris CDG airport</p>
          <br></br>
          <u>Arrival</u>
          <span>14 Jul 2023</span><span>21:35</span>
          <p>Buenos Aires EZE airport</p>
          
        </div>

        <div className="totalCost"><span><h4>Total : </h4></span><span><h3> $1147</h3></span></div>

      </div>
    </div>
  );
}
