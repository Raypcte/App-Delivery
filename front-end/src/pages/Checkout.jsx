import React, { useState, useEffect } from 'react';
import axios from 'axios';

const produtos = [
  {
    id: 1,
    name: 'Cerveja Stella 250ml',
    qtd: 3,
    und: 3.5,
  },

  {
    id: 2,
    name: 'Cerveja Skol Latão 450ml',
    qtd: 4,
    und: 4.10,
  },

  {
    id: 3,
    name: 'Salgadinho Torcida Churrasco',
    qtd: 1,
    und: 1.56,
  },

];

function Checkout() {
  const [products, setProducts] = useState([]);
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    setProducts(produtos);

    const getSellers = async () => {
      const response = await axios.get('http://localhost:3001/register?role=seller');
      setSellers(response.data);
    };
    getSellers();
  }, []);

  const total = (itens) => itens
    .reduce((acc, produto) => acc + (produto.qtd * produto.und), 0);

  const remove = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1 data-testid="customer_products__element-navbar-link-products">PRODUTOS</h1>
      <h1 data-testid="customer_products__element-navbar-link-orders">MEUS PEDIDOS</h1>
      <p data-testid="customer_products__element-navbar-user-full-name">Cicrano</p>
      <button type="button" data-testid="customer_products__element-navbar-link-logout">
        Sair
      </button>
      <h3>Finalizar Pedido</h3>
      <table>
        <thead>
          <tr>
            <td>Item</td>
            <td>Descrição</td>
            <td>Quantidade</td>
            <td>Valor Unitário</td>
            <td>Sub-total</td>
            <td>Remover Item</td>
          </tr>
        </thead>
        <tbody>
          {
            products.map((item, index) => (
              <tr key={ item.id }>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-item-number-<${index}>`
                  }
                >
                  {item.id}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-name-<${index}>`
                  }
                >
                  {item.name}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-quantity-<${index}>`
                  }
                >
                  {item.qtd}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-unit-price-<${index}>`
                  }
                >
                  {item.und}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-<${index}>`
                  }
                >
                  {item.qtd * item.und}
                </td>
                <td>
                  <button
                    type="button"
                    data-testid={
                      `customer_checkout__element-order-table-remove-<${index}>`
                    }
                    onClick={ () => remove(item.id) }
                  >
                    Remover
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <h1 data-testid="customer_checkout__element-order-total-price">
        {`Total: ${total(products).toFixed(2)}`}
      </h1>
      <h2>Detalhes e  Endereço para Entrega</h2>
      <form>
        <label htmlFor="vendedor">
          P. Vendedora Responsável:
          <select
            id="vendedor"
            data-testid="customer_checkout__select-seller"
          >
            {
              sellers.map((item) => (
                <option key={ item.name } value={ item.name }>
                  {item.name}
                </option>
              ))
            }
          </select>
        </label>
        <label htmlFor="endereco">
          Endereço:
          <input
            type="text"
            name="endereco"
            id="endereco"
            data-testid="customer_checkout__input-address"
          />
        </label>
        <label htmlFor="numero">
          Número:
          <input
            type="number"
            name="numero"
            id="numero"
            data-testid="customer_checkout__input-address-number"
          />
        </label>
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
        >
          FINALIZAR PEDIDO
        </button>
      </form>
    </div>
  );
}

export default Checkout;
