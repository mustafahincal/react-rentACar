import { useEffect, useState } from "react";
import { getColors } from "../../services/colorService";
import { NavLink } from "react-router-dom";

function Color() {
  const [colors, setColors] = useState([]);
  useEffect(() => {
    getColors().then((result) => setColors(result.data));
  }, []);
  return (
    <div>
      {colors.map((color) => (
        <NavLink
          to={`/cars/color/${color.id}`}
          className="py-1 px-2 hover:bg-blue-100 rounded mt-2"
          key={color.id}
        >
          {color.name}
        </NavLink>
      ))}
    </div>
  );
}

export default Color;
