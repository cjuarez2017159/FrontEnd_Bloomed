import React, { useEffect, useState } from 'react';
import './Video.css'; 
import {Navbar} from './Navbar.jsx'; // Asegúrate de que la ruta sea correcta

export const Video = () => {
  const [videoSrc, setVideoSrc] = useState('');

  // Simulación de carga de datos desde una base de datos
  useEffect(() => {
    // Aquí se haría la solicitud a la base de datos para obtener la URL del video
    // Por ahora, vamos a usar una URL de video de ejemplo
    const fetchVideo = async () => {
      // Simulamos una petición a la base de datos
      const videoUrl = 'https://www.youtube.com/watch?v=B4LvDiIi128&t=10s&ab_channel=MdeMario'; // Ejemplo de URL de video
      setVideoSrc(videoUrl);
    };

    fetchVideo();
  }, []);

  return (
    <div className="video-page">
      <Navbar />
      <div className="video-description">
        <h2>En este apartado podrás ver videos sobre la información sexual</h2>
        <p>
          Aquí encontrarás una variedad de videos educativos que te proporcionarán
          información precisa y útil sobre temas de salud sexual y reproductiva.Aquí encontrarás una variedad de videos educativos que te proporcionarán
          información precisa y útil sobre temas de salud sexual y reproductiva.Aquí encontrarás una variedad de videos educativos que te proporcionarán
          información precisa y útil sobre temas de salud sexual y reproductiva.Aquí encontrarás una variedad de videos educativos que te proporcionarán
          información precisa y útil sobre temas de salud sexual y reproductiva.
          
        </p>
      </div>
      <div className="video-container">
        {videoSrc ? (
          <video controls>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Loading video...</p>
        )}
      </div>
    </div>
  );
};
