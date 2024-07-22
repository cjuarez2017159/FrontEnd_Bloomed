import React from "react";
import { Navbar } from './Navbar.jsx';
import usePublicacion from '../shared/hooks/usePublicacion.jsx'; 
import './Publications.css';

const Publication = ({ title, content, author, descripcion, date, edad }) => {
  const formattedDate = new Date(date).toLocaleDateString(); // Formatea la fecha a una cadena legible
  
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
  const { publicaciones, loading, error } = usePublicacion();

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="publications-container">
      <Navbar />
      <div className="publications-content">
        {publicaciones.length > 0 ? (
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
