import { useState } from 'react';

import './FavoriteVideos.css';
import VideoCard from './VideoCard.jsx'; // Your VideoCard component

const videoIds = [
  '7RPiGAzk4wA',
  'udeym8-yr7g',
  'voVSDvohLEI'
];

function FavoriteVideos() {
  document.body.style.margin = 0;

  const [currentVideoId, setCurrentVideoId] = useState(null);

  const openVideo = (videoId) => {
    setCurrentVideoId(videoId);
    console.log(`Opening video with ID: ${videoId}`);
  };

  const closeVideo = () => {
    setCurrentVideoId(null);
    console.log('Closing video');
  };

  const videoCards = videoIds.map((videoId) => (
    <VideoCard 
      key={videoId} 
      videoId={videoId} 
      onVideoClick={openVideo} 
      onCloseClick={closeVideo} 
    />
  ));

  return (
    <>
      <div>NavBar Goes Here!</div>
      <h2 className="title">OUR FAVORITE VIDEOS</h2>
      <div className="videoTable">
        {videoCards}
      </div>
      <div className="icon-bar">
            <img className="instagram" alt="Instagram" src="instagramLogo.png" />
            <img className="facebook" alt="Facebook" src="facebookLogo.png" />
            <img className="youtube" alt="Youtube" src="youtubeLogo.png" />
            <img className="tiktok" alt="Tiktok" src="tiktokLogo.png" />
          </div>
    </>
  );
}

export default FavoriteVideos;
