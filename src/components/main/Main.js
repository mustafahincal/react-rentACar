import React from "react";
import Cars from "../car/Cars";
import Brands from "..//brand/Brands";
import Colors from "../color/Colors";
import { Routes, Route } from "react-router-dom";

function Main() {
  return (
    <div className="grid grid-cols-10 w-11/12 m-auto">
      <div className="col-span-2 py-10 pr-5">
        <Brands />
        <Colors />
      </div>
      <div className="col-span-8 py-10 pl-5">
        <Routes>
          <Route path="/" element={<Cars />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/brand/:brandId" element={<Cars />} />
          <Route path="/cars/color/:colorId" element={<Cars />} />
        </Routes>
      </div>
      {/* 
  <Customers />
  <Rentals /> */}
    </div>
  );
}

export default Main;
