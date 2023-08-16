import { Link } from "react-router-dom";
import "./Item.css";
function Item(props) {
  const { id, img, name, typeImg} = props;
  return (
    <div className="ItemContainer">
      <article className="ItemCard">
      <picture>
        <img src={img} width="100px" alt="" className="ItemImg" />
      </picture>
        <header className="ItemHeader">
          <h5>{name}</h5>
          <img src={typeImg} alt="" width="22px" />
        </header>
        <footer>
        <Link to={`/item/${id}`}>
        <button>Details</button>
        </Link>
        </footer>
      </article>
    </div>
  );
}

export default Item;

