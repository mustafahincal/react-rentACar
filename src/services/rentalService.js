import { get, post } from "./request";
const apiUrl = "https://localhost:44322/api/Rentals/getall";
export const getRentals = () => get(apiUrl);
