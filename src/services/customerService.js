import { get, post } from "./request";
const apiUrl = "https://localhost:7067/api";
export const getCustomer = () => get(apiUrl + "/Customers/getall");
export const getCustomerById = (id) =>
  get(apiUrl + "/Customers/getbyid?id=" + id);

export const getCustomerByUserId = (userId) =>
  get(apiUrl + "/customers/getbyuserid?userId=" + userId);
