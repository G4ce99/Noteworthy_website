// import { useState } from 'react'
import React from 'react';
import Navbar from './Navbar';
import './HomePage.css'

const HomePage = () => {
    return (
        <div className="HOME">
        <div className="background-overlay"></div>
          <div className="top-overlay" /> 
          <div className="bottom-overlay" />
          <div className="slightly-blue" />
          <div className="noteworthy">Noteworthy</div>
          <div className="acapella">Acapella</div>
          <div className="icon-bar">
          <a href="https://www.instagram.com/cal_noteworthy" target="_blank" className="instagramButton">
            <img className="instagram" alt="Instagram" src="instagramLogo.png" />
            </a>
            <a href="https://www.facebook.com/calnoteworthy" target="_blank" className="facebookButton">
            <img className="facebook" alt="Facebook" src="facebookLogo.png" />
            </a>
            <a href="https://www.youtube.com/channel/UCDyMtV5cuuJZrg5Wm7VZmMA" target="_blank" className="youtubeButton">
            <img className="youtube" alt="Youtube" src="youtubeLogo.png" />
            </a>
            <a href="https://www.tiktok.com/@uc_noteworthy" target="_blank" className="tiktokButton">
            <img className="tiktok" alt="Tiktok" src="tiktokLogo.png" />
        </a>
          </div>
          <div>
          <Navbar />
          </div>
    </div>
    )
}

export default HomePage;