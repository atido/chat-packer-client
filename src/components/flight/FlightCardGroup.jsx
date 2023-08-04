import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "../CardGroup.css";
import FlightCard from "./FlightCard";

export default function FlightCardGroup({ body }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        100: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
        },
      }}
    >
      {body.map((flight) => (
        <SwiperSlide key={flight.type}>
          <FlightCard flight={flight} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
