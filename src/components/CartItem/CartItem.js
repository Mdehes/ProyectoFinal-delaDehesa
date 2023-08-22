const CartItem = ({ img, name, price, quantity }) => {
    return (
      <div className="cart-item">
        <img src={img} alt={name} width="160px" />
        <h2>{name}</h2>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
      </div>
    );
  };
  
  export default CartItem;