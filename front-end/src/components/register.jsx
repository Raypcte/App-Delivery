import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axiosIstance';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState(undefined);
  const { setUser } = useContext(myContext);

  const navigate = useNavigate();

  const validateData = useCallback(() => {
    const minNameLength = 12;
    const minPassLength = 6;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validName = (name.length !== 0 && name.length >= minNameLength);
    const validEmail = (email.length !== 0 && emailRegex.test(email));
    const validPass = (password.length !== 0 && password.length >= minPassLength);

    if (validName && validEmail && validPass) return setIsDisabled(false);
    setIsDisabled(true);
    setError(undefined);
  }, [name, email, password]);

  useEffect(() => {
    validateData();
  }, [name, email, password, error, validateData]);

  const saveUser = useCallback((user) => {
    localStorage.setItem('User', JSON.stringify({ ...user }));
    setUser({ ...user });
  }, [setUser]);

  const handleRegister = useCallback((e) => {
    e.preventDefault();

    axios.post('register', { name, email, password })
      .then((response) => {
        saveUser(response.data);
        navigate('/customer/products');
      })
      .catch((err) => setError({ error: err }));
  }, [name, email, password, navigate, saveUser]);

  return (
    <>
      <h2>Cadastro:</h2>
      <form>
        nome:
        <input
          data-testid="common_register__input-name"
          type="text"
          name="name"
          id="register_name"
          value={ name }
          onChange={ ({ target: { value } }) => setName(value) }
        />
        Email:
        <input
          data-testid="common_register__input-email"
          type="email"
          name="email"
          id="register_email"
          value={ email }
          onChange={ ({ target: { value } }) => setEmail(value) }
        />
        Senha:
        <input
          data-testid="common_register__input-password"
          type="password"
          name="password"
          id="register_password"
          value={ password }
          onChange={ ({ target: { value } }) => setPassword(value) }
        />
        <button
          data-testid="common_register__button-register"
          type="submit"
          disabled={ isDisabled }
          onClick={ (e) => handleRegister(e) }
        >
          Register
        </button>
      </form>
      {
        error
          ? (
            <h4
              data-testid="common_register__element-invalid_register"
            >
              Nome ou email indisponíveis
            </h4>
          ) : ''
      }
    </>
  );
}

export default Register;
