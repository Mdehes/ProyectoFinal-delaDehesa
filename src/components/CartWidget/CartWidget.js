import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import cart from "./assets/carticon.png";
import "./CartWidget.css";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link
      to="/cart"
      className="CartWidget"
      style={{ display: totalQuantity > 0 ? "block" : "none" }}
    >
      <img className="CartIcon" src={cart} alt="cart-widget" />
      {totalQuantity}
    </Link>
  );
};

export default CartWidget;
