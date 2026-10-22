import React from "react";
import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "../ModalWithForm/ModalWithForm.css";

function LoginModal({ onLogin, onClose, isOpen, swithedToRegister }) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;
  const [errors, setErrors] = useState({});


  
const handleChange = (e) => {
  const { name, value } = e.target;

  setData((prevData) => ({
    ...prevData,
    [name]: value,
  }));

  setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: "",
  }));
};

const handleSubmit = (e) => {
  e.preventDefault();

  const newErrors = {};

  if (!data.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    newErrors.email = "Please enter a valid email address";
  }

  if (!data.password.trim()) {
    newErrors.password = "Password is required";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) {
    return;
  }

  onLogin({ email, password });
};

  return (
    <ModalWithForm
      key={isOpen}
      title="login"
      buttonText="login"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="login-email" className="modal__label">
        Email
        <input
          className="modal__input"
          name="email"
          type="email"
          id="login-email"
          placeholder="Email"
          onChange={handleChange}
          value={data.email}
          required
        />
        {errors.email && <span className="modal__error">{errors.email}</span>}
      </label>
      <label htmlFor="login-password" className="modal__label">
        Password
        <input
          className="modal__input"
          name="password"
          type="password"
          id="login-password"
          placeholder="Password"
          onChange={handleChange}
          value={data.password}
          required
        />
        {errors.password && <span className="modal__error">{errors.password}</span>}
      </label>
      <button type="submit" className="modal__submit">
        Login
      </button>
      <button
        type="button"
        className="modal__login-link"
        onClick={() => swithedToRegister()}
      >
        or <span className="modal__switch">Sign up</span>
      </button>
    </ModalWithForm>
  );
}

export default LoginModal;
