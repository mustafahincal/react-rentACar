import React, { useEffect } from "react";
import { useFormik } from "formik";
import { getCreditCardById } from "../../../services/creditCardService";
import { useBrandContext } from "../../../context/BrandContext";
import { getBrands } from "../../../services/brandService";

function AddBrand() {
  const { brands, setBrands } = useBrandContext();
  useEffect(() => {
    getBrands().then((result) => setBrands(result.data));
  }, []);

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        brand: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <div className="flex justify-between items-center p-16">
      <div className="w-1/3  mx-auto  bg-white rounded-md shadow-item px-4 py-5">
        <div className="grid grid-cols-3 gap-3">
          {brands.map((brand) => (
            <div
              className="py-2 px-3 bg-gold text-black rounded text-center"
              key={brand.id}
            >
              {brand.name}
            </div>
          ))}
        </div>
      </div>

      <div className="w-5/12 mx-auto  py-10 shadow-item  bg-white">
        <div className="w-3/4 m-auto">
          <h1 className="font-extrabold text-3xl text-black mb-5 text-center">
            Marka Ekle
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="w-full flex  flex-col bg-darkBlue text-gray-100  px-14 py-14 text-lg">
              <input
                value={values.brand}
                onChange={handleChange}
                onBlur={handleBlur}
                name="brand"
                type="text"
                className="text-darkBlue py-2 px-4 w-full"
                placeholder="Marka"
              />
              {errors.brand && touched.brand && (
                <div className="text-red-400 my-2 text-sm">{errors.brand}</div>
              )}
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

export default AddBrand;
