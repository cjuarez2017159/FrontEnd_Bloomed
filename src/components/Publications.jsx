import React, { useEffect } from "react";
import { Navbar } from './Navbar.jsx';
import { usePublicacion } from '../shared/hooks/usePublicacion.jsx';
import './Publications.css';

const Publication = ({ title, content, author, descripcion, date, edad }) => {
  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <div className="publication">
      <h2>{title}</h2>
      <p>{content}</p>
      <p><strong>Descripción:</strong> {descripcion}</p>
      <p><strong>Fecha:</strong> {formattedDate}</p>
      <p><strong>Edad:</strong> {edad}</p>
      <footer>
        <small>By: {author}</small>
      </footer>
    </div>
  );
};

export const Publications = () => {
  const { getPublicaciones, publicaciones, isFetching, error } = usePublicacion();

  useEffect(() => {
    getPublicaciones();
  }, [getPublicaciones]);

  if (isFetching) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="publications-container">
      <Navbar />
      <div className="publications-content">
        {publicaciones && publicaciones.length > 0 ? (
          publicaciones.map((publication) => (
            <Publication
              key={publication._id}
              title={publication.namePublication}
              content={publication.comment}
              author={publication.author}
              descripcion={publication.descripcion}
              date={publication.date}
              edad={publication.edad}
            />
          ))
        ) : (
          <div>No hay publicaciones disponibles</div>
        )}
      </div>
    </div>
  );
};

export default Publications;