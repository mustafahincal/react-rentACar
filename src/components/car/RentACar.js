import React from "react";
import { useCarContext } from "../../context/CarContext";
import defaultImage from "../../assets/default.png";
import { NavLink } from "react-router-dom";
import { RentalSchema } from "../../validations/rentalSchema";
import { useFormik } from "formik";

function RentACar() {
  const { selectedCar } = useCarContext();

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        rentDate: "",
        returnDate: "",
        amount: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: RentalSchema,
    });

  const apiImagesUrl = "https://localhost:44322/uploads/images/";
  return (
    <div className="py-20">
      <div className="bg-white shadow-item w-10/12 m-auto px-10 py-10 flex justify-between gap-5">
        <div className="w-1/2 text-left">
          <h1 className="font-extrabold text-3xl text-black mb-5">
            Araç Bilgileri
          </h1>
          <div className="w-full flex rounded-md">
            <div className="w-1/2">
              <img
                src={
                  selectedCar.imagePath
                    ? apiImagesUrl + selectedCar.imagePath
                    : defaultImage
                }
                className="object-cover object-center rounded-t-md"
                alt=""
              />
            </div>
            <div className="bg-darkBlue w-1/2 px-5 py-5  text-gray-100">
              <div className="flex flex-col justify-between h-full">
                <div className="font-semibold text-lg">
                  {selectedCar.brandName + "  " + selectedCar.modelName}
                </div>
                <div>{selectedCar.modelYear}</div>
                <div>{selectedCar.colorName}</div>
                <div>{selectedCar.dailyPrice}₺</div>
                <div>{selectedCar.description}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 text-right">
          <h1 className="font-extrabold text-3xl text-black mb-5">
            Kira Bilgileri
          </h1>
          <div className="w-full flex  flex-col bg-darkBlue text-gray-100  px-20 py-7">
            <div className="flex justify-between items-center">
              <label htmlFor="rentDate" className="">
                Kiralama Tarihi
              </label>
              <input
                value={values.rentDate}
                onChange={handleChange}
                onBlur={handleBlur}
                name="rentDate"
                type="date"
                id="rentDate"
                className="text-darkBlue py-2 px-4 w-3/4"
              />
            </div>
            <div className="flex justify-between items-center mt-5">
              <label htmlFor="returnDate" className="">
                Teslim Tarihi
              </label>
              <input
                value={values.returnDate}
                onChange={handleChange}
                onBlur={handleBlur}
                name="returnDate"
                type="date"
                id="returnDate"
                className="text-darkBlue py-2 px-4 w-3/4"
              />
            </div>
          </div>
          <div className="text-right mt-5">
            <NavLink to={`/payment/${selectedCar.carId}`} className="btn">
              Kirala
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RentACar;
