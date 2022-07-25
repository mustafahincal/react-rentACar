import { get, post } from "./request";
const apiUrl = "https://localhost:44322/api";
export const getUsers = () => get(apiUrl + "/Users/getall");
export const getUsersById = (userId) =>
  get(apiUrl + "/Users/getbyid?id=" + userId);
