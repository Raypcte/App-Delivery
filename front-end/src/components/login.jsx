import { Link } from 'react-router-dom';
import React from 'react';
import axios from '../utils/axiosIstance';

const MIN_LENGTH = 6;
const INITIAL_STATE = {
  email: '',
  password: '',
  validEmail: false,
  validPassword: false,
  disabled: true,
};

class Login extends React.Component {
  state = INITIAL_STATE;

  componentDidUpdate(_prevProps, prevState) {
    const { email, password, validPassword, validEmail } = this.state;
    if (prevState.email !== email || prevState.password !== password) {
      if (validPassword && validEmail) {
        this.setState({
          disabled: false,
        });
      } else {
        this.setState({
          disabled: true,
        });
      }
    }
  }

  handleEmail = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.validateEmail(value);
  };

  handlePassword = async ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.validatePassword(value);
  };

  handlebuttonLogin = (e) => {
    e.preventDefault();
    try {
      axios.get('coffee').then((i) => console.log(i));
    } catch (error) {
      console.log(error);
    }
  };

  handlebuttonRegister = () => {
  };

  validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
      this.setState({
        validEmail: true,
      });
    } else {
      this.setState({
        validEmail: false,
      });
    }
    // this.enableButton();
  };

  validatePassword = (password) => {
    // this.enableButton();
    if (password.length >= MIN_LENGTH) {
      this.setState({
        validPassword: true,
      });
    } else {
      this.setState({
        validPassword: false,
      });
    }
    // this.enableButton();
  };

  render() {
    const { disabled } = this.state;
    return (
      <div>
        <h2>Login:</h2>
        <form>
          Login:
          <input
            data-testid="common_login__input-email"
            type="email"
            name="email"
            id="email"
            onChange={ this.handleEmail }
          />
          Senha:
          <input
            data-testid="common_login__input-password"
            type="password"
            name="password"
            id="password"
            onChange={ (target) => this.handlePassword(target) }
          />
          <button
            data-testid="common_login__button-login"
            type="submit"
            disabled={ disabled }
            onClick={ (e) => this.handlebuttonLogin(e) }
          >
            Login
          </button>
          <Link to="/register">
            <button
              data-testid="common_login__button-register"
              type="button"
              onClick={ this.handlebuttonRegister() }
            >
              Ainda não tenho conta
            </button>
          </Link>
          {}
        </form>
      </div>
    );
  }
}

export default Login;
