import React from "react";
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


const Carousel = () => {
  return (
    <div className='Carousel'>
      <Swiper
        slidesPerView={1}
        spaceBetween={2}
        speed={2000}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://dlcdnrog.asus.com/rog/media/1610082227143.jpg" />
          <div className="swiperTextContent">
            <h2 className="swiperTextTitle">Need Faster Performace <span>on Your Laptop?</span></h2>
            <p>Switch to Asus Rog. For those who Dare</p>
            <Button variant="contained" className="swiperContentBtn">Shop Now <ArrowForwardIcon className="swiperContentBtnArrow" /></Button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/people-sunglasses-woman-men-wear-masculine-clothes-eyeglasses-girl-formal-jacket-suit-guys-sunglasses-copy-space-fashion-trend-stylish-sunglasses-accessory-fashion-outfit_265223-17020.jpg?w=2000" />
          <div className="swiperTextContent">
            <h2 className="swiperTextTitle">End of Season Sale <span>on Top Brands!!!</span></h2>
            <p>50-80% Off <br /> Flying Machine, Lavie... <br /> Free Delivery* on Plus Products</p>
            <Button variant="contained" className="swiperContentBtn">Shop Now <ArrowForwardIcon className="swiperContentBtnArrow" /></Button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://www.xda-developers.com/files/2021/07/Samsung-Galaxy-Z-Fold-3-and-Z-Flip-3-IPX8-resistance.jpg" />
          {/* <img src="https://www.sizescreens.com/wp-content/uploads/2020/02/Samsung-Galaxy-Z-Flip-11.jpg" /> */}
          <div className="swiperTextContent darkLayer">
            <h2 className="swiperTextTitle">Samsung <span>Galaxy Z Flip</span></h2>
            <p>Special Offers with selected Banks* <br /> Feels Good to be First</p>
            <Button variant="contained" className="swiperContentBtn">Shop Now <ArrowForwardIcon className="swiperContentBtnArrow" /></Button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://wallpaperaccess.com/full/5092919.jpg" />
          <div className="swiperTextContent darkLayer">
            <h2 className="swiperTextTitle">Sports Shoes <span>End of Season Sale!!!</span></h2>
            <p>Starting from only<br /> Rs499 <br /> Free Delivery on First Order*</p>
            <Button variant="contained" className="swiperContentBtn">Shop Now <ArrowForwardIcon className="swiperContentBtnArrow" /></Button>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default Carousel
