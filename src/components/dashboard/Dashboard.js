import React from "react";
import Cars from "../car/Cars";
import { Routes, Route, NavLink } from "react-router-dom";
import AddBrand from "./add/AddBrand";
import AddColor from "./add/AddColor";
import AddModel from "./add/AddModel";
import AddOfficialUser from "./add/AddOfficialUser";
import CreditCards from "./CreditCards";
import Rentals from "./Rentals";
import Users from "./Users";
import { useAuthContext } from "../../context/AuthContext";

function DashBoard() {
  const { isEditor } = useAuthContext();
  return (
    <div className="grid grid-cols-10 w-11/12 m-auto">
      <div className="col-span-2 py-10 pr-5">
        <div className="bg-white  rounded-lg flex flex-col shadow-item ">
          <NavLink
            to={"cars"}
            className="px-2  rounded py-2 border-b-2 hover:bg-gray-200"
          >
            Arabalar
          </NavLink>
          <NavLink
            to={"addBrand"}
            className="px-2 rounded py-2 border-b-2 hover:bg-gray-200"
          >
            Markalar
          </NavLink>
          <NavLink
            to={"addModel"}
            className="px-2 rounded py-2 border-b-2 hover:bg-gray-200"
          >
            Modeller
          </NavLink>
          <NavLink
            to={`addColor`}
            className="px-2  rounded py-2 border-b-2 hover:bg-gray-200"
          >
            Renkler
          </NavLink>
          <NavLink
            to={`users`}
            className="px-2 rounded py-2 border-b-2 hover:bg-gray-200"
          >
            Kullanıcılar
          </NavLink>
          <NavLink
            to={`rentals`}
            className="px-2  rounded py-2 border-b-2 hover:bg-gray-200"
          >
            Kiralanan Araçlar
          </NavLink>
          {!isEditor && (
            <NavLink
              to={`officialregister`}
              className="px-2  rounded py-2 border-b-2 hover:bg-gray-200"
            >
              Yetkili Kullanıcı Kayıt
            </NavLink>
          )}
        </div>
      </div>
      <div className="col-span-8 py-10 pl-5">
        <Routes>
          <Route path="/cars" element={<Cars />} />
          <Route path="/users" element={<Users />} />
          <Route path="/creditCards" element={<CreditCards />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/addBrand" element={<AddBrand />} />
          <Route path="/addModel" element={<AddModel />} />
          <Route path="/addColor" element={<AddColor />} />
          <Route path="/officialregister" element={<AddOfficialUser />} />
        </Routes>
      </div>
    </div>
  );
}

export default DashBoard;
