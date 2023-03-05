import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function ProductCard({ id, urlImage, name, price }) {
  const [quantity, setQuantity] = useState(0);

  const handleChange = ({ target: { value } }) => {
    setQuantity(value);
  };

  const handleClick = ({ target }) => {
    if (target.name === 'add') setQuantity((prevState) => prevState + 1);
    if (target.name === 'rm') setQuantity((prevState) => prevState - 1);
  };

  return (
    <div>
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        { price }
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
};
