import Cars from "./components/car/Cars";
import Brands from "./components/brand/Brands";
import Navi from "./components/navi/Navi";
import Colors from "./components/color/Colors";
import Customers from "./components/customer/Customers";
import Rentals from "./components/rental/Rentals";
import CarDetails from "./components/car/CarDetails";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="font-poppins bg-gray-100">
        <Navi />
        <div className="grid grid-cols-10 w-11/12 m-auto">
          <div className="col-span-2 py-10 pr-5">
            <Brands />
          </div>
          <div className="col-span-8 py-10 pl-5">
            <Routes>
              <Route path="/" element={<Cars />} />
              <Route path="/cars" element={<Cars />} />
              <Route path="/cars/brand/:brandId" element={<Cars />} />
              <Route path="/cars/color/:colorId" element={<Cars />} />
              <Route
                path="/cars/cardetails/:id"
                element={<CarDetails />}
              ></Route>
            </Routes>
          </div>
          {/* <Colors />
          <Customers />
          <Rentals /> */}
        </div>
      </div>
    </>
  );
}
