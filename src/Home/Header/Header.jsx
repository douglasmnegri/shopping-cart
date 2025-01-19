import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import IconContent from "../../Icons";
import { Link } from "react-router-dom";

import classes from "./header.module.css";
import gengar from "../../assets/gengar.png";
function Header() {
  return (
    <div className={classes.header}>
      <Link to="/">
        <div className={classes.title}>
          <img src={gengar} alt="gengar" className={classes.gengar} />
          <h2 className={classes.font}>Gengar's Card Shop</h2>
        </div>
      </Link>
      <div className={classes.link}>
        <p>
          <Link to="/" className={classes.font}>
            Home
          </Link>
        </p>
        <p>
          <Link to="/shop" className={classes.font}>
            Shop
          </Link>
        </p>
        <p>
          <Link to="/cart">
            <IconContent icon={faCartShopping} />
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Header;
