import React from "react";
import { useFormik } from "formik";
import { CarSchema } from "../../validations/carSchema";
import { toast } from "react-toastify";
import { postCar } from "../../services/carService";

function AddCar() {
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
        postCar(JSON.stringify(values))
          .then((response) => {
            if (response.success) {
              toast.success(response.message);
            } else {
              toast.error(response.message);
            }
          })
          .catch((err) => toast.error(err.message));
        console.log(values);
      },
      validationSchema: CarSchema,
    });

  const handleAddImage = () => {};

  return (
    <div className="flex justify-between items-start min-h-screen">
      <div className="w-2/5 m-auto py-10 shadow-item mt-14 bg-white">
        <div className="w-3/4 mx-auto">
          <h1 className="font-extrabold text-3xl text-black mb-5 text-center">
            Araç Ekle
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
                  placeholder="Color ID"
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
              <div className="mt-5">
                <input
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="description"
                  type="text"
                  className="text-darkBlue py-2 px-4 w-full"
                  placeholder="Açıklama"
                />
                {errors.description && touched.description && (
                  <div className="text-red-400 my-2 text-sm">
                    {errors.description}
                  </div>
                )}
              </div>

              <div>
                <input type="file" className="mt-5" />
              </div>
            </div>

            <div className="text-right mt-5">
              <button type="submit" className="btn text-lg">
                Aracı Ekle
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-1/3 mx-auto py-3 px-14 shadow-item mt-14 bg-white">
        <div className="mx-auto text-center py-8">
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
  );
}

export default AddCar;
