import classes from "./items.module.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import IconContent from "../../Icons";

function CartItems({ img, name, price, artist }) {
  return (
    <>
      <div>
        <div className={classes.container}>
          <img
            src={img}
            alt="pokemon card image"
            className={classes.imageContainer}
          />
          <div className={classes.itemContainer}>
            <h3>{name}</h3>
            <p>Artist: {artist}</p>
            <h2>${price}</h2>
          </div>
          <div className={classes.trashIcon}>
            <DeleteCard />
          </div>
        </div>
      </div>
    </>
  );
}

function DeleteCard() {
  return (
    <div>
      <button>
        <IconContent icon={faTrash} size={"xl"} />
      </button>
    </div>
  );
}

export default CartItems;
