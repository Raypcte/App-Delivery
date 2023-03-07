import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function OrderCard({ id, status, saleDate, totalPrice }) {
  const navigate = useNavigate();

  return (
    <button
      key={ id }
      onClick={ () => navigate(`/customer/orders/${id}`) }
      type="button"
    >
      <table>
        <tbody>
          <tr>
            <td
              data-testid={ `customer_orders__element-order-id-${id}` }
            >
              {id}
            </td>
            <td
              data-testid={ `customer_orders__
                        element-delivery-status-${id}` }
            >
              {status}
            </td>
            <td
              data-testid={ `customer_orders__element-order-date-${id}` }
            >
              { saleDate }
            </td>
            <td
              data-testid={ `customer_orders__element-card-price-${id}` }
            >
              {totalPrice}
            </td>
          </tr>
        </tbody>
      </table>
    </button>
  );
}

OrderCard.propTypes = {
  orders: PropTypes.shape([{}]),
}.isRequired;

export default OrderCard;
