import { useState, useContext } from "react";
import classes from "./cards.module.css";
import btnClass from "../../Button/button.module.css";
import { faCartShopping, faCheck } from "@fortawesome/free-solid-svg-icons";
import IconContent from "../../Icons";
import { CartContext } from "../../CartContext"; 

function Cards({ img, name, price, artist, id }) {
  const [addedToCart, setAddedToCart] = useState(false);
  const { shoppingCartItems, setShoppingCartItems } = useContext(CartContext); // Use the context

  function addToCart() {
    setShoppingCartItems((prev) => {
      const newCart = { ...prev }; // Create a copy of the previous state
      
      if (newCart[id]) {
        newCart[id].quantity += 1; // Increase quantity if the item exists
      } else {
        newCart[id] = { price, quantity: 1 }; // Add new item
      }

      return newCart; // Return the updated cart
    });

    setAddedToCart(true);

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

export default Cards;
