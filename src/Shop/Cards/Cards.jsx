import { useEffect, useState } from "react";
import classes from "./cards.module.css";
import btnClass from "../../Button/button.module.css";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import IconContent from "../../Icons";

const shoppingCartItems = {};
function Cards({ img, name, price, artist, id }) {
  function getCardID() {
    shoppingCartItems[id] = { price };
  }
  return (
    <>
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
              onClick={getCardID}
              className={`${btnClass.mainBtn} ${classes.btn}`}
            >
              Buy
            </button>
            <button
              onClick={getCardID}
              className={`${btnClass.mainBtn} ${classes.btn}`}
            >
              {" "}
              <IconContent icon={faCartShopping} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export { shoppingCartItems };
export default Cards;

