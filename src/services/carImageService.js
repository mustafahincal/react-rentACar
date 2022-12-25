import { get, post } from "./request";
const apiUrl = "https://localhost:7067/api";

export const addImage = (data) => post(apiUrl + "/CarImages/add", data);
