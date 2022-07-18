import { get, post } from "./request";
const apiUrl = "https://localhost:44322/api/colors/getall";
export const getColors = () => get(apiUrl);
