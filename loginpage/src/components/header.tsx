import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const username =
    typeof window !== "undefined" ? localStorage.getItem("username") : null;

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
        <h1 className="text-2xl font-bold">Home</h1>
        {username && (
          <p className="text-sm text-blue-100">Logged in as {username}</p>
        )}
      </div>
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