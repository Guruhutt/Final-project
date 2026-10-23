import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";
import React from "react";

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
  });
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
  } else if (data.password.length < 2) {
    newErrors.password = "Password must be at least 2 characters";
  }

  if (!data.name.trim()) {
    newErrors.name = "Name is required";
  } else if (data.name.trim().length < 2) {
    newErrors.name = "Name must be at least 2 characters";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) {
    return;
  }

  onRegistration(data);
};


  return (
    <ModalWithForm
      key={isOpen}
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
          placeholder="email"
          minLength={2}
        />
        {errors.email && <span className="modal__error">{errors.email}</span>}
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
          minLength={2}
          placeholder="password"
        />
        {errors.password && <span className="modal__error">{errors.password}</span>}
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
          minLength={2}
          placeholder="name"
        />
        {errors.name && (
  <span className="modal__error">{errors.name}</span>
)}
      </label>
      <button type="submit" className="modal__submit">
        sign up
      </button>
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
