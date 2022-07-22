import React, { useEffect, useState } from "react";
import {
  getCars,
  getCarsByBrand,
  getCarsByColor,
} from "../../services/carService";
import { NavLink, useParams } from "react-router-dom";
import defaultImage from "../../assets/default.png";
import { useCarContext } from "../../context/CarContext";

function Car() {
  const { cars, setCars } = useCarContext();
  const { brandId, colorId } = useParams();

  const apiImagesUrl = "https://localhost:44322/uploads/images/";

  useEffect(() => {
    if (brandId) {
      getCarsByBrand(brandId).then((result) => console.log(result.data));
    } else if (colorId) {
      getCarsByColor(colorId).then((result) => setCars(result.data));
    } else {
      getCars().then((result) => setCars(result.data));
    }
  }, [brandId, colorId]);

  return (
    <div className="bg-gray-100">
      <div className="grid grid-cols-12 gap-7">
        {cars.map((car, index) => (
          <NavLink
            key={index}
            className="bg-white h-64 rounded-xl col-span-3 shadow-md"
            to={`/cardetails/${car.carId}`}
          >
            <img
              src={car.imagePath ? apiImagesUrl + car.imagePath : defaultImage}
              className="rounded-t h-2/3 object-cover object-center w-full"
              alt=""
            />
            <div className="text-center flex flex-col justify-between h-1/3 pt-2">
              <p>{car.brandName}</p>
              <p>{car.colorName}</p>
              <p className="mt-1">{car.dailyPrice}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Car;
