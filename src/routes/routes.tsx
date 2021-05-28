import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const Basket = React.lazy(
  () => import("../features/basket/containers/basket/basket.container")
);

const Products = React.lazy(
    () => import("../features/products/containers/products/products.container")
  );

export default function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path="/" exact>
        <Suspense fallback={<div>Loading ... </div>}>
          <Products />
        </Suspense>
      </Route>
      <Route path="/basket" exact>
        <Suspense fallback={<div>Loading ... </div>}>
          <Basket />
        </Suspense>
      </Route>
    </Switch>
  );
}
