import React from "react";
import Thread from "./Thread";
import AccommodationCardGroup from "./accommodation/AccommodationCardGroup";
import FlightCardGroup from "./flight/FlightCardGroup";

const Components = {
  thread: Thread,
  flightCardGroup: FlightCardGroup,
  accommodationCardGroup: AccommodationCardGroup,
};

const DynamicComponent = ({ element }) => {
  if (typeof Components[element.component] !== "undefined") {
    const Component = Components[element.component];
    return <Component body={element.body} />;
  }
  return (
    <p>
      The component <strong>{element.compontent}</strong> has not been created yet.
    </p>
  );
};

export default DynamicComponent;
