import { get, post } from "./request";
const apiUrl = "https://localhost:44322/api";
export const getCreditCards = () => get(apiUrl + "/CreditCards/getall");
export const getCreditCardsById = (creditCardId) =>
  get(apiUrl + "/CreditCards/getbyid?id=" + creditCardId);
export const getCreditCardsByUserId = (userId) =>
  get(apiUrl + "/CreditCards/getbyuserid?id=" + userId);
