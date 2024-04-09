import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'

const Navbar = () => {
    return (
        <nav>
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
        </nav>
    );
};

export default Navbar;