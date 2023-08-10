import { Swiper, SwiperSlide } from '../utils/myswiper';
import './CardGroup.css';

export default function CardGroup({ body, component }) {
  const CardComponent = component;
  return (
    <Swiper
      className="CardGroupSwiper"
      slidesPerView={3}
      navigation={true}
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
      {body.map(element => (
        <SwiperSlide key={element._id}>
          <CardComponent body={element} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
