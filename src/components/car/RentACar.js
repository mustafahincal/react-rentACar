import React, { useEffect } from "react";
import { useCarContext } from "../../context/CarContext";
import defaultImage from "../../assets/default.png";
import { NavLink } from "react-router-dom";
import { RentalSchema } from "../../validations/rentalSchema";
import { useFormik } from "formik";
import { useUserContext } from "../../context/UserContext";
import { getCar } from "../../services/carService";
import { addRental } from "../../services/rentalService";
import { toast } from "react-toastify";

function RentACar() {
  const { selectedCar } = useCarContext();
  const { selectedUser } = useUserContext();

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        carId: selectedCar.carId,
        userId: selectedUser.id,
        day: "",
        amount: "",
      },
      onSubmit: (values) => {
        /* addRental(values)
          .then((response) => {
            if (response.success) {
              toast.success("Kiralama işlemi başarılı");
            }
          })
          .catch((err) =>
            err.Errors.map((error) => toast.error(error.ErrorMessage))
          ); */
        console.log(values);
      },
      validationSchema: RentalSchema,
    });

  const apiImagesUrl = "https://localhost:7067/uploads/images/";
  return (
    <div className="py-20">
      <div className="bg-white shadow-item w-10/12 m-auto px-10 py-10 flex justify-between gap-5">
        <div className="w-1/2 text-left">
          <h1 className="font-extrabold text-3xl text-black mb-5">
            Araç Bilgileri
          </h1>
          <div className="w-full flex rounded-l-md">
            <div className="w-1/2">
              <img
                src={
                  selectedCar.imagePath
                    ? apiImagesUrl + selectedCar.imagePath
                    : defaultImage
                }
                className="object-cover object-center rounded-t-md w-full"
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
          <form onSubmit={handleSubmit}>
            <div className="w-full flex  flex-col bg-darkBlue text-gray-100  px-14 py-7">
              <div className="flex justify-between items-center mt-5">
                <label htmlFor="amount" className="text-left">
                  Kiralanan Gün Sayısı
                </label>
                <input
                  value={values.day}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="day"
                  type="number"
                  id="day"
                  className="text-darkBlue py-2 px-4 w-3/5"
                />
              </div>
              <div className="flex justify-between items-center mt-5">
                <label htmlFor="amount" className="text-left">
                  Ücret
                </label>
                <input
                  value={values.amount}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="amount"
                  type="number"
                  id="amount"
                  className="text-darkBlue py-2 px-4 w-3/5"
                />
              </div>
            </div>
            <div className="text-right mt-5">
              <button type="submit" className="btn">
                Kirala
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RentACar;
