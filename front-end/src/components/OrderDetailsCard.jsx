import PropTypes from 'prop-types';

function OrderDetailsCard({
  id,
  status,
  saleDate,
  totalPrice,
  products,
  seller,
}) {
  return (
    <div>
      <div>
        <h4 data-testid="customer_order_details__element-order-details-label-order-id">
          { `Pedido ${id}` }
        </h4>
        <h4 data-testid="customer_order_details__element-order-details-label-seller-name">
          { `Vendedor: ${seller.name}` }
        </h4>
        <h4 data-testid="customer_order_details__element-order-details-label-order-date">
          { saleDate }
        </h4>
        <h4
          data-testid="customer_order_details__element
          -order-details-label-delivery-status"
        >
          { status }
        </h4>
        <button
          type="button"
          onClick=""
        >
          Marcar como entregue
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          { products.map((product, index) => {
            const quantity = products.find((e) => e.id === id).length;
            return (
              <tr key={ index }>
                <td
                  data-testid={ `customer_order_details__element
                -order-table-item-number-${index}` }
                >
                  { index + 1 }
                </td>
                <td
                  data-testid={ `customer_order_details__element
                -order-table-name-${index}` }
                >
                  { product.name }
                </td>
                <td
                  data-testid={ `customer_order_details__element
                -order-table-quantity-${index}` }
                >
                  { quantity }
                </td>
                <td
                  data-testid={ `customer_order_details__element
                -order-table-unit-price-${index}` }
                >
                  { product.price }
                </td>
                <td
                  data-testid={ `customer_order_details__element
                -order-table-sub-total-${index}` }
                >
                  { product.price * quantity }
                </td>
              </tr>
            );
          }) }
        </tbody>
      </table>
      <h4
        data-testid="customer_order_details__element-order-total-price"
      >
        {`Total: R$ ${totalPrice}`}
      </h4>
    </div>
  );
}

OrderDetailsCard.propTypes = {
  order: PropTypes.shape({}),
}.isRequired;

export default OrderDetailsCard;
