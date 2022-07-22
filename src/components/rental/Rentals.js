import React, { useEffect, useState } from "react";
import { getRentals } from "../../services/rentalService";
import { useRentalContext } from "../../context/RentalContext";

function Rental() {
  const { rentals, setRentals } = useRentalContext();
  useEffect(() => {
    getRentals().then((result) => setRentals(result.data));
  }, []);
  return (
    <div>
      {rentals.map((rental) => (
        <div
          className="py-1 px-2 hover:bg-gray-100 rounded mt-2"
          key={rental.id}
        >
          {rental.name}
        </div>
      ))}
    </div>
  );
}

export default Rental;
