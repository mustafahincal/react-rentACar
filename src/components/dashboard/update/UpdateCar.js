import React, { useEffect } from "react";
import { useFormik } from "formik";
import { CarSchema } from "../../../validations/carSchema";
import { toast } from "react-toastify";
import { postCar, updateCar } from "../../../services/carService";
import { useBrandContext } from "../../../context/BrandContext";
import { useColorContext } from "../../../context/ColorContext";
import { useModelContext } from "../../../context/ModelContext";
import { getBrands } from "../../../services/brandService";
import { getColors } from "../../../services/colorService";
import { getModels, getModelsByBrandId } from "../../../services/modelService";
import { useCarContext } from "../../../context/CarContext";
import defaultImage from "../../../assets/default.png";
import { UpdateCarSchema } from "../../../validations/updateCarSchema";
import { getCar } from "../../../services/carService";
import { useFileContext } from "../../../context/FileContext";
import { addImage } from "../../../services/carImageService";
import axios from "axios";
import { useParams } from "react-router-dom";

function UpdateCar() {
  const { brands, setBrands } = useBrandContext();
  const { colors, setColors } = useColorContext();
  const { models, setModels } = useModelContext();
  const { selectedBrand, setSelectedBrand } = useBrandContext();
  const { selectedCar, setSelectedCar } = useCarContext();
  const { file, setFile } = useFileContext();
  const { id } = useParams();
  const apiImagesUrl = "https://localhost:7067/uploads/images/";

  useEffect(() => {
    getCar(id).then((result) => setSelectedCar(result.data[0]));
    getBrands().then((result) => setBrands(result.data));
    getColors().then((result) => setColors(result.data));
    getModels().then((result) => setModels(result.data));
  }, []);
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        id: selectedCar.carId,
        brandId: selectedCar.brandId,
        colorId: selectedCar.colorId,
        modelId: selectedCar.modelId,
        modelYear: selectedCar.modelYear,
        description: selectedCar.description,
        dailyPrice: selectedCar.dailyPrice,
      },
      onSubmit: (values) => {
        updateCar(values)
          .then((response) => {
            if (response.success) {
              toast.success(response.message);
              getCar(selectedCar.carId).then((result) =>
                setSelectedCar(result.data[0])
              );
            }
          })
          .catch((err) =>
            err.Errors.map((error) => toast.error(error.ErrorMessage))
          );
      },
    });

  return (
    <div className="flex justify-between items-center px-16 py-8">
      <div className="w-2/5  mx-auto  bg-white rounded-md shadow-item ">
        <img
          src={selectedCar.imagePath && apiImagesUrl + selectedCar.imagePath}
          className="object-cover object-center rounded-t-md w-full"
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

      <div className="flex flex-col items-start min-h-screen w-1/2">
        <div className="w-4/5 m-auto py-10 shadow-item mt-14 bg-white">
          <div className="w-3/4 mx-auto">
            <h1 className="font-extrabold text-3xl text-black mb-5 text-center">
              Araç Güncelle
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
                  Güncelle
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateCar;
