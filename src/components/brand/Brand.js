import { useEffect, useState } from "react";
import { getBrands } from "../../services/brandService";

function Brand() {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    getBrands().then((result) => setBrands(result.data));
  }, []);
  return (
    <div className="bg-green-100 py-5 px-6">
      {brands.map((brand) => (
        <div
          className="py-1 px-2 hover:bg-gray-100 rounded mt-2"
          key={brand.id}
        >
          {brand.name}
        </div>
      ))}
    </div>
  );
}

export default Brand;
