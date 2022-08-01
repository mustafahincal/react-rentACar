import { get, post } from "./request";
const apiUrl = "https://localhost:44322/api";
export const getRentalDetails = () => get(apiUrl + "/Rentals/getrentaldetails");
export const getRentalDetailsById = (carId) =>
  get(apiUrl + "/Rentals/getrentaldetailsbyid?carId=" + carId);

export const getRentalDetailsByUserId = (userId) =>
  get(apiUrl + "/Rentals/getrentaldetailsbyuserid?userId=" + userId);

export const addRental = (data) => post(apiUrl + "/Rentals/add", data);
