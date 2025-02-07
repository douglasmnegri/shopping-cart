import btn from "../../Button/button.module.css";
import checkout from "./items.module.css";
import gengar from "../../assets/gengar.png";
import { shoppingCartItems } from "../../Shop/Cards/Cards";

function CheckOut({ cartItems }) {
  function sumPrices() {
    let totalPrice = 0;

    for (let key in shoppingCartItems) {
      if (shoppingCartItems.hasOwnProperty(key)) {
        const item = shoppingCartItems[key];
        totalPrice += item.price;
      }
    }

    return totalPrice.toFixed(2); // Format to 2 decimal places for currency
  }

  const price = sumPrices();

  return (
    <div className={checkout.checkout}>
      <h2 className={checkout.title}>Cart Summary</h2>
      <div className={checkout.items}>
        <div>
          <p>Items:</p>
          <p>Item Total:</p>
          <p>Estimated Shipping:</p>
          <strong>
            <p>Cart Subtotal:</p>
          </strong>
        </div>
        <div>
          <p>$ 2.90</p>
          <p>$24.83</p>
          <p>$3.99</p>
          <p>{price ? `$${price}` : "Loading..."}</p>
        </div>
      </div>
      <div>
        <button className={`${btn.mainBtn} ${checkout.btnContainer}`}>
          Checkout
        </button>
      </div>
      <div className={checkout.gengar}>
        <img src={gengar} alt="gengar" className={checkout.imageContainer} />
      </div>
    </div>
  );
}

export default CheckOut;