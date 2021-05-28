import { Button, Card, Tag } from "antd";
import React from "react";
import { Product } from "../../../models/interfaces/product.interface";
import "./product-card.component.scss";

interface Props {
  product: Product;
  actionItem: string;
  onActionClick: (product: Product) => void;
}

export default function ProductCard({
  product,
  actionItem,
  onActionClick,
}: Props): JSX.Element {
  return (
    <Card
      title={product.name}
      actions={[
        <Button onClick={(): void => onActionClick(product)}>
          {actionItem}
        </Button>,
      ]}
    >
      <span className="card-body-heading"> Price: </span> {product.price} <br/>
      <span className="card-body-heading"> Nutients: </span>
      {product.nutrients.map((nutrient) => (
        <Tag key={nutrient.id} color="gold">
          {nutrient.id}-{nutrient.amount}
        </Tag>
      ))}
    </Card>
  );
}
