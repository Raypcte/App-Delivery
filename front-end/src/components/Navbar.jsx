import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const handleClick = () => {
    localStorage.clear();
    navigate('/');
  };

  useEffect(() => {
    const carregaUsuario = () => {
      const data = JSON.parse(localStorage.getItem('Login'));
      setUser(data);
    };

    carregaUsuario();
  }, []);

  return (
    <header>
      { user.role === 'customer' && (
        <Link
          to="/customer/orders/"
          data-testid="customer_products__element-navbar-link-products"
        >
          Produtos
        </Link>)}
      <div data-testid="customer_products__element-navbar-link-orders">
        { user.role === 'customer' && <Link to="/customer/products">Meus Pedidos</Link> }

        { user.role === 'seller' && <Link to="/seller/orders">Pedidos</Link> }

        { user.role === 'admin' && <Link to="/admin/manage">Gerenciar Usuários</Link> }
      </div>
      <div data-testid="customer_products__element-navbar-user-full-name">
        { user.name }
      </div>
      <button
        name="logout-button"
        class-name="logout-button"
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ handleClick }
      >
        Sair
      </button>
    </header>
  );
}

export default NavBar;
