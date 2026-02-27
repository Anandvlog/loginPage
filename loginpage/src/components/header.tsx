import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login", { replace: true });
  };

  return (
    <div className="bg-blue-500 text-white p-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold">Header</h1>
      <button
        type="button"
        onClick={handleLogout}
        className="px-3 py-1 rounded bg-white/20 hover:bg-white/30 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;