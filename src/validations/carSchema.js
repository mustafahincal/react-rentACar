import Yup from "./validation";

export const CarSchema = Yup.object().shape({
  brandId: Yup.number().required(),
  modelId: Yup.number().required(),
  colorId: Yup.number().required(),
  modelYear: Yup.string().required().min(4),
  dailyPrice: Yup.number().required(),
  description: Yup.string().required(),
});
