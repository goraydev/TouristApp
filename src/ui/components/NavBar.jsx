import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

const NavBar = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const data = JSON.parse(localStorage.getItem("data"));

  const onLogout = () => {
    logout();
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="flex items-center justify-between px-2 py-4 bg-black text-white">
      <div className="flex gap-4">
        <Link to="/">Tourist App</Link>
        <NavLink
          to="/mapa"
          className={({ isActive }) =>
            `${isActive ? "text-yellow-500" : "text-white"}`
          }
          end
        >
          Mapa estratégico
        </NavLink>
        <NavLink
          to="/balance"
          className={({ isActive }) =>
            `${isActive ? "text-yellow-500" : "text-white"}`
          }
          end
        >
          Balance Score Card
        </NavLink>
      </div>

      <div className="flex gap-4 justify-center items-center">
        <span>{data?.user}</span>
        <button
          className="bg-yellow-500 p-2 rounded-md self-center text-black hover:bg-yellow-600"
          onClick={onLogout}
        >
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
