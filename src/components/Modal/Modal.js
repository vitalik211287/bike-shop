import React from 'react';
import { Backdrop, Modals } from './Modal.styled';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

function Modal({ showModal, children }) {
  useEffect(() => {
    window.addEventListener('keydown', escapeClickHandler);
    return () => {
      window.removeEventListener('keydown', escapeClickHandler);
    };
  });

  const escapeClickHandler = e => {
    if (e.code === 'Escape') {
      showModal();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      showModal();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Modals>{children}</Modals>
    </Backdrop>,
    modalRoot
  );
}

export default Modal;
