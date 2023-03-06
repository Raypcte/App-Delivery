import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';

export default function CustomerProducts() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState(0.00);
  const [disabled, setDisabled] = useState(true);

  const getProducts = () => axios.get('http://localhost:3001/products')
    .then(({ data }) => setProducts(data));

  const calculateTotal = () => {
    const cart = JSON.parse(localStorage.getItem('carrinho'));
    const result = cart.reduce((acc, cur) => acc + cur.totalPrice, 0);
    setValue(result);
  };

  useEffect(() => {
    if (value === 0) return setDisabled(true);
    setDisabled(false);
  }, [value]);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <NavBar />
      <div>
        { products.map(({ id, urlImage, name, price }) => (
          <ProductCard
            key={ id }
            id={ id }
            urlImage={ urlImage }
            name={ name }
            price={ price.replace('.', ',') }
            calculateTotal={ () => calculateTotal() }
          />
        ))}
      </div>
      <div>
        <button
          type="button"
          data-testid="customer_products__button-cart"
          disabled={ disabled }
          onClick={ () => navigate('/customer/checkout') }
        >
          Meu Carrinho:
          {' '}
          <span
            data-testid="customer_products__checkout-bottom-value"
          >
            { value.toFixed(2).replace('.', ',') }
          </span>
        </button>
      </div>
    </div>
  );
}
