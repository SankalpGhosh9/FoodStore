/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../../assets/assets'
import "./Footer.css"
const Footer = () => {
  return (
    <div className="footer" id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <h1 className='heading'>Foodstore</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vitae, inventore enim quis culpa vero exercitationem unde veniam, sed in labore nulla! Tempora minus eos enim blanditiis distinctio neque soluta.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon}alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-9152095023</li>
                    <li>contact@foodstore.com</li>
                </ul>
            </div>
            
        </div>
        <hr />
    </div>
  )
}

export default Footer