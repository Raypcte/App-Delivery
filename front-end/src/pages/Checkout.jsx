import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Checkout() {
  const [products, setProducts] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [sellerId, setSellerId] = useState(0);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const productsCar = JSON.parse(localStorage.getItem('carrinho'));
    setProducts(productsCar || []);

    const getSellers = async () => {
      const response = await axios.get('http://localhost:3001/register?role=seller');
      setSellers(response.data);
      setSellerId(response.data[0].id);
    };
    getSellers();
  }, []);

  const total = (itens) => itens
    .reduce((acc, produto) => (
      acc + Number(produto.totalPrice)
    ), 0);

  const remove = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  const finishSale = async () => {
    const userId = JSON.parse(localStorage.getItem('user'));
    const sale = {
      userId: userId.id || 1,
      sellerId,
      totalPrice: total(products),
      deliveryAddress,
      deliveryNumber,
    };

    const actualSale = await axios.post('http://localhost:3001/sales', sale);
    console.log(actualSale);
    navigate(`/customer/orders/${actualSale.data.id}`);
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
            products.map((item) => (
              <tr key={ item.id }>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-item-number-${item.id}`
                  }
                >
                  {item.id}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-name-${item.id}`
                  }
                >
                  {item.name}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-quantity-${item.id}`
                  }
                >
                  {item.quantity}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-unit-price-${item.id}`
                  }
                >
                  {item.unitPrice}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-${item.id}`
                  }
                >
                  {item.totalPrice}
                </td>
                <td>
                  <button
                    type="button"
                    data-testid={
                      `customer_checkout__element-order-table-remove-${item.id}`
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
            onChange={ (e) => setSellerId(e.target.value) }
            value={ sellerId }
          >
            {
              sellers.map((item) => (
                <option key={ item.name } value={ item.id }>
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
            onChange={ (e) => setDeliveryAddress(e.target.value) }
            value={ deliveryAddress }
          />
        </label>
        <label htmlFor="numero">
          Número:
          <input
            type="number"
            name="numero"
            id="numero"
            data-testid="customer_checkout__input-address-number"
            onChange={ (e) => setDeliveryNumber(e.target.value) }
            value={ deliveryNumber }
          />
        </label>
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
          onClick={ finishSale }
        >
          FINALIZAR PEDIDO
        </button>
      </form>
    </div>
  );
}

export default Checkout;
