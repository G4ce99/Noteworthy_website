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
          <div className="navbar">
            <div className="overlap-group">
            <svg className="bottom-line" width="1280" height="2" viewBox="0 0 1280 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="1.25" x2="1280" y2="1.25" stroke="white" strokeWidth="1.5"/>
            </svg>
            <svg className="line" width="1280" height="2" viewBox="0 0 1280 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="1.25" x2="1280" y2="1.25" stroke="white" strokeWidth="1.5"/>
            </svg>
            <svg className="golden-line" width="136" height="4" viewBox="0 0 136 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="2" x2="136" y2="2" stroke="#ECC12A" strokeWidth="4"/>
            </svg>
            </div>
            <div className="button-wrapper">
                <button className="homeButton">home</button>
                <button className="aboutButton">about</button>
                <button className="videosButton">videos</button>
                <button className="membersButton">members</button>
                <img className="bearLogo" alt="Bear logo" src="bearLogo.png" />
            </div>
          </div>
    </div>
    )
}

export default HomePage;