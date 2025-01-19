import classes from "./cart.module.css"

function CartBody() {
  const mockShop = ["xyp-XY19", "sv6-6", "sv6pt5-1", "xy4-22"];
  return (
    <div>
      <div>
        <h3>Cart Summary</h3>
        <p>Items: {mockShop.length}</p>
        <p>Item Total: $24.83</p>
        <p>Estimated Shipping: $3.99</p>
      </div>
    </div>
  );
}


export default CartBody;