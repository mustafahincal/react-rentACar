import { get, post } from "./request";
const apiUrl = "https://localhost:7067/api";
export const getCreditCards = () => get(apiUrl + "/CreditCards/getall");
export const getCreditCardById = (creditCardId) =>
  get(apiUrl + "/CreditCards/getbyid?id=" + creditCardId);
export const getCreditCardsByUserId = (userId) =>
  get(apiUrl + "/CreditCards/getbyuserid?id=" + userId);
