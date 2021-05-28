import React from "react";
import Basket from "../../../basket/containers/basket/basket.container";
import Products from "../../../products/containers/products/products.container";
import HomePageLayout from "../../components/home-layout/home-layout.component";

export default function HomePage(): JSX.Element {

  return (
    <HomePageLayout
      header={<></>}
      products={<Products />}
      basket={<Basket />}
    />
  );
}
