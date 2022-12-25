import { get, post } from "./request";
const apiUrl = "https://localhost:7067/api";

export const getCars = () => get(apiUrl + "/cars/getcardetails");
export const getCarsByBrand = (brandId) =>
  get(apiUrl + "/cars/getcardetailsbybrandid?brandId=" + brandId);
export const getCarsByColor = (colorId) =>
  get(apiUrl + "/cars/getcardetailsbycolorid?colorId=" + colorId);
export const getCar = (id) => get(apiUrl + "/cars/getcardetailsbyid?id=" + id);

export const getCarsByBrandAndByColor = async (brandId, colorId) => {
  let cars;
  await get(apiUrl + "/cars/getcardetails").then(
    (result) => (cars = result.data)
  );
  let filteredCars = cars.filter(
    (car) => car.brandId == brandId && car.colorId == colorId
  );
  return filteredCars;
};

export const addCar = (data) => post(apiUrl + "/cars/add", data);
export const updateCar = (data) => post(apiUrl + "/cars/update", data);
export const deleteCar = (data) => post(apiUrl + "/cars/delete", data);
