import classes from "./items.module.css";

function CartItems({ img, name, price, artist, items }) {
  return (
    <>
      <div className={classes.container}>
        <div>
          <img
            src={img}
            alt="pokemon card image"
            className={classes.imageContainer}
          />
          <h3>{name}</h3>
          <p>Artist: {artist}</p>
          <h2>${price}</h2>
        </div>
      </div>
    </>
  );
}

export default CartItems;
