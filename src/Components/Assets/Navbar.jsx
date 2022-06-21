import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

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

    const handleToggleMenu = () => {
        var menu = document.querySelector(".NavbarToggleMenu");
        var nav = document.querySelector(".Navbar ul");
        menu.classList.toggle('active');
        nav.classList.toggle('active');
    }

    return (
        <div className='Navbar'>
            <header>
                <Link to='/' className='logo'>Logo</Link>
                <div className='NavbarToggleMenu'><MenuIcon fontSize="large" onClick={handleToggleMenu} /></div>
                <ul>
                    <li> <Link to='/about'>About</Link> </li>
                    <li> <Link to='/wishlist'> Wishlist </Link> </li>
                    <li> <Link to='/cart'>Cart</Link> </li>
                    <li> <Link to='/profile'>Profile</Link> </li>
                </ul>
            </header>
        </div>
    )
}

export default Navbar
