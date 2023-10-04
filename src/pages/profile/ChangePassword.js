import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useUserContext } from "../../context/UserContext";
import { changePassword } from "../../services/authService";
import { ChangePasswordSchema } from "../../validations/changePasswordSchema";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const { selectedUser, setSelectedUser } = useUserContext();
  const navigate = useNavigate();
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        oldPassword: "",
        newPassword: "",
        newPasswordConfirm: "",
      },
      onSubmit: (values) => {
        changePassword({
          oldPass: values.oldPassword,
          newPass: values.newPassword,
          userEmail: selectedUser.email,
        })
          .then((result) => {
            toast.success(result.message);
            navigate("/profile");
          })
          .catch((err) => toast.error(err.response.data.message));
      },
      validationSchema: ChangePasswordSchema,
    });

  return (
    <div className="w-1/2  py-10 shadow-item  bg-white mx-auto mt-14">
      <div className="w-3/4 m-auto">
        <h1 className="font-extrabold text-3xl text-black mb-5 text-center">
          Şifre Değiştir
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="w-full flex  flex-col bg-darkBlue text-gray-100  px-14 py-14 text-lg">
            <input
              value={values.oldPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              name="oldPassword"
              type="password"
              className="text-darkBlue py-2 px-4 w-full"
              placeholder="Eski Şifrenizi Giriniz"
            />
            {errors.oldPassword && touched.oldPassword && (
              <div className="text-red-400 my-2 text-sm">
                {errors.oldPassword}
              </div>
            )}
            <input
              value={values.newPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              name="newPassword"
              type="password"
              className="text-darkBlue py-2 px-4 w-full mt-5"
              placeholder="Yeni Şifreniz"
            />
            {errors.newPassword && touched.newPassword && (
              <div className="text-red-400 my-2 text-sm">
                {errors.newPassword}
              </div>
            )}
            <div className="mt-5">
              <input
                value={values.newPasswordConfirm}
                onChange={handleChange}
                onBlur={handleBlur}
                name="newPasswordConfirm"
                type="password"
                className="text-darkBlue py-2 px-4 w-full"
                placeholder="Yeni Şifrenizi Tekrar Giriniz"
              />
              {errors.newPasswordConfirm && touched.newPasswordConfirm && (
                <div className="text-red-400 my-2 text-sm">
                  {errors.newPasswordConfirm}
                </div>
              )}
            </div>
          </div>
          <div className="text-right mt-5">
            <button type="submit" className="btn text-lg">
              Değiştir
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
