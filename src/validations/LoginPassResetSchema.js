import Yup from "./validation";

export const LoginPassResetSchema = Yup.object().shape({
  /* email: Yup.string().required().email(),
  password: Yup.string().required(), */
});
