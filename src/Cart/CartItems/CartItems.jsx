import classes from "./items.module.css";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import IconContent from "../../Icons";
import { shoppingCartItems } from "../../Shop/Cards/Cards";
function CartItems({ id, img, name, price, artist }) {
  return (
    <>
      <div>
        <div className={classes.container}>
          <div className={classes.cardHeader}></div>

          <div className={classes.items}>
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
          </div>
          <div className={classes.cardQtd}>
            <CardQuantity cardID={id} />
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

function CardQuantity({ cardID }) {
  function increaseQuantity() {
    if (shoppingCartItems[cardID]) {
      shoppingCartItems[cardID].quantity += 1;
    }
  }

  function decreaseQuantity() {
    if (shoppingCartItems[cardID] && shoppingCartItems[cardID].quantity > 1) {
      console.log(shoppingCartItems)
      shoppingCartItems[cardID].quantity -= 1;
    }
  }

  return (
    <div className={classes.cardQtd}>
      <button onClick={increaseQuantity}>
        <IconContent icon={faPlus} size={"xl"} />
      </button>
      <div>{shoppingCartItems[cardID]?.quantity || 1}</div>
      <button onClick={decreaseQuantity}>
        <IconContent icon={faMinus} size={"xl"} />
      </button>
    </div>
  );
}

export default CartItems;
