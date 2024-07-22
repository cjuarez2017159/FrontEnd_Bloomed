import React, { useState, useEffect } from 'react';
import './Navbar.css';

export const Navbar = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const loggedUser = localStorage.getItem('user');
    if (loggedUser) {
      try {
        const userObj = JSON.parse(loggedUser);
        setUsername(userObj.username);
      } catch (e) {
        console.error('Error parsing user data:', e);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUsername(null);
    window.location.href = '/';
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <button className="nav-button" onClick={() => window.location.href = '/Foro'}>
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
          {username ? (
            <>
              <span className="nav-username">{username}</span>
              <button className="nav-button" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <button className="nav-button" onClick={() => window.location.href = '/login'}>
              login/register
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};
