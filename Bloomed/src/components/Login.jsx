import React, { useState } from 'react';
import './Login.css';

export const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = (e) => {
    e.preventDefault();
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-page">
      <div className="form">
        {isLogin ? (
          <form className="login-form">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>login</button>
            <p className="message">Not registered? <a href="#" onClick={toggleForm}>Create an account</a></p>
          </form>
        ) : (
          <form className="register-form">
            <input type="text" placeholder="name" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="email address" />
            <button>create</button>
            <p className="message">Already registered? <a href="#" onClick={toggleForm}>Sign In</a></p>
          </form>
        )}
      </div>
    </div>
  );
};
