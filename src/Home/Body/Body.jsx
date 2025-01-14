import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faCartShopping,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

import banner from "../../assets/tcg.png";
import classes from "./body.module.css";

function Body() {
  return (
    <>
      <div>
        <img src={banner} alt="pokemon banner tcg" className={classes.banner} />
      </div>
      <div className={classes.ruler}>
        <IconContent icon={faCartShopping} content="Special Prices on Bundles" />
        <IconContent icon={faBox} content="30-Day Exchange Policy" />
        <IconContent icon={faTruck} content="Same-day Shipping" />
      </div>
    </>
  );
}

function IconContent({ icon, content }) {
  return (
    <>
      <div className={classes.iconContainer}>
        <FontAwesomeIcon icon={icon} size="2xl" />
        <p> {content}</p>
      </div>
    </>
  );
}

export default Body;
