import React from "react";
import { useFormik } from "formik";
import { LoginPassResetSchema } from "../../validations/LoginPassResetSchema";
import { forgotPasswordLogin, login } from "../../services/authService";
import { useAuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { setToLocalStorage } from "../../services/localStorageService";
import jwtDecode from "jwt-decode";
import { setCurrentCustomer } from "../../services/customerService";
import { useUserContext } from "../../context/UserContext";
import { getUserById, setUser } from "../../services/userService";
import { useNavigate } from "react-router-dom";

function LoginPassReset() {
  const { setIsLogged, setIsAdmin, setIsEditor } = useAuthContext();
  const { setSelectedUser } = useUserContext();
  const navigate = useNavigate();

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        newPass: "",
        resetCode: "",
      },
      onSubmit: (values) => {
        forgotPasswordLogin(values).then((result) => {
          console.log(result);
          if (result.success) {
            navigate("/");
          }
        });
      },
      validationSchema: LoginPassResetSchema,
    });

  return (
    <div className="w-2/6 m-auto py-10 shadow-item mt-20 bg-white">
      <div className="w-3/4 m-auto">
        <h1 className="font-extrabold text-3xl text-black mb-5 text-center">
          Giriş Yap
        </h1>
        <div className="text-xl text-center my-2 bg-red-500 text-white py-3 px-2">
          Lütfen mailinize gönderilen şifre sıfırlama kodunu giriniz
        </div>

        <form onSubmit={handleSubmit}>
          <div className="w-full flex  flex-col bg-darkBlue text-gray-100  px-14 py-14 text-lg">
            <div>
              <input
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                name="email"
                type="text"
                className="text-darkBlue py-2 px-4 w-full"
                placeholder="Email"
              />
              {errors.email && touched.email && (
                <div className="text-red-400 my-2 text-sm">{errors.email}</div>
              )}
            </div>
            <div className="mt-5">
              <input
                value={values.newPass}
                onChange={handleChange}
                onBlur={handleBlur}
                name="newPass"
                type="password"
                className="text-darkBlue py-2 px-4 w-full"
                placeholder="Yeni Şifre"
              />
              {errors.newPass && touched.newPass && (
                <div className="text-red-400 my-2 text-sm">
                  {errors.newPass}
                </div>
              )}
            </div>
            <div className="mt-5">
              <input
                value={values.resetCode}
                onChange={handleChange}
                onBlur={handleBlur}
                name="resetCode"
                type="number"
                className="text-darkBlue py-2 px-4 w-full"
                placeholder="Sıfırlama Kodu"
              />
            </div>
          </div>
          <div className="text-right mt-5">
            <button type="submit" className="btn text-lg">
              Şifreyi Değiştir
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPassReset;
