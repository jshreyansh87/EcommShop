import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAllProducts } from '../Context/AllProductContext'
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Navigation, Pagination, Thumbs } from "swiper";

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';

const ProductView = () => {
  let params = useParams();
  const allProducts = useAllProducts();
  const currentProduct = allProducts[params.productId - 1];

  const [activeThumb, setActiveThumb] = useState();

  return (
    <div className='ProductView'>
      <div className="ProductWrapper">
        <div className="ProductImageView">

          <Swiper
            thumbs={{ swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null }}
            spaceBetween={10}
            modules={[FreeMode, Thumbs, Pagination]}
            className="product-images-slider"
          >

            {/* <SwiperSlide>
              <img src={currentProduct.images[0]} />
            </SwiperSlide> */}
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

          <Swiper
            onSwiper={setActiveThumb}
            navigation={true}
            spaceBetween={10}
            slidesPerView={3}
            modules={[FreeMode, Navigation, Thumbs]}
            className="product-images-slider-thumbs"
          >
            <SwiperSlide>
              <div className="product-images-slider-thumbs-wrapper">
                <img src="https://m.media-amazon.com/images/I/81i057rz8gS._UL1500_.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product-images-slider-thumbs-wrapper">
                <img src="https://cdn.fashiola.in/L84863407/afrojack-men-black-printed-sneakers.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product-images-slider-thumbs-wrapper">
                <img src="https://img.joomcdn.net/72972a62562a277ba3e0349e69b81cc8b7ae0962_original.jpeg" />
              </div>
            </SwiperSlide>

          </Swiper>

          <div className="BuyAndCartBtns">
            <button className="AddToCart"> <AddShoppingCartIcon /> Add to Cart</button>
            <button className="BuyNow"> <FlashOnIcon /> Buy Now</button>
          </div>

        </div>

        <div className="ProductContent">
          <p className="ProductBrand"> {currentProduct.productBrand} </p>
          <h3 className="ProductTitle"> {currentProduct.productName} </h3>

          <div className="ProductPrice">
            <p className="NewPrice"> {currentProduct.currentPrice} </p>
            <p className="OldPrice"> {currentProduct.prevPrice} </p>
            <p className="Offer"> {currentProduct.offer} off</p>
          </div>

          <br /> <hr /> <br />
          <div className="ProductDetail">
            <h2>Product Details </h2>

            <p> {currentProduct.productDetails} </p>

            <ul>
              <li>Color - <span>Black</span></li>
              <li>Outer material - <span>Canvas</span></li>
              <li>Ideal for - <span>Men</span></li>
              <li>Occasion - <span>Sports</span></li>
              <li>Sole Material - <span>PVC</span></li>
              <li>Closure - <span>Lace-Ups</span></li>
              <li>Upper Pattern - <span>Woven Design</span></li>
              <li>Pack of - <span>1</span></li>

              {/* {
                currentProduct.specs.map((item, i) => (
                  <li>Color - <span>Black</span></li>
                ))
              } */}

            </ul>
          </div>

        </div>
      </div>

    </div>
  )
}

export default ProductView
