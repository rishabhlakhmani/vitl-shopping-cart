import { Button } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Product } from "../../../../models/interfaces/product.interface";
import { Response } from "../../../../models/interfaces/response.interface";
import ProductsList from "../../../../shared/components/products-list/products-list.component";
import { basketHooks } from "../../../basket/hooks/basket.hooks";
import ProductsLayout from "../../components/products-layout/products-layout.component";
import { productsHooks } from "../../hooks/products.hooks";
import { productUtils } from "../../utils/products.utils";

export default function Products(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const products = productsHooks.useGetProducts();
  const setProducts = productsHooks.useSetProducts();
  const setTuls = productsHooks.useSetTolerableUpperLimits();
  const addToBasket = basketHooks.useAddToBasket();

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await axios.get<Response>(
        "https://vitl-static-api.s3-eu-west-1.amazonaws.com/fe-test.json"
      );
      setIsLoading(false);
      setProducts(result.data.products as Product[]);
      const tolerableUpperLimits = productUtils.mapToNutrientsAmount(
        result.data.config.tolerableUpperLimits
      );
      setTuls(tolerableUpperLimits);
    };
    setIsLoading(true);
    fetchProducts();
  }, [setProducts, setTuls]);

  if (isLoading) return <div> Loading ... </div>;
  if (!products.length) return <div> No Products available </div>;

  return (
    <ProductsLayout
      header={<h2>Basket</h2>}
      productList={
        <ProductsList
          products={products}
          actionItem="Add to Basket"
          onActionClick={addToBasket}
        />
      }
    />
  );
}
