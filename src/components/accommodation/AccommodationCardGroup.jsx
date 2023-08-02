import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "../CardGroup.css";
import AccommodationCard from "./AccommodationCard";

export default function AccommodationCardGroup({ body }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      // spaceBetween={10}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
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
      {body.map((accommodation) => (
        <SwiperSlide>
          <AccommodationCard key={accommodation._id} accommodation={accommodation} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
