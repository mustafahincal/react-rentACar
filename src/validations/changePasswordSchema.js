import Yup from "./validation";

export const ChangePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required(),
  newPassword: Yup.string().required().min(5),
  newPasswordConfirm: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Parolalar uyuşmuyor")
    .required(),
});
