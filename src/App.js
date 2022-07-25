import Navi from "./components/navi/Navi";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Main from "./components/main/Main";
import CarDetails from "./components/car/CarDetails";
import RentACar from "./components/car/RentACar";
import EditACar from "./components/dashboard/UpdateCar";
import Payment from "./components/car/Payment";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Dashboard from "./components/dashboard/Dashboard";
import AddCar from "./components/dashboard/AddCar";
import UpdateCar from "./components/dashboard/UpdateCar";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
      <div className="font-poppins bg-gray-100 min-h-screen">
        <Navi />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main/*" element={<Main />} />
          <Route path="/cardetails/:id" element={<CarDetails />} />
          <Route path="/rentacar/:id" element={<RentACar />} />
          <Route path="/editacar/:id" element={<EditACar />} />
          <Route path="/payment/:id" element={<Payment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/addCar" element={<AddCar />} />
          <Route path="/updateCar/:id" element={<UpdateCar />} />
        </Routes>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
