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

            <div className="about">
            {/*

            <p>Address</p>
            <p>Lexington, KY</p>
            <p>Phone Number</p>
            <p>Email</p>

            */}
              <div className="location">
                <h3>Location</h3>
                <p>100% US-Based</p>
                <p>Headquarted in Lexington, KY</p>
              </div>
              <div className="privacy-section">
                <Link to="/privacy" className="privacy-policy-link"><h3>Privacy Policy</h3></Link>
              </div>
            </div>
        </div>
    );
};

export default Footer;
