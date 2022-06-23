import React from 'react'
import Carousel from './Utils/Carousel'

const Home = ({ name }) => {
    return (
        <div className='Home' >
            <Carousel />
            
            <h2 style={{textAlign: 'center', fontSize: '40px'}}>{name}</h2>


        </div>
    )
}

Home.defaultProps = {
    name: "At Home Page",
}

export default Home
