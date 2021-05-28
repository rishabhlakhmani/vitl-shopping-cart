import React from "react";

interface Props {
  header: JSX.Element;
  productList: JSX.Element;
}

export default function ProductsLayout({
  header,
  productList,
}: Props): JSX.Element {
  return (
    <div>
      {header}
      {productList}
    </div>
  );
}
