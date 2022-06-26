import React from 'react'
import Carousel from './Utils/Carousel'

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import HomeCategoryCard from './Cards/HomeCategoryCard';
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

    const DealsOfTheDay = [
        { title: "Dresses, Tshirts,...", desc: "Only Puma, Reebok & more", price: "Min 60% Off", imgSrc: "https://rukminim1.flixcart.com/image/612/612/ktrk13k0/dress/3/4/4/l-md328-oomph-original-imag7fz5zgcv2rmc.jpeg?q=70" },
        { title: "Titan, Fastrack,...", desc: "Best Selling Styles", price: "Upto 70% Off+Extra 10%", imgSrc: "https://rukminim1.flixcart.com/image/612/612/k6l2vm80/watch/r/z/n/arrow-black-daniel-jubile-original-imafjyyhwkedgeja.jpeg?q=70" },
        { title: "Kitchen, Cookware", desc: "Best Discounts", price: "From Rs199", imgSrc: "https://rukminim1.flixcart.com/image/612/612/krjjde80/chopper/v/j/n/900-ml-big-chopper-gopi-original-imag5b7pgck66bxa.jpeg?q=70" },
        { title: "Sport Shoes", desc: "Men's Casual Shoes", price: "Under Rs599", imgSrc: "https://rukminim1.flixcart.com/image/880/1056/kqv8vww0/shoe/u/r/q/10-capsnew-10-hotstyle-black-black-original-imag4s3fkbpjzvfx.jpeg?q=50" },
        { title: "Stylish Sunglasses", desc: "Grab the Best Deals", price: "Under Rs599+Upto 10% Off", imgSrc: "https://rukminim1.flixcart.com/image/612/612/kwnv6a80/sunglass/h/i/t/polarized-sports-outdoor-activities-sunglass-m-rozzetta-craft-original-imag9afqw3rs4zwq.jpeg?q=70" },
        { title: "Laptops", desc: "Only for Today", price: "Upto Rs33000 Off", imgSrc: "https://m.media-amazon.com/images/I/71Ncb6z2gfL._AC_UL480_FMwebp_QL65_.jpg" },
        { title: "Earbuds", desc: "Special Offer", price: "Upto 70% Off", imgSrc: "https://www.pngitem.com/pimgs/m/99-995221_true-wireless-earbuds-gadget-hd-png-download.png" },
    ]

    const TrendingOffers = [
        { title: "Men's Tshirts", desc: "Hurry Don't Miss Out", price: "Extra 5% Off", imgSrc: "https://rukminim1.flixcart.com/image/580/696/l2urv680/t-shirt/m/o/x/l-hood-spray-black-smartees-original-image3nnagm2cna8.jpeg?q=50" },
        { title: "Women's Gowns", desc: "What are you waiting for?", price: "Extra 10% Off", imgSrc: "https://rukminim1.flixcart.com/image/580/696/kt4ozgw0/gown/n/d/x/15-free-full-sleeve-semi-stitched-pink-maisha-kedar-fab-30-original-imag6ju99f3f3bge.jpeg?q=50" },
        { title: "Slippers & Flip Flops", desc: "Explore now", price: "Extra 10% Off", imgSrc: "https://rukminim1.flixcart.com/image/580/696/l0pm3680/slipper-flip-flop/x/t/d/5-fmf-10-black-footox-black-original-imagcfs5vfcgq7yu.jpeg?q=50" },
        { title: "Sandals & Floaters", desc: "Great Savings", price: "Extra 5% Off", imgSrc: "https://rukminim1.flixcart.com/image/580/696/l2urv680/sandal/i/b/b/6-192-sndl-black-40-bruton-black-original-image3x2hha3cjuz.jpeg?q=50" },
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
                            <HomeCategoryCard key={i} title={item.title} body={item.body} imgSrc={item.imgSrc} />
                        ))
                    }
                </div>

                <h2>Today's Deals</h2>
                <div className="List">
                    <Swiper
                        breakpoints={{
                            350: {
                                slidesPerView: 1
                            },
                            680: {
                                slidesPerView: 2
                            },
                            991: {
                                slidesPerView: 3
                            },
                            1276: {
                                slidesPerView: 4
                            }
                        }}
                        spaceBetween={100}
                        navigation={true}
                        freeMode={true}
                        modules={[FreeMode, Navigation]}
                        className="mySwiper"
                        style={{ paddingLeft: '70px', paddingRight: '70px' }}
                    >

                        {
                            DealsOfTheDay.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <HomeItemCard title={item.title} desc={item.desc} price={item.price} imgSrc={item.imgSrc} />
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                </div>

                <h2>Trending Offers</h2>
                <div className="List">
                    <Swiper
                        breakpoints={{
                            350: {
                                slidesPerView: 1
                            },
                            680: {
                                slidesPerView: 2
                            },
                            991: {
                                slidesPerView: 3
                            },
                            1276: {
                                slidesPerView: 4
                            }
                        }}
                        spaceBetween={100}
                        navigation={true}
                        freeMode={true}
                        modules={[FreeMode, Navigation]}
                        className="mySwiper"
                        style={{ paddingLeft: '70px', paddingRight: '70px' }}
                    >

                        {
                            TrendingOffers.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <HomeItemCard title={item.title} desc={item.desc} price={item.price} imgSrc={item.imgSrc} />
                                </SwiperSlide>
                            ))
                        }

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
