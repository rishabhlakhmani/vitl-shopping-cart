import React from "react";
import ProductsList from "../../../../shared/components/products-list/products-list.component";
import BasketLayout from "../../components/basket-layout/basket-layout.component";
import { basketHooks } from "../../hooks/basket.hooks";

export default function Basket(): JSX.Element {
  const productsInBasket = basketHooks.useGetBasketProducts();
  const removeFromBasket = basketHooks.useRemoveFromBasket();

  return (
    <BasketLayout
      header={<h2>Basket</h2>}
      productList={
        <ProductsList
          products={productsInBasket}
          actionItem="Remove"
          onActionClick={(product) => removeFromBasket(product)}
        />
      }
      totalAmount={<>hello</>}
    />
  );
}
