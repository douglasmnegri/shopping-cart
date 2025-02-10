import classes from "./items.module.css";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import IconContent from "../../Icons";
import { useContext } from "react";
import { CartContext } from "../../CartContext";

function CartItems({ id, img, name, price, artist }) {
  const { shoppingCartItems, setShoppingCartItems } = useContext(CartContext);

  function increaseQuantity() {
    if (shoppingCartItems[id]) {
      const updatedCart = { ...shoppingCartItems };
      updatedCart[id].quantity += 1;
      setShoppingCartItems(updatedCart);
    }
  }

  function decreaseQuantity() {
    if (shoppingCartItems[id] && shoppingCartItems[id].quantity > 1) {
      const updatedCart = { ...shoppingCartItems };
      updatedCart[id].quantity -= 1;
      setShoppingCartItems(updatedCart);
    }
  }

  function deleteItem() {
    const updatedCart = { ...shoppingCartItems };
    delete updatedCart[id]; 
    setShoppingCartItems(updatedCart); 
  }

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
            <CardQuantity
              id={id}
              shoppingCartItems={shoppingCartItems}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          </div>
          <div className={classes.trashIcon}>
            <DeleteCard onDelete={deleteItem} /> {/* Pass the delete function */}
          </div>
        </div>
      </div>
    </>
  );
}

function DeleteCard({ onDelete }) {
  return (
    <div>
      <button onClick={onDelete}> {/* Call the delete function on click */}
        <IconContent icon={faTrash} size={"xl"} />
      </button>
    </div>
  );
}

function CardQuantity({ id, shoppingCartItems, increaseQuantity, decreaseQuantity }) {
  return (
    <div className={classes.cardQtd}>
      <button onClick={increaseQuantity}>
        <IconContent icon={faPlus} size={"xl"} />
      </button>
      <div>{shoppingCartItems[id]?.quantity || 1}</div>
      <button onClick={decreaseQuantity}>
        <IconContent icon={faMinus} size={"xl"} />
      </button>
    </div>
  );
}

export default CartItems;
