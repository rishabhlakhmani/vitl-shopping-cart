import { Button, Card, Tag } from "antd";
import React from "react";
import { Product } from "../../../models/interfaces/product.interface";

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
      <strong>Price:</strong> {product.price} <br />
      <strong>Nutients:</strong>
      {product.nutrients.map((nutrient) => (
        <Tag key={nutrient.id} color="cyan">
          {nutrient.id}-{nutrient.amount}
        </Tag>
      ))}
    </Card>
  );
}
