import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import style from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    showModal: false, // Первоначальное состояние модалки
  };

  toggleModal = () => {
    // Метод для того что бы выводить или не выводить модальное окно. Сразу же деструктуризируем со стейта
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { src, alt, largeImageUrl } = this.props; 
    const { showModal } = this.state;

    return (
      <li className={style.item}>
        <img
          onClick={this.toggleModal}
          src={src}
          alt={alt}
          className={style.image}
        />
        {showModal && (
          <Modal onClose={this.toggleModal} src={largeImageUrl} alt={alt} /> 
        )}
      </li>
    );
  }
}
ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageUrl: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
