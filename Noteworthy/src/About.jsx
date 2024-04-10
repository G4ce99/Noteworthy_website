import React from 'react';
import Navbar from '../Navbar.jsx'; // Reuse your Navbar component
import './About.css'; // Path to your CSS file for styling

function AboutPage() {
  // Add your state hooks and functions here if needed

  const header_para = "We’re a lower-voices a cappella group known for our fun performances and fresh takes on popular songs! It always feels sunny when we perform, and not just because of our golden vests! Since our founding in 2000, we’ve gone million-view-viral on YouTube multiple times, released an album entirely composed of original songs, and performed at the 2022 UC Berkeley commencement.";

  const sectionData = {
    events: {
      title: "EVENTS",
      description: "We’re no stranger to weddings, private parties, tailgates, and conferences. We’ve performed at venues including San Francisco City Hall, University House, the Faculty Club, and UC Berkeley’s 2022 Commencement."
    },
    hireUs: {
      title: "HIRE US",
      description: "Looking to add a spark to your event with live a cappella music? Get in touch with us to discuss booking details!"
    },
    followUs: {
      title: "FOLLOW US",
      socialMedia: [
        { name: "Instagram", url: "https://www.instagram.com/cal_noteworthy/" },
        { name: "Facebook", url: "https://www.facebook.com/Noteworthy" },
        { name: "TikTok", url: "https://www.tiktok.com/@uc_noteworthy" },
        { name: "YouTube", url: "https://www.youtube.com/channel/UCDyMtV5cuuJZrg5Wm7VZmMA" }
      ]
    }
  };

  return (
    <>
      <Navbar />
      
      <h2 class="title">A B O U T   U S</h2>
      <div class="descriptionContainer">
        {header_para}
      </div>

      <div class="sectionContainer">
        <h3 class="sectionTitle">{sectionData.events.title}</h3>
        <p class="sectionDescription">{sectionData.events.description}</p>
        
        <h3 class="sectionTitle">{sectionData.hireUs.title}</h3>
        <p class="sectionDescription">{sectionData.hireUs.description}</p>
        
        <h3 class="sectionTitle">{sectionData.followUs.title}</h3>
      </div>
      <div>
        <a href="https://www.instagram.com/cal_noteworthy/" target="_blank"><img src="./src/MemberDirectory/social_imgs/insta.png" class="socialImg"/></a>
        <a href="https://www.facebook.com/Noteworthy" target="_blank"><img src="./src/MemberDirectory/social_imgs/facebook.png" class="socialImg"/></a>
        <a href="https://www.tiktok.com/@uc_noteworthy" target="_blank"><img src="./src/MemberDirectory/social_imgs/tiktok.png" class="socialImg"/></a>
        <a href="https://www.youtube.com/channel/UCDyMtV5cuuJZrg5Wm7VZmMA" target="_blank"><img src="./src/MemberDirectory/social_imgs/youtube.png" class="socialImg"/></a>
      </div>
    </>
  );

} export default AboutPage;
