import Yup from "./validation";

export const UpdateCarSchema = Yup.object().shape({
  brandId: Yup.number(),
  modelId: Yup.number(),
  colorId: Yup.number(),
  modelYear: Yup.string().min(4),
  dailyPrice: Yup.number(),
  description: Yup.string(),
});
