import Yup from "./validation";

export const CreditCardSchema = Yup.object().shape({
  cardHolder: Yup.string().required(),
  cardNumber: Yup.string().required(),
  expirationDate: Yup.string().required(),
  cvvCode: Yup.string().required(),
});
