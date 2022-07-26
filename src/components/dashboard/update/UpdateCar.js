import React from "react";
import { useFormik } from "formik";
import { CarSchema } from "../../../validations/carSchema";
import { useCarContext } from "../../../context/CarContext";
import defaultImage from "../../../assets/default.png";

function UpdateCar() {
  const { selectedCar } = useCarContext();
  const apiImagesUrl = "https://localhost:44322/uploads/images/";

  const handleAddImage = () => {};

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        brandId: "",
        modelId: "",
        colorId: "",
        modelYear: "",
        dailyPrice: "",
        description: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: CarSchema,
    });

  return (
    <div className="flex justify-between items-center p-16">
      <div className="w-1/3  mx-auto  bg-white rounded-md shadow-item ">
        <img
          src={
            selectedCar.imagePath
              ? apiImagesUrl + selectedCar.imagePath
              : defaultImage
          }
          className="object-cover object-center rounded-t-md"
          alt=""
        />
        <div className="">
          <div className="w-full flex justify-between border-2 py-3 px-20 font-bold">
            <div>Marka</div>
            <div>{selectedCar.brandName}</div>
          </div>
          <div className="w-full flex justify-between border-2 py-3 px-20 font-bold">
            <div>Model</div>
            <div>{selectedCar.modelName}</div>
          </div>
          <div className="w-full flex justify-between border-2 py-3 px-20 font-bold">
            <div>Renk</div>
            <div>{selectedCar.colorName}</div>
          </div>
          <div className="w-full flex justify-between border-2 py-3 px-20 font-bold">
            <div>Model Yılı</div>
            <div>{selectedCar.modelYear}</div>
          </div>
          <div className="w-full flex justify-between border-2 py-3 px-20 font-bold">
            <div>Kiralama Ücreti</div>
            <div>{selectedCar.dailyPrice}₺</div>
          </div>
          <div className="w-full flex justify-between border-2 py-3 px-20 font-bold">
            <div>Açıklama</div>
            <div>{selectedCar.description}</div>
          </div>
        </div>
      </div>

      <div className="w-1/2  py-10 shadow-item  bg-white">
        <div className="w-3/4 m-auto">
          <h1 className="font-extrabold text-3xl text-black mb-5 text-center">
            Aracı Güncelle
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="w-full flex  flex-col bg-darkBlue text-gray-100  px-14 py-14 text-lg">
              <input
                value={values.brandId}
                onChange={handleChange}
                onBlur={handleBlur}
                name="brandId"
                type="number"
                className="text-darkBlue py-2 px-4 w-full"
                placeholder="Brand ID"
              />
              {errors.brandId && touched.brandId && (
                <div className="text-red-400 my-2 text-sm">
                  {errors.brandId}
                </div>
              )}
              <input
                value={values.modelId}
                onChange={handleChange}
                onBlur={handleBlur}
                name="modelId"
                type="number"
                className="text-darkBlue py-2 px-4 w-full mt-5"
                placeholder="Model ID"
              />
              {errors.modelId && touched.modelId && (
                <div className="text-red-400 my-2 text-sm">
                  {errors.modelId}
                </div>
              )}
              <div className="mt-5">
                <input
                  value={values.colorId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="colorId"
                  type="number"
                  className="text-darkBlue py-2 px-4 w-full"
                  placeholder="Email"
                />
                {errors.colorId && touched.colorId && (
                  <div className="text-red-400 my-2 text-sm">
                    {errors.colorId}
                  </div>
                )}
              </div>
              <div className="mt-5">
                <input
                  value={values.modelYear}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="modelYear"
                  type="text"
                  className="text-darkBlue py-2 px-4 w-full"
                  placeholder="Model Yılı"
                />
                {errors.modelYear && touched.modelYear && (
                  <div className="text-red-400 my-2 text-sm">
                    {errors.modelYear}
                  </div>
                )}
              </div>
              <div className="mt-5">
                <input
                  value={values.dailyPrice}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="dailyPrice"
                  type="number"
                  className="text-darkBlue py-2 px-4 w-full"
                  placeholder="Günlük Fiyatı"
                />
                {errors.dailyPrice && touched.dailyPrice && (
                  <div className="text-red-400 my-2 text-sm">
                    {errors.dailyPrice}
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

          <div className="w-full mx-auto text-center mt-10">
            <h1 className="font-extrabold text-3xl text-black mb-5 text-center">
              Resim Ekle
            </h1>
            <div className=" bg-darkBlue text-gray-100  p-10 text-lg flex justify-center items-center">
              <input type="file" />
            </div>
            <div className="text-right mt-5">
              <button onClick={() => handleAddImage()} className="btn text-lg">
                Ekle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateCar;
