import { Link } from "react-router-dom";
import moon from "./assets/moon.jpg";
import sun from "./assets/sun.jpg";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <img src={sun} alt="logo" width="50px" />
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/category/equipment">
          <button>Equipment</button>
        </Link>
        <Link to="/category/object">
          <button>Objects</button>
        </Link>
        <Link to="/category/pet">
          <button>Pets</button>
        </Link>
      </div>
      <CartWidget />
      <img src={moon} alt="moon" width="50px" />
    </nav>
  );
};

export default NavBar;
