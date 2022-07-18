import { useEffect, useState } from "react";
import { getColors } from "../../services/colorService";

function Color() {
  const [colors, setColors] = useState([]);
  useEffect(() => {
    getColors().then((result) => setColors(result.data));
  }, []);
  return (
    <div>
      {colors.map((color) => (
        <div
          className="py-1 px-2 hover:bg-gray-100 rounded mt-2"
          key={color.id}
        >
          {color.name}
        </div>
      ))}
    </div>
  );
}

export default Color;
