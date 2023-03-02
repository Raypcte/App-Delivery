import React, { Component } from 'react';

export default class NavbarCustomer extends Component {
  render() {
    return (
      <nav>
        <div
          data-testid="customer_products__element-navbar-link-products"
        >
          PRODUTOS
        </div>
        <div
          data-testid="customer_products__element-navbar-link-orders"
        >
          MEUS PEDIDOS
        </div>
        <div
          data-testid="customer_products__element-navbar-user-full-name"
        >
          nome
        </div>
        <div
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </div>
      </nav>
    );
  }
}
