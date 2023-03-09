import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import myContext from '../context/MyContext';

function NavBar() {
  const navigate = useNavigate();
  const { setUser } = useContext(myContext);
  const user = JSON.parse(localStorage.getItem('user'));
  const handleClick = () => {
    localStorage.clear('user');
    setUser({});
    navigate('/');
  };

  return (
    user
      ? (
        <header>
          { user.role === 'customer' && (
            <Link
              to="/customer/products/"
              data-testid="customer_products__element-navbar-link-products"
            >
              Produtos
            </Link>)}
          <div>
            { user.role === 'customer'
              && (
                <Link
                  to="/customer/orders"
                  data-testid="customer_products__element-navbar-link-orders"
                >
                  Meus Pedidos

                </Link>) }

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
