import React, { useEffect } from "react";
import { useFormik } from "formik";
import { getColors } from "../../../services/colorService";
import { useModelContext } from "../../../context/ModelContext";
import { getModels, postModel } from "../../../services/modelService";
import { useBrandContext } from "../../../context/BrandContext";
import { getBrands } from "../../../services/brandService";
import { toast } from "react-toastify";

function AddModel() {
  const { models, setModels } = useModelContext();
  const { brands, setBrands } = useBrandContext();

  useEffect(() => {
    getModels().then((result) => setModels(result.data));
    getBrands().then((result) => setBrands(result.data));
  }, []);

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        brandId: "",
        name: "",
      },
      onSubmit: (values) => {
        postModel(values)
          .then((response) => {
            if (response.success) {
              toast.success(response.message);
              getModels().then((result) => setModels(result.data));
            }
          })
          .catch((err) =>
            err.Errors.map((error) => toast.error(error.ErrorMessage))
          );
      },
    });

  return (
    <div className="flex justify-between items-center p-16">
      <div className="w-1/3  mx-auto  bg-white rounded-md shadow-item px-4 py-5">
        <div className="grid grid-cols-3 gap-3">
          {models.map((model) => (
            <div
              className="py-2 px-3 bg-gold text-black rounded text-center"
              key={model.id}
            >
              {model.name}
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/2 mx-auto  py-10 shadow-item  bg-white">
        <div className="w-3/4 m-auto">
          <h1 className="font-extrabold text-3xl text-black mb-5 text-center">
            Model Ekle
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="w-full flex  flex-col bg-darkBlue text-gray-100  px-14 py-14 text-lg">
              <div>
                <select
                  className="text-darkBlue py-2 px-3 w-full"
                  name="brandId"
                  value={values.brandId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value={0}>Marka Seçiniz</option>
                  {brands.map((brand) => (
                    <option key={brand.id} value={brand.id}>
                      {brand.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-5">
                <input
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="name"
                  type="text"
                  className="text-darkBlue py-2 px-4 w-full"
                  placeholder="Model"
                />
                {errors.name && touched.name && (
                  <div className="text-red-400 my-2 text-sm">{errors.name}</div>
                )}
              </div>
            </div>
            <div className="text-right mt-5">
              <button type="submit" className="btn text-lg">
                Ekle
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddModel;
