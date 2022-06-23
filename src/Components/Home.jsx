import React from 'react'
import Banner from './Utils/Banner'

const Home = ({ name }) => {
    return (
        <div className='Home' >
            <Banner />
            
            <h2 style={{textAlign: 'center', fontSize: '40px'}}>{name}</h2>


        </div>
    )
}

Home.defaultProps = {
    name: "At Home Page",
}

export default Home
