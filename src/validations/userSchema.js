import Yup from "./validation";

export const UserSchema = Yup.object().shape({
  name: Yup.string().required(),
  surname: Yup.string().required(),
  email: Yup.string().required().email(),
});
