import PropTypes from 'prop-types';

function OrderDetailsCard({
  id,
  status,
  saleDate,
  totalPrice,
  products,
  seller,
}) {
  const statusId = 'customer_order_details__element-order-details-label-delivery-status';
  const handleClick = () => {

  };
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
          { new Date(saleDate)
            .toLocaleString('pt-BR', { timeZone: 'UTC' }).split(',')[0]}
        </h4>
        <h4
          data-testid={ statusId }
        >
          { status }
        </h4>
        <button
          type="button"
          onClick={ handleClick }
          data-testid="customer_order_details__button-delivery-check"
          disabled="true"
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
          { products.map((product, index) => (
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
                { product.salesProducts.quantity }
              </td>
              <td
                data-testid={ `customer_order_details__element
-order-table-unit-price-${index}` }
              >
                { product.price.replace('.', ',') }
              </td>
              <td
                data-testid={ `customer_order_details__element
-order-table-sub-total-${index}` }
              >
                { parseFloat(product.price)
                  .toFixed(2) * Number(product.salesProducts.quantity) }
              </td>
            </tr>
          )) }
        </tbody>
      </table>
      <h4
        data-testid="customer_order_details__element-order-total-price"
      >
        { totalPrice.replace('.', ',') }
      </h4>
    </div>
  );
}

OrderDetailsCard.propTypes = {
  order: PropTypes.shape({}),
}.isRequired;

export default OrderDetailsCard;
