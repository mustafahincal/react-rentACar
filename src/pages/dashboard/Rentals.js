import React, { useEffect, useState } from 'react';
import {
  deleteRental,
  getRentalDetails,
  getRentals,
} from '../../services/rentalService';
import { useRentalContext } from '../../context/RentalContext';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

function Rentals() {
  const { rentals, setRentals } = useRentalContext();
  useEffect(() => {
    getRentalDetails().then((result) => setRentals(result.data));
  }, []);

  const handleDeleteRental = (rentalId) => {
    deleteRental(rentalId)
      .then((result) => {
        toast.success('Kiralama silindi');
        getRentalDetails().then((result) => setRentals(result.data));
      })
      .catch((err) => {
        toast.error('Kiralama silinirken hata oluştu');
      });
  };
  console.log(rentals);
  return (
    <div>
      {rentals.map((rental, index) => (
        <div
          className="py-4 px-6 bg-white hover:bg-gray-100 rounded shadow-md w-full mb-3 flex justify-between items-center"
          key={index}
        >
          <div>{rental.brandName + ' ' + rental.modelName}</div>
          <div>{rental.colorName}</div>
          <div>{rental.firstName + ' ' + rental.lastName}</div>
          <div>{rental.amount}₺</div>
          <div className="flex gap-3 items-center">
            <div>
              <NavLink
                to={`/updateRental/${rental.carId}`}
                className="btn text-sm"
              >
                Detay
              </NavLink>
            </div>
            <button
              onClick={() => handleDeleteRental(rental.rentalId)}
              className="btn text-sm bg-red-500 text-white"
            >
              Sil
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rentals;
