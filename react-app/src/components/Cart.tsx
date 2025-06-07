import React from "react";
interface Props {
  cartItems: String[];
}
const Cart = ({ cartItems }: Props) => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div>Cart</div>
      <ul>
        {cartItems.map((e) => (
          <li key={e.toString()}>{e}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
