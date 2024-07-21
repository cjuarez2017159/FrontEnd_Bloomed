import React from "react";
import './Navbar.css'; // Importar el archivo CSS

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <button className="nav-button" onClick={() => window.location.href = '/forum'}>
            foro
          </button>
        </li>
        <li>
          <button className="nav-button" onClick={() => window.location.href = '/posts'}>
            videos
          </button>
        </li>
        <li>
          <button className="nav-button" onClick={() => window.location.href = '/about'}>
            publicaciones
          </button>
        </li>
        <li className="login-register">
          <button className="nav-button" onClick={() => window.location.href = '/about'}>
            login/register
          </button>
        </li>
      </ul>
    </nav>
  );
};
