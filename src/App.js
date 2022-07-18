import Car from "./components/car/Car";
import Brand from "./components/brand/Brand";
import Navi from "./components/navi/Navi";
import Color from "./components/color/Color";
import Customer from "./components/customer/Customer";
import Rental from "./components/rental/Rental";

export default function App() {
  return (
    <>
      <div className="font-poppins">
        <Navi />
        <div className="grid grid-cols-10">
          <div className="col-span-2">
            <Brand />
          </div>
          <div className="col-span-8">
            <Car />
          </div>
          <Color />
          <Customer />
          <Rental />
        </div>
      </div>
    </>
  );
}
