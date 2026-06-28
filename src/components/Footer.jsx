import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import linkedinLogo from '../assets/LinkedIn.svg';

const Footer = () => {
    return (
        <div className="footer">
            <div className="socials">
                <p>Follow us on Social Media!</p>
                <Link to="https://www.linkedin.com/company/shd-virtual-construction" target="_blank">
                    <img src={linkedinLogo} width="50px" />
                </Link>
            </div>

            <div className="copyright">
                <p>© 2026 SHD Virtual Construction Partners LLC</p>
            </div>

            <div className="contact">
            {/*

            <p>Address</p>
            <p>Lexington, KY</p>
            <p>Phone Number</p>
            <p>Email</p>
            
            */}

            </div>
        </div>
    );
};

export default Footer;
