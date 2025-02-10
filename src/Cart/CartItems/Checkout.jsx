import btn from "../../Button/button.module.css";
import checkout from "./items.module.css";
import gengar from "../../assets/gengar.png";
import { shoppingCartItems } from "../../Shop/Cards/Cards";

function CheckOut() {
  function sumPrices() {
    let totalPrice = 0;

    for (let key in shoppingCartItems) {
      if (shoppingCartItems.hasOwnProperty(key)) {
        const item = shoppingCartItems[key];
        totalPrice = totalPrice + (item.price * item.quantity);
      }
    }

    return totalPrice;
  }

  const price = sumPrices();
  const shipping = parseFloat(price) * 0.03 > 5.45 ? parseFloat(price * 0.03)  : 5.45;
  return (
    <div className={checkout.checkout}>
      <h2 className={checkout.title}>Cart Summary</h2>
      <div className={checkout.items}>
        <div>
          <p>Item Total: {price ? `$${price.toFixed(2)}` : "Loading..."}</p>
          <p>Shipping: {price ? `$${shipping.toFixed(2)}` : "Loading..."}</p>
          <strong>
            <p>
              Cart Subtotal: {price ? `$${(parseFloat(price) + shipping).toFixed(2)}` : "Loading..."}{" "}
            </p>
          </strong>
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
