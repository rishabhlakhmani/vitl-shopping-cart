import { Col, Row } from "antd";
import React from "react";
import { Product } from "../../../models/interfaces/product.interface";
import ProductCard from "../product-card/product-card.component";

interface Props {
  products: Product[];
  actionItem: string;
  onActionClick: (product: Product) => void;
}

export default function ProductsList({
  products,
  actionItem,
  onActionClick,
}: Props): JSX.Element {
  return (
    <Row gutter={[16, 16]}>
      {products.map((product) => (
        <Col key={product.name} xs={{span:24}} sm={{span:24}} md={{span:12}} lg={{span:6}}>
          <ProductCard
            key={product.name}
            product={product}
            actionItem={actionItem}
            onActionClick={onActionClick}
          />
        </Col>
      ))}
    </Row>
  );
}
