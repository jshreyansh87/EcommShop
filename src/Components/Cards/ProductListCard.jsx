import React from 'react';
import { Link } from "react-router-dom";

const ProductListCard = ({ id, title, brand, currentPrice, prevPrice, offer, imageUrl }) => {
    return (
        <div className="ProductListCard">
            <div className="ProductListBox">
                <div className="ProductCoverImage">
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
                    <Link to={`/product/${id}`}>Shop Now </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductListCard
