import React from "react";
import { ToastContainer } from "react-toastify";
import "./App.scss";
import HomePage from "./features/home/containers/home-page/home-page.container";

export default function App(): JSX.Element {
  return (
    <>
      <HomePage />
      <ToastContainer autoClose={2000} />
    </>
  );
}
