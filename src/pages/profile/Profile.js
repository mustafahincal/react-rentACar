import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ChangePassword from './ChangePassword';
import ProfileRentals from './ProfileRentals';
import UpdateUser from '../dashboard/update/UpdateUser';

function Profile() {
  return (
    <div className="grid grid-cols-10 w-11/12 m-auto">
      <div className="col-span-2 py-10 pr-5">
        <div className="bg-white  rounded-lg flex flex-col shadow-item ">
          <Link
            to={'profileRentals'}
            className="px-2  rounded py-2 border-b-2 hover:bg-gray-200"
          >
            Kiralamalar
          </Link>
          <Link
            to={'changePassword'}
            className="px-2  rounded py-2 border-b-2 hover:bg-gray-200"
          >
            Şifre Değiştir
          </Link>
          <Link
            to={'updateUser'}
            className="px-2 rounded py-2 border-b-2 hover:bg-gray-200"
          >
            Bilgileri Değiştir
          </Link>
        </div>
      </div>
      <div className="col-span-8 py-10 pl-5">
        <Routes>
          <Route
            path="/"
            element={<h2 className="text-4xl font-bold">Profile</h2>}
          />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/updateUser" element={<UpdateUser />} />
          <Route path="/profileRentals" element={<ProfileRentals />} />
        </Routes>
      </div>
    </div>
  );
}

export default Profile;
