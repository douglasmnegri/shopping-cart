import btn from "../../Button/button.module.css";
import checkout from "./items.module.css";



function CheckOut({ cartItems }) {
  return (
    <div className={checkout.checkout}>
      <h3 className={checkout.title}>Cart Summary</h3>
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
          <p>{cartItems}</p>
          <p>$24.83</p>
          <p>$3.99</p>
          <p>$29.34</p>
        </div>
      </div>
      <div>
        <button className={`${btn.mainBtn} ${checkout.btnContainer}`}>
          Checkout
        </button>
      </div>
    </div>
  );
}


export default CheckOut;
