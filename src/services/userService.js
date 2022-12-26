import { useUserContext } from "../context/UserContext";
import { get, post } from "./request";
const apiUrl = "https://localhost:7067/api";

export const getUsers = () => get(apiUrl + "/Users/getall");
export const getUserById = (userId) =>
  get(apiUrl + "/Users/getbyid?id=" + userId);

export const deleteUserById = (data) => post(apiUrl + "/Users/delete", data);

export const updateUser = (data) => post(apiUrl + "/users/update", data);
