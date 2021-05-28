import React from "react";
import { Divider } from "antd";

interface Props {
  header: JSX.Element;
  products: JSX.Element;
  basket: JSX.Element;
}

export default function HomePageLayout({
  header,
  products,
  basket,
}: Props): JSX.Element {
  return (
    <>
      {header} <Divider /> {products} <Divider /> {basket}
    </>
  );
}
