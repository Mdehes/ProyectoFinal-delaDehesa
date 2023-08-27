import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import crystal from "./assets/crystal.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

export const ItemDetail = ({
  img,
  id,
  name,
  price,
  typeImg,
  stock,
  description,
  basicAttack,
  vitality,
  defense,
  fortune,
}) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      name,
      price,
    };
    addItem(item, quantity);
  };

  return (
    <article className="ItemDetailCard">
      <picture>
        <img src={img} alt={name} width="160px" />
      </picture>
      <header>
        <h3>{name}</h3>
      </header>
      <section className="itemInfoContainer">
        <img src={typeImg} alt="typeImg" width="30px" />
        <p>{basicAttack}</p>
        <p>{defense}</p>
        <p>{vitality}</p>
        <p>{fortune}</p>
        <p>Stock:{stock}</p>
      </section>
      <div>
        <img src={crystal} alt={crystal} width="15px" className="crystalIcon" />
        {price}
      </div>
      <div className="ItemCountContainer">
        {quantityAdded > 0 ? (
          <Link to="/cart" className="Option">
            <button>Added</button>
          </Link>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        )}
      </div>
    </article>
  );
};
