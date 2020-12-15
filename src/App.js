import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './components/Searchbar';
import ImagesInfo from './components/ImagesInfo';

class App extends Component {
  state = {
    imageName: '',
  };

  componentDidMount() {}

  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImagesInfo imageName={this.state.imageName} />
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

export default App;
