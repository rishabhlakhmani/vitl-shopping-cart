import { Spin } from "antd";
import React from "react";
import "./loader.component.scss";

export default function Loader(): JSX.Element {
  return (
    <div className="loader-container">
      <Spin />
    </div>
  );
}
