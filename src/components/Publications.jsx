import React from "react";
import { Navbar } from './Navbar.jsx';
import './Publications.css';

const Publication = ({ title, content, author }) => {
  return (
    <div className="publication">
      <h2>{title}</h2>
      <p>{content}</p>
      <footer>
        <small>By: {author}</small>
      </footer>
    </div>
  );
};

export const Publications = () => {
  const examplePublication = {
    title: "Título de Ejemplo",
    content: "Contenido de la publicación de ejemplo. Aquí va el texto de la publicación.",
    author: "Autor Ejemplo"
  };

  return (
    <div className="publications-container">
      <Navbar />
      <div className="publications-content">
        <Publication
          title={examplePublication.title}
          content={examplePublication.content}
          author={examplePublication.author}
        />
      </div>
    </div>
  );
};

export default Publications;
