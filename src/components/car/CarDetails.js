import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import defaultImage from "../../assets/default.png";
import { useCarContext } from "../../context/CarContext";
import { getCar } from "../../services/carService";

function CarDetails() {
  const apiImagesUrl = "https://localhost:44322/uploads/images/";
  const { selectedCar, setSelectedCar } = useCarContext();
  const { id } = useParams();
  useEffect(() => {
    getCar(id).then((result) => setSelectedCar(result.data[0]));
  }, []);

  return (
    <div className="p-16 flex justify-between">
      <div className="w-1/2  bg-white rounded-md shadow-item">
        <img
          src={
            selectedCar.imagePath
              ? apiImagesUrl + selectedCar.imagePath
              : defaultImage
          }
          className="object-cover object-center rounded-t-md"
          alt=""
        />
        <div className="">
          <div className="w-full flex justify-between border-2 py-3 px-20 font-bold">
            <div>Marka</div>
            <div>{selectedCar.brandName}</div>
          </div>
          <div className="w-full flex justify-between border-2 py-3 px-20 font-bold">
            <div>Model</div>
            <div>{selectedCar.modelName}</div>
          </div>
          <div className="w-full flex justify-between border-2 py-3 px-20 font-bold">
            <div>Renk</div>
            <div>{selectedCar.colorName}</div>
          </div>
          <div className="w-full flex justify-between border-2 py-3 px-20 font-bold">
            <div>Model Yılı</div>
            <div>{selectedCar.modelYear}</div>
          </div>
          <div className="w-full flex justify-between border-2 py-3 px-20 font-bold">
            <div>Kiralama Ücreti</div>
            <div>{selectedCar.dailyPrice}₺</div>
          </div>
          <div className="w-full flex justify-between border-2 py-3 px-20 font-bold">
            <div>Açıklama</div>
            <div>{selectedCar.description}</div>
          </div>
        </div>
      </div>
      <div className="w-1/2 pt-20">
        <div className="bg-white rounded-md w-1/2 m-auto p-10 flex flex-col gap-3 shadow-item">
          <NavLink to={`/rentacar/${selectedCar.carId}`} className="btn">
            Aracı Kirala
          </NavLink>
          <NavLink to={`/editacar/${selectedCar.carId}`} className="btn">
            Aracı Düzenle
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
