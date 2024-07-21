import React, { useState } from 'react';
import {Navbar} from './Navbar.jsx'; // Asegúrate de que la importación esté correcta
import './Forum.css'; // Importar el archivo CSS

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handlePostChange = (e) => {
    setNewPost(e.target.value);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      setPosts([newPost, ...posts]); // Añadir la nueva publicación al principio del array
      setNewPost('');
    }
  };

  return (
    <div>
      <Navbar /> {/* Navbar fijo en la parte superior */}
      <div className="container">
        <h1>Foro sobre la Sexualidad</h1>
        <form onSubmit={handlePostSubmit}>
          <textarea
            value={newPost}
            onChange={handlePostChange}
            placeholder="Escribe tu mensaje..."
            rows="4"
          />
          <button type="submit">Publicar</button>
        </form>
        <div className="posts-container">
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <div key={index} className="post">
                <p>{post}</p>
              </div>
            ))
          ) : (
            <p>No hay publicaciones aún.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Forum;
