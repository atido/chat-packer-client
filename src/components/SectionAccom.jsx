import { Icon } from "@iconify/react";
import "./Section.css";
import "./AccomCard.css";

export default function SectionAccom() {
  return (
    <div className="section">
      <h4 className="sectionHeading">
        <span className="sectionIcon"><Icon icon={"material-symbols:hotel-outline"}></Icon></span>Accomadation
      </h4>
      <div className="sectionContainer">
        <div className="accomSubsection">
          <div className="accomSubsection--main">
            <div className="accomSubsection--roomImg" style={{backgroundImage:`url("public/exampleRoom.png")`}}></div>
            <div className="accomSubsection--Info">
              <p>Host : Ceci</p>
              <p>Tel : </p>
              <p>Address : </p>
              <p>Check in : 14 Dec 2023</p>
              <p>Check out : 30 Dec 2023</p>
            </div>
          </div>

          <div className="AccomCard--amenities">
            <span className="AccomCard--Amenity">1 bed</span>
            <span className="AccomCard--Amenity">1 private bath</span>
            <span className="AccomCard--Amenity">Air-conditioning</span>
            <span className="AccomCard--Amenity">Wifi</span>
          </div>
        </div>
      </div>
    </div>
  );
}
