import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { useRentalContext } from "../../../context/RentalContext";
import { RentalSchema } from "../../../validations/rentalSchema";
import moment from "moment";
import { getRentalDetailsById } from "../../../services/rentalService";

function UpdateRental() {
  const { selectedRental, setSelectedRental } = useRentalContext();
  const { id } = useParams();

  useEffect(() => {
    getRentalDetailsById(id).then((result) =>
      setSelectedRental(result.data[0])
    );
  }, []);

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

  return (
    <div className="flex justify-between items-center p-16">
      <div className="w-1/3  mx-auto  bg-white rounded-md shadow-item ">
        <div className="w-full flex justify-between border-2 py-3 px-10 font-bold">
          <div>Araba</div>
          <div>{selectedRental.brandName + " " + selectedRental.modelName}</div>
        </div>
        <div className="w-full flex justify-between border-2 py-3 px-10 font-bold">
          <div>Renk</div>
          <div>{selectedRental.colorName}</div>
        </div>
        <div className="w-full flex justify-between border-2 py-3 px-10 font-bold">
          <div>Müşteri</div>
          <div>{selectedRental.firstName + " " + selectedRental.lastName}</div>
        </div>
        <div className="w-full flex justify-between border-2 py-3 px-10 font-bold">
          <div>Kiralama Tarihi</div>
          <div>{moment(selectedRental.rentDate).format("DD-MM-YYYY")}</div>
        </div>
        <div className="w-full flex justify-between border-2 py-3 px-10 font-bold">
          <div>Geri Dönüş Tarihi</div>
          <div>{moment(selectedRental.returnDate).format("DD-MM-YYYY")}</div>
        </div>
        <div className="w-full flex justify-between border-2 py-3 px-10 font-bold">
          <div>Ödenecek Ücret</div>
          <div>{selectedRental.amount}₺</div>
        </div>
      </div>

      <div className="w-1/2  py-10 shadow-item  bg-white">
        <div className="w-3/4 m-auto">
          <h1 className="font-extrabold text-3xl text-black mb-5 text-center">
            Kiralama Bilgilerini Güncelle
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="w-full flex  flex-col bg-darkBlue text-gray-100  px-14 py-14 text-lg">
              <span className="text-md">Kiralama Tarihi</span>
              <div>
                <input
                  value={values.rentDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="rentDate"
                  type="date"
                  className="text-darkBlue py-2 px-4 w-full"
                />
                {errors.rentDate && touched.rentDate && (
                  <div className="text-red-400 my-2 text-sm">
                    {errors.rentDate}
                  </div>
                )}
              </div>
              <div className="mt-5">
                <span className="text-md">Geri Dönüş Tarihi</span>
                <input
                  value={values.returnDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="returnDate"
                  type="date"
                  className="text-darkBlue py-2 px-4 w-full"
                />
                {errors.returnDate && touched.returnDate && (
                  <div className="text-red-400 my-2 text-sm">
                    {errors.returnDate}
                  </div>
                )}
              </div>
              <div className="mt-5">
                <span className="text-md">Ücret</span>
                <input
                  value={values.amount}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="amount"
                  type="string"
                  className="text-darkBlue py-2 px-4 w-full"
                  placeholder="Ücret"
                />
                {errors.amount && touched.amount && (
                  <div className="text-red-400 my-2 text-sm">
                    {errors.amount}
                  </div>
                )}
              </div>
            </div>
            <div className="text-right mt-5">
              <button type="submit" className="btn text-lg">
                Güncelle
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateRental;
