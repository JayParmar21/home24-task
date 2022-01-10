import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ProductList from "./components/ProductsList/ProductList";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ProductList />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
