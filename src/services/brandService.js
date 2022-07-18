import { get, post } from "./request";
const apiUrl = "https://localhost:44322/api/brands/getall";

export const getBrands = () => get(apiUrl);
