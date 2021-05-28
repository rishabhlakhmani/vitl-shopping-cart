import React from "react";
import { Divider, Layout } from "antd";
import "./home-layout.component.scss";
import { Content, Header } from "antd/lib/layout/layout";

interface Props {
  header: JSX.Element;
  products: JSX.Element;
  basket: JSX.Element;
  total: JSX.Element;
}

export default function HomePageLayout({
  header,
  products,
  basket,
  total,
}: Props): JSX.Element {
  return (
    <Layout>
      <Header>{header}</Header>
      <Content className="content-container">
        {products} <Divider /> {basket} <Divider /> {total}
      </Content>
    </Layout>
  );
}
