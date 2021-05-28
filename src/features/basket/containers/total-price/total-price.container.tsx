import React from "react";
import { basketHooks } from "../../hooks/basket.hooks";

export default function TotalPrice(): JSX.Element {
  const totalPrice = basketHooks.useGetTotalPrice();
  return (
    <>
      <h2>Total</h2>
      <span><strong>Amount :  </strong>&#163; {totalPrice}</span>
    </>
  );
}
