import { get, post } from "./request";
const apiUrl = "https://localhost:44322/api";
export const getUsers = () => get(apiUrl + "/Customers/getall");
export const getUsersById = (userId) =>
  get(apiUrl + "/Customers/getbyid?id=" + userId);
