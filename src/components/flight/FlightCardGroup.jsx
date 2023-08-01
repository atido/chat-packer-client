import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "../CardGroup.css";
import FlightCard from "./FlightCard";

export default function FlightCardGroup({ body }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      // spaceBetween={10}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{
        100: {
          slidesPerView: 2,
          // spaceBetween: 3,
        },
        640: {
          slidesPerView: 3,
          // spaceBetween: 5,
        },

      }}
    >
      {body.map((flight) => (
        <SwiperSlide><FlightCard key={flight._id} flight={flight} /></SwiperSlide>
      ))}
    </Swiper>
  );
}
