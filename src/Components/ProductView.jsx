import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Navigation, Thumbs } from "swiper";

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';

const ProductView = () => {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className='ProductView'>
      <div className="ProductWrapper">
        <div className="ProductImageView">

          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img src="https://m.media-amazon.com/images/I/81i057rz8gS._UL1500_.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://cdn.fashiola.in/L84863407/afrojack-men-black-printed-sneakers.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://img.joomcdn.net/72972a62562a277ba3e0349e69b81cc8b7ae0962_original.jpeg" />
            </SwiperSlide>
          </Swiper>

          <div className="BuyAndCartBtns">
            <button className="AddToCart"> <AddShoppingCartIcon /> Add to Cart</button>
            <button className="BuyNow"> <FlashOnIcon /> Buy Now</button>
          </div>

        </div>

        <div className="ProductContent">
          <p className="ProductBrand">hotstyle</p>
          <h3 className="ProductTitle">Running Shoes For Men (Black)</h3>

          <div className="ProductPrice">
            <p className="NewPrice">₹247</p>
            <p className="OldPrice">₹499</p>
            <p className="Offer">50% off</p>
          </div>
          
          <br /> <hr /> <br />
          <div className="ProductDetail">
            <h2>Product Details </h2>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem saepe vel cumque culpa, earum enim corrupti ut quia magni eligendi aperiam debitis consectetur ea! Soluta, magnam? Nemo nam, explicabo assumenda nihil eveniet necessitatibus quo ex velit aut perferendis dolores expedita. Iure veniam maiores pariatur. Fugiat sunt ducimus dignissimos expedita inventore?</p>

            <ul>
              <li>Color - <span>Black</span></li>
              <li>Outer material - <span>Canvas</span></li>
              <li>Ideal for - <span>Men</span></li>
              <li>Occasion - <span>Sports</span></li>
              <li>Sole Material - <span>PVC</span></li>
              <li>Closure - <span>Lace-Ups</span></li>
              <li>Upper Pattern - <span>Woven Design</span></li>
              <li>Pack of - <span>1</span></li>
            </ul>
          </div>

        </div>
      </div>






    </div>
  )
}

export default ProductView
