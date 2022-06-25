import React from 'react'

const HomeItemCard = ({ title, desc, price, imgSrc }) => {
    return (
        <div className='HomeItemCard'>
            <img src={`${imgSrc}`} alt="" className="HomeItemCardImg" />
            <div className="HomeItemCardBody">
                <h2 className="HomeItemCardTitle">{title}</h2>
                <p className="HomeItemCardDesc">{desc}</p>
                <h3 className="HomeItemCardPrice">{price}</h3>
                <button className="HomeItemCardBtn">Shop Now</button>
            </div>
        </div>
    )
}

export default HomeItemCard
