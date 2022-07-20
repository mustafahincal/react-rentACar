import { useEffect, useState } from "react";
import { getBrands } from "../../services/brandService";
import { NavLink } from "react-router-dom";

function Brand() {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    getBrands().then((result) => setBrands(result.data));
  }, []);
  return (
    <div className="bg-white  rounded-lg flex flex-col shadow-item">
      {brands.map((brand) => (
        <NavLink
          to={`/cars/category/${brand.id}`}
          className="px-2 hover:bg-gray-200 rounded py-2 border-b-2"
          key={brand.id}
        >
          {brand.name}
        </NavLink>
      ))}
    </div>
  );
}

export default Brand;
