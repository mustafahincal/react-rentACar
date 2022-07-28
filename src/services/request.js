import { getFromLocalStorage } from "./localStorageService";

function request(url, data = false, method = "GET") {
  return new Promise(async (resolve, reject) => {
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getFromLocalStorage("token"),
      },
    };

    if (data && method === "POST") {
      options.body = JSON.stringify(data);
    }
    const response = await fetch(url, options);
    const result = await response.json();
    if (response.ok) {
      resolve(result);
    } else {
      reject(result);
    }
  });
}

export const post = (url, data) => request(url, data, "POST");
export const get = (url) => request(url);
