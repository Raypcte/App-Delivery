import React from 'react';

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

  handlebuttonLogin = () => {

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
            onClick={ this.handlebuttonLogin }
          >
            Login
          </button>
          <button
            data-testid="common_login__button-register"
            type="submit"
            onClick={ this.handlebuttonRegister }
          >
            Ainda não tenho conta
          </button>
          {}
        </form>
      </div>
    );
  }
}

export default Login;
