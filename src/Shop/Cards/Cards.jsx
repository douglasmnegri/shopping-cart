import { useEffect, useState } from "react";
import classes from "./cards.module.css";
import btnClass from "../../Button/button.module.css";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import IconContent from "../../Icons";

function Cards({ img, name, price }) {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.pictureContainer}>
          <h2 className={classes.font}>{name}</h2>
          <img src={img} alt="pokemon card image" />
        </div>
        <div className={classes.title}>
          <h2 className={classes.font}>${price}</h2>
        
        <div className={classes.btnBox}>
          <button className={`${btnClass.mainBtn} ${classes.btn}`}>Buy</button>
          <button className={`${btnClass.mainBtn} ${classes.btn}`}>
            {" "}
            <IconContent icon={faCartShopping} />
          </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
