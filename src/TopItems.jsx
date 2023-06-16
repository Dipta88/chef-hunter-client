import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.jpg';
import slide3 from '../images/slide3.jpg';
import slide4 from '../images/slide4.jpg';
import slide5 from '../images/slide5.jpg';

const TopItems = () => {
  return (
    <section className='mb-20'>
     <h1 className="text-5xl font-bold text-center mt-20 mb-20">Our Top Items</h1>
      <Swiper
        slidesPerView={5}
        spaceBetween={5}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='text-center'>
          <img src={slide1} alt="slide1" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-yellow-500">Thai Rice</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-yellow-500">Ramen</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-yellow-500">Burger</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-yellow-500">Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-yellow-500">Steak</h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default TopItems;
