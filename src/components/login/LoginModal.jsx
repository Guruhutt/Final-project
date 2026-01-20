import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "../ModalWithForm/ModalWithForm.css";

export default function LoginModal({
  onLogin,
  onClose,
  isOpen,
  swithedToRegister,
}) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  useEffect(() => {
    setData({
      email: "",
      password: "",
    });
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Sign in"
      buttonText="Sign in"
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
        <button
          type="button"
          className="modal__login-link"
          onClick={() => swithedToRegister()}
        >
          or <span className="modal__switch">Sign up</span>
        </button>
      </label>
    </ModalWithForm>
  );
}

export { LoginModal };
