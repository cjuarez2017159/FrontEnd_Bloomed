import React, { useEffect } from 'react';
import './Video.css'; 
import { Navbar } from './Navbar.jsx'; // Asegúrate de que la ruta sea correcta
import VideoCard from './VideoCard.jsx';
import { useVideos } from '../shared/hooks/useGetVideo'; // Asegúrate de que la ruta sea correcta

export const Video = () => {
  const { getVideos, videos, isFetching } = useVideos();

  useEffect(() => {
    getVideos();
  }, [getVideos]);

  return (
    <div className="video-page">
      <Navbar />
      <div className="video-description">
        <h2>En este apartado podrás ver videos sobre la información sexual</h2>
        <p>
          Aquí encontrarás una variedad de videos educativos que te proporcionarán
          información precisa y útil sobre temas de salud sexual y reproductiva.
        </p>
      </div>
      <div className="video-container">
        {isFetching ? (
          <p>Loading videos...</p>
        ) : (
          videos.length > 0 ? (
            videos.map((video) => (
              <VideoCard 
                key={video._id}
                title={video.title}
                description={video.description}
                url={video.url}
              />
            ))
          ) : (
            <p>No videos available</p>
          )
        )}
      </div>
    </div>
  );
};