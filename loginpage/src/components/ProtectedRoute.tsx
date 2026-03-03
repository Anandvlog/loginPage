import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

 
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
