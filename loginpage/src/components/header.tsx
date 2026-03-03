import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

 

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth");
      localStorage.removeItem("username");
    }
    navigate("/login", { replace: true });
  };

  return (
    <div className="bg-blue-500 text-white p-4 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">
          <Link className="" to="/">
            Home
          </Link>
        </h1>
       
      </div>
      {location.pathname === "/" && (
        <button
          type="button"
          onClick={handleLogout}
          className="px-3 py-1 rounded bg-white/20 hover:bg-white/30 transition"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
