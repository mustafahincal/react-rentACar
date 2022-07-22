import { get, post } from "./request";
const apiUrl = "https://localhost:44322/api";

export const getCars = () => get(apiUrl + "/cars/getcardetails");
export const getCarsByBrand = (brandId) =>
  get(apiUrl + "/cars/getcardetailsbybrandid?brandId=" + brandId);
export const getCarsByColor = (colorId) =>
  get(apiUrl + "/cars/getcardetailsbycolorid?colorId=" + colorId);
export const getCar = (id) => get(apiUrl + "/cars/getcardetailsbyid?id=" + id);
