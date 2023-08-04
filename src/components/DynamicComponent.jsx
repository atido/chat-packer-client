import React from "react";
import EndButtons from "./EndButtons";
import AccommodationCardGroup from "./accommodation/AccommodationCardGroup";
import FlightCardGroup from "./flight/FlightCardGroup";
import Thread from "./thread/Thread";
import ThreadError from "./thread/ThreadError";

const Components = {
  thread: Thread,
  thread_error: ThreadError,
  flightCardGroup: FlightCardGroup,
  accommodationCardGroup: AccommodationCardGroup,
  endButtons: EndButtons,
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
