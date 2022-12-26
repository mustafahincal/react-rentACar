import { get, post } from "./request";
const apiUrl = "https://localhost:7067/api";

export const login = (loginDto) => post(apiUrl + "/auth/login", loginDto);

export const register = (registerDto) =>
  post(apiUrl + "/auth/register", registerDto);

export const registerOfficial = (registerDto) =>
  post(apiUrl + "/auth/register", registerDto);

export const changePassword = (data) =>
  post(apiUrl + "/auth/changepassword", data);
