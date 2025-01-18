import { useEffect, useState } from "react";
import classes from "./cards.module.css"

function Cards({ img, name, price }) {
  return (
    <div>
      <img src={img} alt="pokemon card image" />
      <p className={classes.font}>{name}</p>
      <p className={classes.font}>{price}</p>
    </div>
  );
}

export default Cards;