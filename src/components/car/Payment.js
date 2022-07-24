import React from "react";
import { useFormik } from "formik";
import { PaymentSchema } from "../../validations/paymentSchema";

function Payment() {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        surname: "",
        cardNumber: "",
        expirationDate: "",
        cvvCode: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: PaymentSchema,
    });

  return (
    <div className="w-2/3 m-auto py-10 shadow-item mt-20 bg-white">
      <form onSubmit={handleSubmit}>
        <div className="w-2/3 m-auto">
          <h1 className="font-extrabold text-3xl text-black mb-5 text-center">
            Ödeme Bilgileri
          </h1>
          <div className="w-full flex  flex-col bg-darkBlue text-gray-100  px-20 py-10">
            <div className="flex justify-between items-center">
              <div>
                <input
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="name"
                  type="text"
                  className="text-darkBlue py-2 px-4"
                  placeholder="Ad"
                />
                {errors.name && touched.name && (
                  <div className="text-red-400 my-2  text-sm">
                    {errors.name}
                  </div>
                )}
              </div>

              <div>
                <input
                  value={values.surname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="surname"
                  type="text"
                  className="text-darkBlue py-2 px-4"
                  placeholder="Soyad"
                />
                {errors.surname && touched.surname && (
                  <div className="text-red-400 my-2 text-sm">
                    {errors.surname}
                  </div>
                )}
              </div>
            </div>
            <div className="mt-5">
              <input
                value={values.cardNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                name="cardNumber"
                type="text"
                className="text-darkBlue py-2 px-4 w-full"
                placeholder="Kart Numarası"
              />
              {errors.cardNumber && touched.cardNumber && (
                <div className="text-red-400 my-2 text-sm">
                  {errors.cardNumber}
                </div>
              )}
            </div>
            <div className="flex justify-between items-center mt-5">
              <div>
                <input
                  value={values.expirationDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="expirationDate"
                  type="text"
                  className="text-darkBlue py-2 px-4 "
                  placeholder="Son Kullanım Tarihi"
                />
                {errors.expirationDate && touched.expirationDate && (
                  <div className="text-red-400 my-2 text-sm">
                    {errors.expirationDate}
                  </div>
                )}
              </div>
              <div>
                <input
                  value={values.cvvCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="cvvCode"
                  type="text"
                  className="text-darkBlue py-2 px-4 "
                  placeholder="CVV/CVC"
                />
                {errors.cvvCode && touched.cvvCode && (
                  <div className="text-red-400 my-2 text-sm">
                    {errors.cvvCode}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="mt-5 flex justify-between">
            <div className="bg-darkBlue py-2 px-4 text-white rounded text-lg">
              Tutar : 1000tl
            </div>

            <button type="submit" className="btn text-lg">
              Ödemeyi Tamamla
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Payment;
