import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CarProvider } from "./context/CarContext";
import { ColorProvider } from "./context/ColorContext";
import { BrandProvider } from "./context/BrandContext";
import { RentalProvider } from "./context/RentalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CarProvider>
      <ColorProvider>
        <BrandProvider>
          <RentalProvider>
            <App />
          </RentalProvider>
        </BrandProvider>
      </ColorProvider>
    </CarProvider>
  </BrowserRouter>
);
