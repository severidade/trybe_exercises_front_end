import React from 'react';

class Order extends React.Component {
  render() {
    const orders = this.props.orderList;

    return (
      <div className="order">
        <h1>Pedidos</h1>
        {orders.map((order) => (
          <p> <b>{order.user}</b> bought {order.product} for {order.price.value} {order.price.currency} </p>
        ))}
      </div>
    );
  }
}

export default Order;