import React from "react";

interface Props {
  header: JSX.Element;
  productList: JSX.Element;
}

export default function BasketLayout({
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
