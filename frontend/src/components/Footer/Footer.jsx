import React from "react";
import './Footer.css'
import { assets } from "../../assets/assets";

function Footer() {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="logo" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, in omnis ab, quis assumenda rem quasi officia eaque enim quo commodi nam id temporibus dolores.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="img" />
                        <img src={assets.twitter_icon} alt="img" />
                        <img src={assets.linkedin_icon} alt="img" />

                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>+998990009900</li>
                        <li>example@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2025 Tomato.com - All rights reserved.
            </p>
            <p className="footer-copyright">
                This site done by <a target="blank" href="https://foziljonovxumoyun.uz"><b>foziljonovxumoyun.uz</b></a>
            </p>
        </div>
    );
}

export default Footer;
