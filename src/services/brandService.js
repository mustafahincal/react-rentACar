import { get, getByAxios, post } from "./request";
const apiUrl = "https://localhost:7067/api";
export const getBrands = () => get(apiUrl + "/brands/getall");

export const postBrand = (brand) => post(apiUrl + "/brands/add", brand);
