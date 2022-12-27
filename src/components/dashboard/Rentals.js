import React, { useEffect, useState } from "react";
import { getRentalDetails, getRentals } from "../../services/rentalService";
import { useRentalContext } from "../../context/RentalContext";
import moment from "moment";
import { NavLink } from "react-router-dom";

function Rentals() {
  const { rentals, setRentals } = useRentalContext();
  useEffect(() => {
    getRentalDetails().then((result) => setRentals(result.data));
  }, []);
  return (
    <div>
      {rentals.map((rental, index) => (
        <div
          className="py-4 px-6 bg-white hover:bg-gray-100 rounded w-full mb-3 flex justify-between items-center"
          key={index}
        >
          <div>{rental.brandName + " " + rental.modelName}</div>
          <div>{rental.colorName}</div>
          <div>{rental.firstName + " " + rental.lastName}</div>
          <div>{rental.amount}₺</div>
          <div>
            <NavLink
              to={`/updateRental/${rental.carId}`}
              className="btn text-sm"
            >
              Detay
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rentals;
