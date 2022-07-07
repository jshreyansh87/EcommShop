import React from 'react'

const ProductListCard = ({ title, brand, currentPrice, prevPrice, offer, imageUrl }) => {
    // console.log(title, brand, currentPrice, imageUrl);
    return (
        <div className="ProductListCard">
            <div className="ProductListBox">
                <div className="ProductCoverImage">
                    {/* <img src="https://trek.scene7.com/is/image/TrekBicycleProducts/Cycling_Shoes_Marquee_16x9?$responsive-pjpg$&cache=on,on&wid=1920" /> */}
                    <img src={imageUrl} alt={title} />
                </div>
                <div className="ProductListContent">
                    <h2> {brand} </h2>
                    <h3> {title} </h3>
                    <div className="ProductPriceHolder">
                        <p className="CurrentPrice"> {currentPrice} </p>
                        <p className="PrevPrice"> {prevPrice} </p>
                        <p className="CurrentOffer"> {offer} </p>
                    </div>
                    <a href='#'>Shop Now</a>
                </div>
            </div>
        </div>
    )
}

export default ProductListCard
