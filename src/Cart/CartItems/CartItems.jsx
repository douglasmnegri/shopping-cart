function CartItems({ img, name, price, artist }) {
  return (
    <>
    <h1>HEYYY WHY IS</h1>
      <div>
        <img src={img} alt="pokemon card image" />
      </div>
      <div>
        <div>
          <h3>{name}</h3>
          <p>Artist: {artist}</p>
        </div>
        <div>
          <h2>${price}</h2>
        </div>
      </div>
    </>
  );
}

export default CartItems;
