import React, { useState } from 'react';
import { Input } from "./Input";
import { useLogin } from "../shared/hooks";
import { useRegister } from '../shared/hooks';
import DatePickerField from './DatePickerField';
import 'react-datepicker/dist/react-datepicker.css';
import './Login.css';

export const Login = ({ switchAuthHandler }) => {
  const { login, isLoading } = useLogin();
  const [isLogin, setIsLogin] = useState(true);
  const { register, isLoading: isRegisterLoading } = useRegister();
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
    nombre: {
      value: "",
      isValid: false,
      showError: false,
    },
    apellido: {
      value: "",
      isValid: false,
      showError: false,
    },
    email: {
      value: "",
      isValid: false,
      showError: false,
    },
    fechaNacimiento: {
      value: null,
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
      case "nombre":
        isValid = value.trim() !== "";
        break;
      case "email":
        isValid = value.includes("@");
        break;
      case "apellido":
        isValid = value.trim() !== "";
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
    login(formState.username.value, formState.password.value);
  };

  const handleDateChange = (date) => {
    setFormState((prevState) => ({
      ...prevState,
      fechaNacimiento: { value: date, isValid: date !== null, showError: date === null },
    }));
  };


  const handleRegister = async (event) => {
    event.preventDefault();

    const fechaNacimiento = formState.fechaNacimiento.value;

    if (!(fechaNacimiento instanceof Date) || isNaN(fechaNacimiento)) {
      return toast.error('La fecha de nacimiento no es válida.');
    }

    await register(
      formState.nombre.value,
      formState.apellido.value,
      formState.username.value,
      formState.email.value,
      formState.password.value,
      fechaNacimiento  
    );
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
              field="nombre"
              label="Nombre"
              value={formState.nombre.value}
              onChangeHandler={handleInputValueChange}
              type="text"
              onBlurHandler={handleInputValidationOnBlur}
              showErrorMessage={formState.nombre.showError}
              validationMessage="Name cannot be empty."
            />
            <Input
              field="apellido"
              label="Apellido"
              value={formState.apellido.value}
              onChangeHandler={handleInputValueChange}
              type="text"
              onBlurHandler={handleInputValidationOnBlur}
              showErrorMessage={formState.apellido.showError}
              validationMessage="Last Name cannot be empty."
            />
            <DatePickerField
              selectedDate={formState.fechaNacimiento.value}
              onDateChange={handleDateChange}
              label="Date of Birth"
            />
            {formState.fechaNacimiento.showError && <p className="error-message">Date of Birth is required.</p>}
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
            <button type="submit" disabled={isRegisterLoading}>
              {isRegisterLoading ? 'Creating account...' : 'Create'}
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