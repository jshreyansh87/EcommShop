import React from 'react'
import Carousel from './Utils/Carousel'

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import HomeItemCard from './Cards/HomeItemCard';

const Home = ({ name }) => {

    const categoryList = [
        { title: "Mobile", body: "View Mobile", imgSrc: "https://mobilemall.pk/blog/wp-content/uploads/2022/03/Galaxy-A-series-phones-2022.webp" },
        { title: "Home Appliances", body: "View Electronics", imgSrc: "https://media.istockphoto.com/photos/home-appliancess-set-of-household-kitchen-technics-in-the-new-or-picture-id952839420?k=20&m=952839420&s=612x612&w=0&h=W1YiB_4DuiBFQVAUPlPY2ynLpVHzocKKtf6Vp22CwjM=" },
        { title: "Fashion", body: "View Fashion", imgSrc: "https://media.gq.com/photos/5ab151dcd668df704470b18f/master/w_1600%2Cc_limit/Not-Normal-High-Fashion-Gets-Serious-About-Regular-Clothes-20-Edit.jpg" },
        { title: "Sports and Fitness", body: "View Shoes", imgSrc: "https://d1spvtuqt6rmhv.cloudfront.net/images/_large/Pro-Performace-Fitness-Equipment-Solutions-Keiser.jpg" },
        { title: "Groceries", body: "View Grocery", imgSrc: "https://www.verywellfit.com/thmb/Hvinc8CbEn8VEv7HSeH_SmbWTMQ=/3437x2578/smart/filters:no_upscale()/grocery-basket_Dan-Dalton-56a2c9de3df78cf77279f4da.jpg" },
        { title: "Books", body: "View Books", imgSrc: "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip" },
        { title: "Gaming", body: "View Gaming", imgSrc: "https://www.lifewire.com/thmb/Z81WJAozspN0t1duIsx5g24u-AE=/1333x1000/smart/filters:no_upscale()/SonyPlaystation53-3e7bb6aed29740ad9a28ac58692e7176.jpg" },
    ]

    return (
        <>
            <Carousel />
            <div className='Home'>

                {/* <h2>{name}</h2> */}


                <h2>Shop By Categories</h2>
                <div className="List">
                    {
                        categoryList.map((item, i) => (
                            <HomeItemCard key={i} title={item.title} body={item.body} imgSrc={item.imgSrc} />
                        ))
                    }
                </div>

                <h2>Trending Offers</h2>
                <div className="List">
                    <Swiper
                        slidesPerView={'5'}
                        spaceBetween={10}
                        navigation={true}
                        freeMode={true}
                        modules={[FreeMode, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>  <img src='https://mobilemall.pk/blog/wp-content/uploads/2022/03/Galaxy-A-series-phones-2022.webp' /> </SwiperSlide>
                        <SwiperSlide>  <img src='https://mobilemall.pk/blog/wp-content/uploads/2022/03/Galaxy-A-series-phones-2022.webp' /> </SwiperSlide>
                        <SwiperSlide>  <img src='https://mobilemall.pk/blog/wp-content/uploads/2022/03/Galaxy-A-series-phones-2022.webp' /> </SwiperSlide>
                        <SwiperSlide>  <img src='https://mobilemall.pk/blog/wp-content/uploads/2022/03/Galaxy-A-series-phones-2022.webp' /> </SwiperSlide>
                        <SwiperSlide>  <img src='https://mobilemall.pk/blog/wp-content/uploads/2022/03/Galaxy-A-series-phones-2022.webp' /> </SwiperSlide>
                        <SwiperSlide>  <img src='https://mobilemall.pk/blog/wp-content/uploads/2022/03/Galaxy-A-series-phones-2022.webp' /> </SwiperSlide>
                        <SwiperSlide>  <img src='https://mobilemall.pk/blog/wp-content/uploads/2022/03/Galaxy-A-series-phones-2022.webp' /> </SwiperSlide>
                        <SwiperSlide>  <img src='https://mobilemall.pk/blog/wp-content/uploads/2022/03/Galaxy-A-series-phones-2022.webp' /> </SwiperSlide>
                        <SwiperSlide>  <img src='https://mobilemall.pk/blog/wp-content/uploads/2022/03/Galaxy-A-series-phones-2022.webp' /> </SwiperSlide>
                        <SwiperSlide>  <img src='https://mobilemall.pk/blog/wp-content/uploads/2022/03/Galaxy-A-series-phones-2022.webp' /> </SwiperSlide>
                        <SwiperSlide>  <img src='https://mobilemall.pk/blog/wp-content/uploads/2022/03/Galaxy-A-series-phones-2022.webp' /> </SwiperSlide>
                    </Swiper>
                </div>


            </div>
        </>
    )
}

Home.defaultProps = {
    name: "At Home Page",
}

export default Home
