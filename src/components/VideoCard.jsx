import React from 'react';
import ReactPlayer from 'react-player';
import './VideoCard.css';

const VideoCard = ({ title, description, url }) => {
  return (
    <div className="card">
      <ReactPlayer url={url} controls width="100%" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
