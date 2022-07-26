import React, { useEffect } from "react";
import { useFormik } from "formik";
import { getColors } from "../../../services/colorService";
import { useColorContext } from "../../../context/ColorContext";

function AddColor() {
  const { colors, setColors } = useColorContext();
  useEffect(() => {
    getColors().then((result) => setColors(result.data));
  }, []);

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        color: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <div className="flex justify-between items-center p-16">
      <div className="w-1/3  mx-auto  bg-white rounded-md shadow-item px-4 py-5">
        <div className="grid grid-cols-3 gap-3">
          {colors.map((color) => (
            <div
              className="py-2 px-3 bg-gold text-black rounded text-center"
              key={color.id}
            >
              {color.name}
            </div>
          ))}
        </div>
      </div>

      <div className="w-5/12 mx-auto  py-10 shadow-item  bg-white">
        <div className="w-3/4 m-auto">
          <h1 className="font-extrabold text-3xl text-black mb-5 text-center">
            Renk Ekle
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="w-full flex  flex-col bg-darkBlue text-gray-100  px-14 py-14 text-lg">
              <input
                value={values.color}
                onChange={handleChange}
                onBlur={handleBlur}
                name="color"
                type="text"
                className="text-darkBlue py-2 px-4 w-full"
                placeholder="Renk"
              />
              {errors.color && touched.color && (
                <div className="text-red-400 my-2 text-sm">{errors.color}</div>
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

export default AddColor;
