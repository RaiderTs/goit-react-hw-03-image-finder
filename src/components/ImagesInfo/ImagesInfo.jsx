import { Component } from 'react';
import PropTypes from 'prop-types';
import apiService from '../../services';
import ErrorImage from '../ErrorImage';
import Loader from '../Loader';
import ImageGallery from '../ImageGallery';
import Button from '../Button';

class ImagesInfo extends Component {
  state = {
    images: [],
    error: null,
    status: 'idle',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevName !== nextName) {
      this.setState({ page: 1 });
    }

    if (prevName !== nextName || prevPage !== nextPage) {
      // event.preventDefault
      this.setState({ status: 'pending' });

      apiService
        .fetchImages(nextName, nextPage)
        .then(newImages => {
          if (newImages.total !== 0) {
            this.setState(prevState => ({
              images: [...prevState.images, ...newImages.hits],
              status: 'resolved',
            }));
            return;
          }
          return Promise.reject(new Error('Invalid request'));
        })

        .catch(error => this.setState({ error, status: 'rejected' }))
        .finally(data => {
          window.scrollTo({
            top: document.documentElement.scrollHeight - 970,
            behavior: 'smooth',
          });
        });
    }
  }

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    // this.scrollPage();
  };

  render() {
    const { error, status } = this.state;

    if (status === 'idle') {
      return <p>Please enter your request</p>;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <ErrorImage message={error.message} />;
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGallery images={this.state.images} />
          {/* page={this.state.page} */}
          <Button onLoadMore={this.onLoadMore} page={this.state.page} />
        </>
      );
    }
  }
}

ImagesInfo.propTypes = {
  imageName: PropTypes.string.isRequired,
};

export default ImagesInfo;
