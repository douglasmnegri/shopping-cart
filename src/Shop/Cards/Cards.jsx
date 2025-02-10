import { useState } from "react";
import classes from "./cards.module.css";
import btnClass from "../../Button/button.module.css";
import { faCartShopping, faCheck } from "@fortawesome/free-solid-svg-icons";
import IconContent from "../../Icons";

const shoppingCartItems = {};

function Cards({ img, name, price, artist, id }) {
  const [addedToCart, setAddedToCart] = useState(false);

  function addToCart() {
    if (shoppingCartItems[id]) {
      shoppingCartItems[id].quantity += 1; 
    } else {
      shoppingCartItems[id] = { price, quantity: 1 }; 
    }

    setAddedToCart(true);
    console.log(shoppingCartItems);

    // Reset animation after 1 second
    setTimeout(() => setAddedToCart(false), 1000);
  }

  return (
    <div className={classes.container}>
      <div className={classes.pictureContainer}>
        <img src={img} alt="pokemon card image" />
      </div>
      <div className={classes.title}>
        <div className={classes.titleBox}>
          <h3 className={classes.font}>{name}</h3>
          <p className={classes.artist}>Artist: {artist}</p>
        </div>

        <div className={classes.btnBox}>
          <h2 className={classes.font}>${price}</h2>
          <button
            onClick={addToCart}
            className={`${btnClass.mainBtn} ${classes.btn}`}
          >
            Buy
          </button>
          <button
            onClick={addToCart}
            className={`${btnClass.mainBtn} ${classes.btn} ${
              addedToCart ? classes.addedAnimation : ""
            }`}
          >
            <IconContent icon={addedToCart ? faCheck : faCartShopping} />
          </button>
        </div>
      </div>
    </div>
  );
}

export { shoppingCartItems };
export default Cards;
