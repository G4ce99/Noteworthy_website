// import { useState } from 'react'
import React from 'react';
import Navbar from './Navbar';
import './HomePage.css'

const HomePage = () => {
    return (
    <div>
        <div className="HOME">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="bottom-overlay" />
          <div className="top-overlay" />
          <div className="slightly-blue" />
          <div className="text-wrapper">Noteworthy</div>
          <div className="div">Acapella</div>
          <svg className="bottom-line" width="1361" height="2" viewBox="0 0 1361 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="1.25" x2="1361" y2="1.25" stroke="white" strokeWidth="1.5"/>
            </svg>
          <div className="icon-bar">
            <img className="instagram" alt="Instagram" src="instagramLogo.png" />
            <img className="facebook" alt="Facebook" src="facebookLogo.png" />
            <img className="youtube" alt="Youtube" src="youtubeLogo.png" />
            <img className="tiktok" alt="Tiktok" src="tiktokLogo.png" />
          </div>
          <div className="navbar">
            <div className="overlap-group">
            <svg className="line" width="1361" height="2" viewBox="0 0 1361 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="1.25" x2="1361" y2="1.25" stroke="white" strokeWidth="1.5"/>
            </svg>
            <svg className="golden-line" width="136" height="4" viewBox="0 0 136 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="2" x2="136" y2="2" stroke="#ECC12A" strokeWidth="4"/>
            </svg>
            </div>
            <div className="text-wrapper-2">home</div>
            <div className="text-wrapper-3">about</div>
            <div className="text-wrapper-4">videos</div>
            <div className="text-wrapper-5">members</div>
            <img className="bearLogo" alt="Bear logo" src="bearLogo.png" />
          </div>
        </div>
      </div>
    </div>
    <Navbar />
    </div>
    )
}

export default HomePage;