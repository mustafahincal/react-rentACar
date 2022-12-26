import Navi from "./components/navi/Navi";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Main from "./components/main/Main";
import CarDetails from "./components/car/CarDetails";
import RentACar from "./components/car/RentACar";
import EditACar from "./components/dashboard/update/UpdateCar";
import Payment from "./components/car/Payment";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Dashboard from "./components/dashboard/Dashboard";
import AddCar from "./components/dashboard/add/AddCar";
import UpdateCar from "./components/dashboard/update/UpdateCar";
import { ToastContainer } from "react-toastify";
import UpdateUser from "./components/dashboard/update/UpdateUser";
import UpdateCreditCard from "./components/dashboard/update/UpdateCreditCard";
import UpdateRental from "./components/dashboard/update/UpdateRental";
import Profile from "./components/profile/Profile";
import Page404 from "./components/page404/Page404";
import LoginPassReset from "./components/login/LoginPassReset";

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
          <Route path="/loginpassreset" element={<LoginPassReset />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/addCar" element={<AddCar />} />
          <Route path="/updateCar/:id" element={<UpdateCar />} />
          <Route path="/updateUser/:id" element={<UpdateUser />} />
          <Route path="/updateCreditCard/:id" element={<UpdateCreditCard />} />
          <Route path="/updateRental/:id" element={<UpdateRental />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="*" element={<Page404 />} />
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
