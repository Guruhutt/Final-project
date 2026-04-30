import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "../ModalWithForm/ModalWithForm.css";

function LoginModal({ onLogin, onClose, isOpen, swithedToRegister }) {
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
          or Sign up
        </button>
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
