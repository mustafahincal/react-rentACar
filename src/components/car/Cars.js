import React, { useEffect, useState } from "react";
import {
  getCars,
  getCarsByBrand,
  getCarsByColor,
} from "../../services/carService";
import { useParams } from "react-router-dom";
import defaultImage from "../../assets/default.png";

function Car() {
  const [cars, setCars] = useState([]);
  const { brandId, colorId } = useParams();
  const apiUrl = "https://localhost:44322/uploads/images/";
  useEffect(() => {
    if (brandId) {
      getCarsByBrand(brandId).then((result) => setCars(result.data));
    } else if (colorId) {
      getCarsByColor(colorId).then((result) => setCars(result.data));
    } else {
      getCars().then((result) => setCars(result.data));
    }
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="grid grid-cols-12 gap-7">
        {cars.map((car, index) => (
          <div
            key={index}
            className="bg-white h-64 rounded-xl col-span-3 shadow-md 2/3"
          >
            <img
              src={car.imagePath ? apiUrl + car.imagePath : defaultImage}
              className="rounded-t"
              alt=""
            />
            <div className="text-center flex flex-col justify-between h-1/3 pt-2">
              <p>{car.brandName}</p>
              <p>{car.colorName}</p>
              <p className="mt-2">{car.dailyPrice}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <table className="w-full border-collapse">
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
      </table> */}
    </div>
  );
}

export default Car;
