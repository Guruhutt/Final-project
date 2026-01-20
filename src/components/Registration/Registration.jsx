import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";

export default function RegistrationModal({
  onRegistration,
  onClose,
  isOpen,
  swithedToLogin,
}) {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    avatar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    console.log("Registration form submitted with:", data);
    e.preventDefault();
    if (!data.password) {
      return alert("wrong password");
    } else {
      onRegistration(data);
      onClose();
    }
  };

  useEffect(() => {
    setData({
      email: "",
      password: "",
      name: "",
      avatar: "",
    });
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="registration-email" className="modal__label">
        Email:
        <input
          className="modal__input"
          id="registration-email"
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
          required
        />
      </label>

      <label htmlFor="registration-password" className="modal__label">
        Password:
        <input
          className="modal__input"
          id="registration-password"
          name="password"
          type="password"
          value={data.password}
          onChange={handleChange}
          required
        />
      </label>

      <label htmlFor="registration-name" className="modal__label">
        Name:
        <input
          className="modal__input"
          id="registration-name"
          name="name"
          type="text"
          value={data.name}
          onChange={handleChange}
          required
        />
      </label>

      <button
        type="button"
        className="modal__register-link"
        onClick={() => swithedToLogin()}
      >
        or <span className="modal__switch">Log in</span>
      </button>
    </ModalWithForm>
  );
}

export { RegistrationModal };
