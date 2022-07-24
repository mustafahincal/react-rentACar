import React from "react";

function Payment() {
  return (
    <div className="w-2/3 m-auto py-10 shadow-item mt-20 bg-white">
      <div className="w-2/3 m-auto">
        <h1 className="font-extrabold text-3xl text-black mb-5 text-center">
          Ödeme Bilgileri
        </h1>
        <div className="w-full flex  flex-col bg-darkBlue text-gray-100  px-20 py-10">
          <div className="flex justify-between items-center">
            <input
              type="text"
              className="text-darkBlue py-2 px-4"
              placeholder="Ad"
            />
            <input
              type="text"
              className="text-darkBlue py-2 px-4"
              placeholder="Soyad"
            />
          </div>
          <div className="flex justify-between items-center mt-5">
            <input
              type="text"
              className="text-darkBlue py-2 px-4 w-full"
              placeholder="Kart Numarası"
            />
          </div>
          <div className="flex justify-between items-center mt-5">
            <input
              type="text"
              className="text-darkBlue py-2 px-4 "
              placeholder="Son Kullanım Tarihi"
            />
            <input
              type="text"
              className="text-darkBlue py-2 px-4 "
              placeholder="CVV/CVC"
            />
          </div>
        </div>
        <div className="mt-5 flex justify-between">
          <div className="bg-darkBlue py-2 px-4 text-white rounded text-lg">
            Tutar : 1000tl
          </div>

          <button className="btn text-lg">Ödemeyi Tamamla</button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
