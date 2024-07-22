import React, { useState } from 'react';
import { Input } from "./Input";
import { useLogin } from "../shared/hooks";
import { useNavigate } from 'react-router-dom';
import './Login.css';

export const Login = ({ switchAuthHandler }) => {
  const { login, isLoading } = useLogin();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formState, setFormState] = useState({
    username: {
      value: "",
      isValid: false,
      showError: false,
    },
    password: {
      value: "",
      isValid: false,
      showError: false,
    },
    name: {
      value: "",
      isValid: false,
      showError: false,
    },
    email: {
      value: "",
      isValid: false,
      showError: false,
    },
  });

  const toggleForm = (e) => {
    e.preventDefault();
    setIsLogin(!isLogin);
  };

  const handleInputValueChange = (value, field) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        value,
      },
    }));
  };

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false;
    switch (field) {
      case "username":
        isValid = value.trim() !== "";
        break;
      case "password":
        isValid = value.length >= 6;
        break;
      case "name":
        isValid = value.trim() !== "";
        break;
      case "email":
        isValid = value.includes("@");
        break;
      default:
        break;
    }
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid,
      },
    }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await login(formState.username.value, formState.password.value);

    if (response.success) {
      const { username } = response.data;
      
      localStorage.setItem('user', username);
      
      navigate('/');
    }
  };

  const handleRegister = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-page">
      <div className="form">
        {isLogin ? (
          <form className="login-form" onSubmit={handleLogin}>
            <Input
              field="username"
              label="Username"
              value={formState.username.value}
              onChangeHandler={handleInputValueChange}
              type="text"
              onBlurHandler={handleInputValidationOnBlur}
              showErrorMessage={formState.username.showError}
              validationMessage="Username cannot be empty."
            />
            <Input
              field="password"
              label="Password"
              value={formState.password.value}
              onChangeHandler={handleInputValueChange}
              type="password"
              onBlurHandler={handleInputValidationOnBlur}
              showErrorMessage={formState.password.showError}
              validationMessage="Password should be at least 6 characters."
            />
            <button type="submit" disabled={isLoading}>
              Log in
            </button>
            <p className="message">
              Not registered?{' '}
              <a href="#" onClick={toggleForm}>
                Create an account
              </a>
            </p>
          </form>
        ) : (
          <form className="register-form" onSubmit={handleRegister}>
            <Input
              field="name"
              label="Name"
              value={formState.name.value}
              onChangeHandler={handleInputValueChange}
              type="text"
              onBlurHandler={handleInputValidationOnBlur}
              showErrorMessage={formState.name.showError}
              validationMessage="Name cannot be empty."
            />
            <Input
              field="email"
              label="Email address"
              value={formState.email.value}
              onChangeHandler={handleInputValueChange}
              type="text"
              onBlurHandler={handleInputValidationOnBlur}
              showErrorMessage={formState.email.showError}
              validationMessage="Please enter a valid email address."
            />
            <Input
              field="password"
              label="Password"
              value={formState.password.value}
              onChangeHandler={handleInputValueChange}
              type="password"
              onBlurHandler={handleInputValidationOnBlur}
              showErrorMessage={formState.password.showError}
              validationMessage="Password should be at least 6 characters."
            />
            <button type="submit" disabled={isLoading}>
              Create
            </button>
            <p className="message">
              Already registered?{' '}
              <a href="#" onClick={toggleForm}>
                Sign In
              </a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
