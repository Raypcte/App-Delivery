import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import myContext from '../context/MyContext';

function NavBar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    if (!user) setUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  const handleClick = () => {
    localStorage.clear();
    setUser({});
    navigate('/');
  };

  return (
    user
      ? (
        <header>
          { user.role === 'customer' && (
            <Link
              to="/customer/orders/"
              data-testid="customer_products__element-navbar-link-products"
            >
              Produtos
            </Link>)}
          <div data-testid="customer_products__element-navbar-link-orders">
            { user.role === 'customer'
              && <Link to="/customer/products">Meus Pedidos</Link> }

            { user.role === 'seller' && <Link to="/seller/orders">Pedidos</Link> }

            { user.role === 'administrator'
        && <Link to="/admin/manage">Gerenciar Usuários</Link> }
          </div>
          <div data-testid="customer_products__element-navbar-user-full-name">
            { user.name }
          </div>
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ handleClick }
          >
            Sair
          </button>
        </header>
      ) : ''
  );
}

export default NavBar;
