import React, { Component } from 'react';
import { createPortal } from 'react-dom'; // Для рендера портала
import style from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root'); 

class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Нажали ESC, нужно закрыть модалку');

      this.props.onClose(); 
    }
  };

  handleBackdropClick = event => {

    if (event.currentTarget === event.target) {
      // Используется всплытие событий
      this.props.onClose();
    }
  };

  render() {
    const { src, alt } = this.props; 

    return createPortal(
      <div className={style.backdrop} onClick={this.handleBackdropClick}>
        <div className={style.modal}>
          <img src={src} alt={alt} />
        </div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Modal;
