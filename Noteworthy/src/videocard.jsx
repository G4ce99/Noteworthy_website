import React from 'react';

function VideoCard({ videoId, onVideoClick }) {
  const getThumbnailUrl = (videoId) => `https://img.youtube.com/vi/${videoId}/0.jpg`;

  const title = `Video - ${videoId}`;

  return (
    <div className="videoCard" onClick={() => onVideoClick(videoId)}>
      <img src={getThumbnailUrl(videoId)} alt={title} className="videoThumbnail" />
      <div className="videoInfo">
        <h3 className="videoTitle">{title}</h3>
      </div>
    </div>
  );
}

export default VideoCard;
