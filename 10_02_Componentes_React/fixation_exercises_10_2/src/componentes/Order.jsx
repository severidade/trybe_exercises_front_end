import React from 'react';

class Order extends React.Component {
  render() {
    const { 
      user, 
      product, 
      price } 
    = this.props.order;

    return (
      <li className="order">
        <strong> {user}</strong> - bought <em>{product}</em> for {price.value} {price.currency}
      </li>
    );
  }
}

export default Order;