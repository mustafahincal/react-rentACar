import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { useCreditCardContext } from "../../../context/CreditCardContext";
import { CreditCardSchema } from "../../../validations/creditCardSchema";
import { getCreditCardById } from "../../../services/creditCardService";

function UpdateCreditCard() {
  const { selectedCreditCard, setSelectedCreditCard } = useCreditCardContext();
  const { id } = useParams();

  useEffect(() => {
    getCreditCardById(id).then((result) => setSelectedCreditCard(result.data));
  }, []);

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        cardHolder: "",
        cardNumber: "",
        expirationDate: "",
        cvvCode: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: CreditCardSchema,
    });

  return (
    <div className="flex justify-between items-center p-16">
      <div className="w-1/3  mx-auto  bg-white rounded-md shadow-item ">
        <div className="w-full flex justify-between border-2 py-3 px-10 font-bold">
          <div>Kart Üzerindeki İsim</div>
          <div>{selectedCreditCard?.cardHolder}</div>
        </div>
        <div className="w-full flex justify-between border-2 py-3 px-10 font-bold">
          <div>Kart Numarası</div>
          <div>{selectedCreditCard?.cardNumber}</div>
        </div>
        <div className="w-full flex justify-between border-2 py-3 px-10 font-bold">
          <div>Son Kullanım Tarihi</div>
          <div>{selectedCreditCard?.expirationDate}</div>
        </div>
        <div className="w-full flex justify-between border-2 py-3 px-10 font-bold">
          <div>CVV/CVC</div>
          <div>{selectedCreditCard?.cvvCode}</div>
        </div>
      </div>

      <div className="w-1/2  py-10 shadow-item  bg-white">
        <div className="w-3/4 m-auto">
          <h1 className="font-extrabold text-3xl text-black mb-5 text-center">
            Kredi Kartını Güncelle
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="w-full flex  flex-col bg-darkBlue text-gray-100  px-14 py-14 text-lg">
              <input
                value={values.cardHolder}
                onChange={handleChange}
                onBlur={handleBlur}
                name="cardHolder"
                type="text"
                className="text-darkBlue py-2 px-4 w-full"
                placeholder="Kart Üzerindeki İsim"
              />
              {errors.cardHolder && touched.cardHolder && (
                <div className="text-red-400 my-2 text-sm">
                  {errors.cardHolder}
                </div>
              )}
              <input
                value={values.cardNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                name="cardNumber"
                type="text"
                className="text-darkBlue py-2 px-4 w-full mt-5"
                placeholder="Kart Numarası"
              />
              {errors.cardNumber && touched.cardNumber && (
                <div className="text-red-400 my-2 text-sm">
                  {errors.cardNumber}
                </div>
              )}
              <div className="mt-5">
                <input
                  value={values.expirationDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="expirationDate"
                  type="text"
                  className="text-darkBlue py-2 px-4 w-full"
                  placeholder="Son Kullanım Tarihi"
                />
                {errors.expirationDate && touched.expirationDate && (
                  <div className="text-red-400 my-2 text-sm">
                    {errors.expirationDate}
                  </div>
                )}
              </div>
              <div className="mt-5">
                <input
                  value={values.cvvCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="cvvCode"
                  type="text"
                  className="text-darkBlue py-2 px-4 w-full"
                  placeholder="CVV/CVC"
                />
                {errors.cvvCode && touched.cvvCode && (
                  <div className="text-red-400 my-2 text-sm">
                    {errors.cvvCode}
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

export default UpdateCreditCard;
