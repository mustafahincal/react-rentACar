import { get, post } from "./request";
const apiUrl = "https://localhost:44322/api";
export const getRentalDetails = () => get(apiUrl + "/Rentals/getrentaldetails");
export const getRentalDetailsById = (carId) =>
  get(apiUrl + "/Rentals/getrentaldetailsbyid?id=" + carId);
