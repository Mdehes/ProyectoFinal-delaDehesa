const CartItem = ({ id, title, price, quantity }) => {
    return (
      <div className="cart-item">
        <h2>{title}</h2>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
      </div>
    );
  };
  
  export default CartItem;