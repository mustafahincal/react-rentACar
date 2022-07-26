import Yup from "./validation";

export const RentalSchema = Yup.object().shape({
  carId: Yup.number().required(),
  customerId: Yup.number().required(),
  rentDate: Yup.date().required(),
  returnDate: Yup.date().required(),
  amount: Yup.string().required(),
});
