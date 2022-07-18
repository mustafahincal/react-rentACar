import React, { useEffect, useState } from "react";
import { getCars } from "../../services/carService";

function Car() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    getCars().then((result) => setCars(result.data));
  }, []);

  return (
    <div className="bg-blue-300 pt-5">
      <table className="w-full border-collapse">
        <thead className="bg-red-300 underline">
          <tr className="">
            <th>Marka</th>
            <th>Renk</th>
            <th>Günlük Fiyatı</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, index) => (
            <tr key={index}>
              <th>{car.brandName}</th>
              <th>{car.colorName}</th>
              <th>{car.dailyPrice}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Car;
