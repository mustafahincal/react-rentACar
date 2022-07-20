import { useEffect, useState, useParams } from "react";
import { getCar } from "../../services/carService";

function CarDetails() {
  const [car, setCar] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getCar(id).then((result) => setCar(result.data));
  }, []);
  return <div>CarDetail Page</div>;
}

export default CarDetails;

// İÇİNDE RESİM URL'Sİ İÇEREN BİR DTO OLUŞTURULACAK, CARIMAGE SERVİSE SADECE İMAGE KAYDEDERKEN İHTİYACIM OLUR
