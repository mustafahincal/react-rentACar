import { useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import defaultImage from "../../assets/default.png";
import { useAuthContext } from "../../context/AuthContext";
import { useCarContext } from "../../context/CarContext";
import { deleteCar, getCar } from "../../services/carService";

function CarDetails() {
  const apiImagesUrl = "https://localhost:7067/uploads/images/";
  const { selectedCar, setSelectedCar } = useCarContext();
  const { isAdmin, isEditor } = useAuthContext();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getCar(id).then((result) => setSelectedCar(result.data[0]));
  }, []);

  const handleDeleteCarButton = (carId) => {
    deleteCar({ carId }).then((result) => {
      toast.success(result.message);
      navigate("/");
    });
  };

  return (
    <div className="p-16 flex justify-between">
      <div className="w-2/5 mb-16  bg-white rounded-md shadow-item mx-auto">
        <img
          src={selectedCar.imagePath && apiImagesUrl + selectedCar.imagePath}
          className="object-cover object-center rounded-t-md w-full"
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
        <div className="bg-white rounded-md w-1/2 m-auto p-10 flex flex-col gap-3 shadow-item text-center">
          {!(isAdmin || isEditor) && (
            <NavLink
              to={`/rentacar/${selectedCar.carId}`}
              className="btn  py-3"
            >
              Aracı Kirala
            </NavLink>
          )}
          {(isAdmin || isEditor) && (
            <NavLink
              to={`/updateCar/${selectedCar.carId}`}
              className="btn bg-littleDarkBlue font-bold py-3"
            >
              Aracı Güncelle
            </NavLink>
          )}
          {(isAdmin || isEditor) && (
            <button
              onClick={() => handleDeleteCarButton(selectedCar.carId)}
              className="btn bg-red-500 font-bold py-3"
            >
              Aracı Sil
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
