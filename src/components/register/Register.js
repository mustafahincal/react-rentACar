import React from "react";

function Register() {
  return (
    <div className="w-2/5 m-auto py-10 shadow-item mt-14 bg-white">
      <div className="w-3/4 m-auto">
        <h1 className="font-extrabold text-3xl text-black mb-5 text-center">
          Kayıt Ol
        </h1>
        <div className="w-full flex  flex-col bg-darkBlue text-gray-100  px-14 py-14 text-xl">
          <input
            type="text"
            className="text-darkBlue py-2 px-4 w-full"
            placeholder="Ad"
          />
          <input
            type="text"
            className="text-darkBlue py-2 px-4 w-full mt-5"
            placeholder="Soyad"
          />

          <div className="mt-5">
            <input
              type="text"
              className="text-darkBlue py-2 px-4 w-full"
              placeholder="Email"
            />
          </div>
          <div className="mt-5">
            <input
              type="text"
              className="text-darkBlue py-2 px-4 w-full"
              placeholder="Şifre"
            />
          </div>
        </div>

        <div className="text-right mt-5">
          <button className="btn text-lg">Kayıt Ol</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
