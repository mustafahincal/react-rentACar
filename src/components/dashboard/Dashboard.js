import React from "react";
import Cars from "../car/Cars";
import Brands from "..//brand/Brands";
import Colors from "../color/Colors";
import { Routes, Route, NavLink } from "react-router-dom";

import CreditCards from "./CreditCards";
import Rentals from "./Rentals";
import Users from "./Users";

function DashBoard() {
  return (
    <div className="grid grid-cols-10 w-11/12 m-auto">
      <div className="col-span-2 py-10 pr-5">
        <div className="bg-white  rounded-lg flex flex-col shadow-item text-lg">
          <NavLink
            to="cars"
            className="px-2 hover:bg-gray-200 rounded py-2 border-b-2"
          >
            Arabalar
          </NavLink>
          <NavLink
            to={`/`}
            className="px-2 hover:bg-gray-200 rounded py-2 border-b-2"
          >
            Kullanıcılar
          </NavLink>
          <NavLink
            to={`/`}
            className="px-2 hover:bg-gray-200 rounded py-2 border-b-2"
          >
            Kredi Kartları
          </NavLink>
          <NavLink
            to={`/`}
            className="px-2 hover:bg-gray-200 rounded py-2 border-b-2"
          >
            Kiralanan Araçlar
          </NavLink>
        </div>
      </div>
      <div className="col-span-8 py-10 pl-5">
        <Routes>
          <Route path="/cars" element={<Cars />} />
          <Route path="/users" element={<Users />} />
          <Route path="/creditCards" element={<CreditCards />} />
          <Route path="/rentals" element={<Rentals />} />
        </Routes>
      </div>
    </div>
  );
}

export default DashBoard;
