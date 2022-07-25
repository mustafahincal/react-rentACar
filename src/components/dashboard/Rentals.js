import React, { useEffect, useState } from "react";
import { getRentalDetails, getRentals } from "../../services/rentalService";
import { useRentalContext } from "../../context/RentalContext";
import moment from "moment";

function Rentals() {
  const { rentals, setRentals } = useRentalContext();
  useEffect(() => {
    getRentalDetails().then((result) => setRentals(result.data));
  }, []);
  return (
    <div>
      {rentals.map((rental, index) => (
        <div
          className="py-3 px-5 bg-white hover:bg-gray-100 rounded w-full mb-3 flex justify-between items-center"
          key={index}
        >
          <div>{rental.brandName + " " + rental.modelName}</div>
          <div>{rental.colorName}</div>
          <div>{rental.firstName + " " + rental.lastName}</div>
          <div>{moment(rental.rentDate).format("DD-MM-YYYY")}</div>
          <div>{moment(rental.returnDate).format("DD-MM-YYYY")}</div>
          <div>{rental.amount}₺</div>
          <div>
            <button className="btn text-sm">Düzenle</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rentals;
