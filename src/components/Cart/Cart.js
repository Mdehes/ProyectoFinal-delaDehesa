import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);
  if (totalQuantity === 0) {
    return (
      <div>
        <h3>Empty</h3>
        <Link to="/" className="Option">
          <button>
          Products
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map(p => <CartItem key={p.id} {...p}/>) }
      <h4>Total: ${total}</h4>
      <button onClick={()=> clearCart ()} className="Button">Clean</button>
      <Link to='/checkout'>
        <button>
          Checkout
        </button>
      </Link>
    </div>
  )
}

export default Cart;
