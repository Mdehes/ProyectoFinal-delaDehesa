const CartItem = ({ img, name, price, quantity, typeImg }) => {
    return (
      <div className="cart-item">
        <img src={img} alt={name} width="160px" />
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
        <p>{typeImg}</p>
      </div>
    );
  };
  
  export default CartItem;