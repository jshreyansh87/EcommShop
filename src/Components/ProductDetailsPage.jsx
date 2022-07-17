import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAllProducts } from '../Context/AllProductContext'
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Navigation, Pagination, Thumbs } from "swiper";

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';

const ProductDetailsPage = () => {
  let params = useParams();
  const allProducts = useAllProducts();
  const currentProduct = allProducts.find((product) => {
    return product.id === params.productId
  })

  const [activeThumb, setActiveThumb] = useState();

  return (
    <div className='ProductDetailsPage'>
      <div className="ProductWrapper">
        <div className="ProductImageView">

          <Swiper
            thumbs={{ swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null }}
            spaceBetween={10}
            modules={[FreeMode, Thumbs, Pagination]}
            className="product-images-slider"
          >

            {
              currentProduct.images.map((image, i) => (
                <SwiperSlide key={i}>
                  <img src={image} />
                </SwiperSlide>
              ))
            }

          </Swiper>

          <Swiper
            onSwiper={setActiveThumb}
            navigation={true}
            spaceBetween={10}
            slidesPerView={3}
            modules={[FreeMode, Navigation, Thumbs]}
            className="product-images-slider-thumbs"
          >

            {
              currentProduct.images.map((image, i) => (
                <SwiperSlide key={i}>
                  <img src={image} />
                </SwiperSlide>
              ))
            }

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

              {
                Object.entries(currentProduct.specs).map((specPair, i) => (
                  <li key={i}>{specPair[0]} - <span>{specPair[1]}</span></li>
                ))
              }

            </ul>
          </div>

        </div>
      </div>

    </div>
  )
}

export default ProductDetailsPage
