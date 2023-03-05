import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function ProductCard({ id, urlImage, name, price, calculateTotal }) {
  const [quantity, setQuantity] = useState(0);

  const handleChange = ({ target: { value } }) => setQuantity(value);

  const updateLocalStorage = (newQuantity) => {
    const cart = JSON.parse(localStorage.getItem('carrinho'));
    const newCart = cart.filter((item) => item.id !== id);

    if (newQuantity === 0) {
      return localStorage.setItem('carrinho', JSON.stringify(newCart));
    }

    const item = {
      id,
      name,
      quantity: newQuantity,
      unitPrice: price,
      totalPrice: parseFloat(price.replace(',', '.') * newQuantity),
    };

    localStorage.setItem('carrinho', JSON.stringify([...newCart, item]));
  };

  const handleClick = ({ target }) => {
    if (target.name === 'add') {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      updateLocalStorage(newQuantity);
    }
    if (target.name === 'rm') {
      const newQuantity = quantity === 0 ? 0 : quantity - 1;
      setQuantity(newQuantity);
      updateLocalStorage(newQuantity);
    }
    calculateTotal();
  };

  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify([]));
  }, []);

  return (
    <div>
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        { `R$ ${price.replace('.', ',')}` }
      </p>

      <img
        src={ urlImage }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        alt={ name }
        width="100px"
      />

      <p data-testid={ `customer_products__element-card-title-${id}` }>
        { name }
      </p>

      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        type="button"
        name="rm"
        onClick={ handleClick }
      >
        -
      </button>

      <input
        data-testid={ `customer_products__input-card-quantity-${id}` }
        type="number"
        name="quantity"
        min="0"
        value={ quantity }
        onChange={ handleChange }
      />

      <button
        data-testid={ `customer_products__button-card-add-item-${id}` }
        type="button"
        name="add"
        onClick={ handleClick }
      >
        +
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  urlImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  calculateTotal: PropTypes.func.isRequired,
};
