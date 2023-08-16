import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);
  console.log(quantity);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div>
      <div className="ItemCountBtnContainter">
        <button onClick={decrement}>-</button>
        <p>{quantity}</p>
        <button onClick={increment}>+</button>
      </div>
      <div className="AddButtonContainer">
        <button onClick={() => onAdd(quantity)} disabled={!stock}>
          Add
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
