import { get, post } from "./request";
const apiUrl = "https://localhost:7067/api";

export const getModels = () => get(apiUrl + "/models/getall");

export const getModelsByBrandId = (brandId) =>
  get(apiUrl + "/models/getmodelsbybrandid?id=" + brandId);

export const postModel = (model) => post(apiUrl + "/models/add", model);
