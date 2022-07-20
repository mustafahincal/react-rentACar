import { get, post } from "./request";
const apiUrl = "https://localhost:44322/api";

export const getCars = () => get(apiUrl + "/cars/getcardetails");
export const getCarsByBrand = (brandId) =>
  get(apiUrl + "/cars/getcarsbybrandid?id=" + brandId);
export const getCarsByColor = (colorId) =>
  get(apiUrl + "/cars/getcarsbybrandid?id=" + colorId);
export const getCar = (id) => get(apiUrl + "/cars/getbyid?id=" + id);
