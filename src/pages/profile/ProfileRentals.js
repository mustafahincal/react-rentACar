import React, { useEffect } from "react";
import { getRentalDetailsByUserId } from "../../services/rentalService";
import { useRentalContext } from "../../context/RentalContext";
import moment from "moment";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { getFromLocalStorage } from "../../services/localStorageService";

function ProfileRentals() {
  const { rentals, setRentals } = useRentalContext();
  const { selectedUser } = useUserContext();
  useEffect(() => {
    getRentalDetailsByUserId(getFromLocalStorage("userId")).then((result) =>
      setRentals(result.data)
    );
  }, []);
  return (
    <div>
      {rentals.map((rental, index) => (
        <div
          className="py-4 px-10 bg-white hover:bg-gray-100 rounded w-full mb-3 flex justify-between items-center text-xl"
          key={index}
        >
          <div>{rental.brandName + " " + rental.modelName}</div>
          <div>{rental.colorName}</div>
          <div>{rental.firstName + " " + rental.lastName}</div>
          <div>{rental.day} Gün</div>
          <div>{rental.amount}₺</div>
        </div>
      ))}
    </div>
  );
}

export default ProfileRentals;
