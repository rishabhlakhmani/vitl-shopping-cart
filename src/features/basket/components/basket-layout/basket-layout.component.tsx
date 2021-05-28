import React from "react";

interface Props {
  header: JSX.Element;
  productList: JSX.Element;
  totalAmount: JSX.Element;
}

export default function BasketLayout({
  header,
  productList,
  totalAmount,
}: Props): JSX.Element {
  return (
    <div>
      {header}
      {productList}
      {totalAmount}
    </div>
  );
}
