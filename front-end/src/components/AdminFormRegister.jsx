import React, { useCallback, useEffect, useState } from 'react';

export default function AdminFormRegister() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('custumer');

  const validateData = useCallback(() => {
    const minNameLength = 12;
    const minPassLength = 6;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isValidName = (name.length !== 0 && name.length >= minNameLength);
    const isValidEmail = (email.length !== 0 && emailRegex.test(email));
    const isValidPass = (password.length !== 0 && password.length >= minPassLength);

    if (isValidName && isValidEmail && isValidPass) return setIsDisabled(false);
    setIsDisabled(true);
  }, [name, email, password]);

  const clearInputs = () => {
    setEmail('');
    setName('');
    setPassword('');
    setRole('custumer');
  };

  const handleClick = (event) => {
    event.preventDefault();

    axios.post('register', { name, email, password, role })
      .then(() => clearInputs())
      .catch((err) => setError({ error: err }));
  };

  const handleChange = ({ target }) => {
    if (target.name === 'name') setName(target.value);
    if (target.name === 'email') setEmail(target.value);
    if (target.name === 'password') setPassword(target.value);
    if (target.name === 'role') setRole(target.value);
    validateData();
  };

  useEffect(() => {
    console.log('a');
  }, []);

  return (
    <form>
      <label htmlFor="name">
        Nome:
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nome e sobrenome"
          data-testid="admin_manage__input-name"
          onChange={ handleChange }
          value={ name }
        />
      </label>
      <label htmlFor="email">
        Email:
        <input
          type="text"
          name="email"
          id="email"
          placeholder="seu-email@site.com.br"
          data-testid="admin_manage__input-email"
          onChange={ handleChange }
          value={ email }
        />
      </label>
      <label htmlFor="password">
        Senha:
        <input
          type="password"
          name="password"
          id="password"
          data-testid="admin_manage__input-password"
          onChange={ handleChange }
          value={ password }
        />
      </label>
      <label htmlFor="role">
        Tipo:
        <select
          name="role"
          id="role"
          value={ role }
          onChange={ handleChange }
          data-testid="admin_manage__select-role"
        >
          <option value="custumer">Cliente</option>
          <option value="seller">Vendedor</option>
          <option value="administrator">Administrador</option>
        </select>
      </label>
      <button
        disabled={ isDisabled }
        type="button"
        onClick={ handleClick }
        data-testid="admin_manage__button-register"
      >
        Cadastrar
      </button>
    </form>
  );
}
