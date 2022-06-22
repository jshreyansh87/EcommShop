import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Footer = () => {
    return (
        <div className='Footer'>
            <footer>
                <div className='FooterContainer'>

                    <div className='FooterSection AboutUs'>
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas accusantium explicabo nesciunt dignissimos aliquid consequuntur eum harum delectus debitis ex repellat assumenda fuga ipsam amet odio quibusdam, temporibus blanditiis sapiente.</p>
                        <ul className='SocialMedia'>
                            <li> <a href="#"> <FacebookIcon sx={{ color: '#fff', fontSize: '20px' }} /> </a> </li>
                            <li> <a href="#"> <TwitterIcon sx={{ color: '#fff', fontSize: '20px' }} /> </a> </li>
                            <li> <a href="#"> <InstagramIcon sx={{ color: '#fff', fontSize: '20px' }} /> </a> </li>
                            <li> <a href="#"> <YouTubeIcon sx={{ color: '#fff', fontSize: '20px' }} /> </a> </li>
                        </ul>
                    </div>

                    <div className='FooterSection QuickLinks'>
                        <h2>Quick Links</h2>
                        <ul>
                            <li> <a href='#'>About</a> </li>
                            <li> <a href='#'>FAQs</a> </li>
                            <li> <a href='#'>Privacy Policy</a> </li>
                            <li> <a href='#'>Help</a> </li>
                            <li> <a href='#'>Terms and Conditions</a> </li>
                            <li> <a href='#'>Contact</a> </li>
                        </ul>
                    </div>

                    <div className='FooterSection Contact'>
                        <h2>Contact Info</h2>
                        <ul className='FooterInfo'>
                            <li>
                                <span> <RoomIcon /> </span>
                                <span>123 Hauz Khas<br />
                                    South West Delhi, Delhi 110016,<br />India</span>
                            </li>
                            <li>
                                <span> <PhoneIcon /> </span>
                                <p><a href='tel:911234567890'>+91 123456789</a>
                                    <br />
                                    <a href='tel:911234567890'>+91 123456789</a></p>
                            </li>
                            <li>
                                <span> <EmailOutlinedIcon /> </span>
                                <p><a href='mailto:ecommerce@gmail.com'>ecommerce@gmail.com</a></p>
                            </li>
                        </ul>
                    </div>

                </div>
            </footer>

            <div className='FooterCopyRight'>
                <p>Copyright © 2022. All Rights Reserved.</p>
            </div>

        </div>
    )
}

export default Footer
