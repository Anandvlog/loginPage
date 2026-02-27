import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

/**
 * Protects routes: redirects to /login if not authenticated.
 * After login, redirects back to the intended page (or home).
 */
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const isAuthenticated =
    typeof window !== "undefined" &&
    localStorage.getItem("auth") === "true";

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? <>{children}</> : null;
};

export default ProtectedRoute;
