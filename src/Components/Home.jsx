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
        { title: "Sport Shoes", desc: "Men's Casual Shoes", price: "Under Rs599", imgSrc: "https://5.imimg.com/data5/CI/DI/GY/SELLER-32493408/00-500x500.jpg" },
        { title: "Stylish Sunglasses", desc: "Grab the Best Deals", price: "Under Rs599+Upto 10% Off", imgSrc: "https://image.made-in-china.com/202f0j00ebAfrchICkqY/Male-Flat-Top-Sunglasses-Men-Brand-Black-Square-Shades-UV400-Gradient-Sun-Glasses-for-Men-Cool-One-Piece-Designer.jpg" },
        { title: "Laptops", desc: "Only for Today", price: "Upto Rs33000 Off", imgSrc: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&w=1000&q=80" },
        { title: "Earbuds", desc: "Special Offer", price: "Upto 70% Off", imgSrc: "https://skdy-assets.s3.amazonaws.com/e0de2f0e9ea7b3d827f7d6ef2f1b0ebc6dcf1e6c26fb90287978ccc95dccab3b.jpg" },
    ]

    const TrendingOffers = [
        { title: "Men's Tshirts", desc: "Hurry Don't Miss Out", price: "Extra 5% Off", imgSrc: "https://rukminim1.flixcart.com/image/580/696/l2urv680/t-shirt/m/o/x/l-hood-spray-black-smartees-original-image3nnagm2cna8.jpeg?q=50" },
        { title: "Women's Gowns", desc: "What are you waiting for?", price: "Extra 10% Off", imgSrc: "https://5.imimg.com/data5/ZA/XK/YI/ANDROID-80076263/product-jpeg-500x500.jpg" },
        { title: "Slippers & Flip Flops", desc: "Explore now", price: "Extra 10% Off", imgSrc: "https://rukminim1.flixcart.com/image/580/696/l0pm3680/slipper-flip-flop/x/t/d/5-fmf-10-black-footox-black-original-imagcfs5vfcgq7yu.jpeg?q=50" },
        { title: "Sandals & Floaters", desc: "Great Savings", price: "Extra 5% Off", imgSrc: "https://freepngimg.com/thumb/sandal/28078-7-ladies-sandal-transparent-background.png" },
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
