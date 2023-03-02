import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axiosIstance';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const validateLogin = useCallback(() => {
    const minPassLength = 6;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validPassword = (password.length >= minPassLength);
    const validEmail = (email.length !== 0 && emailRegex.test(email));
    if (validEmail && validPassword) return setIsDisabled(false);
    setIsDisabled(true);
    setError(undefined);
  }, [email, password]);

  useEffect(() => {
    validateLogin();
  }, [email, password, validateLogin]);

  const saveLogin = (login) => {
    localStorage.setItem('Login', JSON.stringify({ ...login }));
  };

  const handleLogin = useCallback((e) => {
    e.preventDefault();

    axios.post('login', { email, password }).then((response) => {
      saveLogin(response.data);
      navigate('/customer/products');
    }).catch((err) => setError({ error: err }));
  }, [email, password, navigate]);

  const handleRegister = useCallback(() => {
    navigate('/register');
  }, [navigate]);

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
          value={ email }
          onChange={ ({ target: { value } }) => setEmail(value) }
        />
        Senha:
        <input
          data-testid="common_login__input-password"
          type="password"
          name="password"
          id="password"
          value={ password }
          onChange={ ({ target: { value } }) => setPassword(value) }
        />
        <button
          data-testid="common_login__button-login"
          type="submit"
          disabled={ isDisabled }
          onClick={ handleLogin }
        >
          Login
        </button>
        <button
          data-testid="common_login__button-register"
          type="button"
          onClick={ handleRegister }
        >
          Ainda não tenho conta
        </button>
        {
          error
            ? (
              <h4
                data-testid="common_login__element-invalid-email"
              >
                Email inválido
              </h4>
            ) : ''
        }
      </form>
    </div>
  );
}

export default Login;
