import React from "react";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

function Navi() {
  const { isAdmin } = useUserContext();

  return (
    <div>
      <nav className="flex justify-between items-center py-5 px-12 bg-darkBlue text-white font-bold">
        <NavLink to="/" className="logo  w-1/3 text-3xl">
          Logo
        </NavLink>
        <div className="menu  w-1/3 text-xl">
          <ul className="flex justify-between">
            <NavLink to="/">Anasayfa</NavLink>
            <NavLink to="/main">Arabalarımız</NavLink>
          </ul>
        </div>
        <div>
          {isAdmin && (
            <NavLink
              className="btn bg-littleDarkBlue text-white mr-5"
              to={"/dashboard"}
            >
              Dashboard
            </NavLink>
          )}
          <NavLink className="btn bg-gold text-black mr-5" to={"/login"}>
            Giriş Yap
          </NavLink>
          <NavLink className="btn bg-gold text-black" to={"/register"}>
            Kayıt Ol
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navi;
