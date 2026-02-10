import "./SuccessModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import React from "react";

export function SuccessModal({ onClose, switchedTologin }) {
  return (
    <ModalWithForm onClose={onClose}>
      <div className="success-modal__content">
        <button className="success-modal__close-btn" onClick={onClose}></button>
        <h2 className="success-modal__title">
          Registration successfully completed!
        </h2>
        <button className="success-modal__link-btn" onClick={switchedTologin}>
          Sign in
        </button>
      </div>
    </ModalWithForm>
  );
}

export default SuccessModal;
