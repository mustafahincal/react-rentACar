import React, { useEffect } from "react";
import { useFormik } from "formik";
import { CarSchema } from "../../../validations/carSchema";
import { toast } from "react-toastify";
import { postCar } from "../../../services/carService";
import { useBrandContext } from "../../../context/BrandContext";
import { useColorContext } from "../../../context/ColorContext";
import { useModelContext } from "../../../context/ModelContext";
import { getBrands } from "../../../services/brandService";
import { getColors } from "../../../services/colorService";
import { getModels, getModelsByBrandId } from "../../../services/modelService";

function AddCar() {
  const { brands, setBrands } = useBrandContext();
  const { colors, setColors } = useColorContext();
  const { models, setModels } = useModelContext();
  const { selectedBrand, setSelectedBrand } = useBrandContext();

  useEffect(() => {
    getBrands().then((result) => setBrands(result.data));
    getColors().then((result) => setColors(result.data));
  }, []);

  useEffect(() => {
    getModelsByBrandId(selectedBrand).then((result) => setModels(result.data));
  }, [selectedBrand]);

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        brandId: 0,
        colorId: 0,
        modelId: 0,
        modelYear: "",
        description: "",
        dailyPrice: "",
      },
      onSubmit: (values) => {
        postCar(values)
          .then((response) => {
            if (response.success) {
              toast.success(response.message);
            }
          })
          .catch((err) =>
            err.Errors.map((error) => toast.error(error.ErrorMessage))
          );
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
              <select
                className="text-darkBlue py-2 px-3 w-full"
                name="brandId"
                value={values.brandId}
                onChange={handleChange}
                onBlur={handleBlur}
                onClick={() => setSelectedBrand(values.brandId)}
              >
                <option value={0}>Marka Seçiniz</option>
                {brands.map((brand) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </select>

              {errors.brandId && touched.brandId && (
                <div className="text-red-400 my-2 text-sm">
                  {errors.brandId}
                </div>
              )}
              <select
                className="text-darkBlue py-2 px-3 w-full mt-5"
                name="modelId"
                value={values.modelId}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value={0}>Model Seçiniz</option>
                {models.map((model) => (
                  <option key={model.id} value={model.id}>
                    {model.name}
                  </option>
                ))}
              </select>
              {errors.modelId && touched.modelId && (
                <div className="text-red-400 my-2 text-sm">
                  {errors.modelId}
                </div>
              )}
              <div className="mt-5">
                <select
                  className="text-darkBlue py-2 px-3 w-full"
                  name="colorId"
                  value={values.colorId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value={0}>Renk Seçiniz</option>
                  {colors.map((color) => (
                    <option key={color.id} value={color.id}>
                      {color.name}
                    </option>
                  ))}
                </select>
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
            <input
              type="file"
              className="block w-full text-sm text-slate-300
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-100 file:text-darkBlue
                    hover:file:bg-violet-300 hover:file:text-black
                    file:cursor-pointer cursor-pointer"
            />
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
