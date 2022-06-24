import React from 'react';
import { Link } from "react-router-dom";

const HomeItemCard = ({title, body, imgSrc}) => {
    return (
        <div className="CategoryCard">
            <div className="CategoryCardImg"><img className='CategoryCardImgSrc' src={`${imgSrc}`}  ></img></div>
            <div className="CategoryCardContent">
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default HomeItemCard
