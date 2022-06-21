import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);

        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    const stickNavbar = () => {
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    };

    return (
        <div className='Navbar'>
            <header>
                <Link to='/' className='logo'>Logo</Link>
                <ul>
                    <li> <Link to='/about'>About</Link> </li>
                    <li> <Link to='/wishlist'>Wishlist</Link> </li>
                    <li> <Link to='/cart'>Cart</Link> </li>
                    <li> <Link to='/profile'>Profile</Link> </li>
                </ul>
            </header>
        </div>
    )
}

export default Navbar
