import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import style from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    imageName: ' ',
  };

  handleNameChange = event => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.imageName.trim() === '') {
      toast.error('Enter a value to search');
      return;
    }

    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <header className={style.header}>
        <form className={style.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={style.btn}>
            <span className={style.label}>Search</span>
            {/* <ImSearch  /> */}
          </button>

          <input
            className={style.input}
            type="text"
            value={this.state.imageName} 
            autoComplete="off"
            autoFocus
            placeholder="Search images"
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
