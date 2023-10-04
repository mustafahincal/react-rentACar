import Navi from './components/navi/Navi';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import CarDetails from './pages/car/CarDetails';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import DashBoard from './pages/dashboard/Dashboard';
import AddCar from './pages/dashboard/add/AddCar';
import UpdateCar from './pages/dashboard/update/UpdateCar';
import UpdateUser from './pages/dashboard/update/UpdateUser';
import UpdateCreditCard from './pages/dashboard/update/UpdateCreditCard';
import UpdateRental from './pages/dashboard/update/UpdateRental';
import Profile from './pages/profile/Profile';
import Main from './pages/main/Main';
import RentACar from './pages/car/RentACar';
import EditACar from './pages/dashboard/update/UpdateCar';
import Payment from './pages/car/Payment';
import LoginPassReset from './pages/login/LoginPassReset';
import Page404 from './pages/page404/Page404';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          <Route path="/dashboard/*" element={<DashBoard />} />
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
