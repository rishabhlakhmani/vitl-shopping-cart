import React from "react";
import "./products-layout.component.scss";

interface Props {
  header: JSX.Element;
  productList: JSX.Element;
}

export default function ProductsLayout({
  header,
  productList,
}: Props): JSX.Element {
  return (
    <>
      {header}
      {productList}
    </>
  );
}
