import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/**
 * For login (and other public-only pages): redirect to home if already logged in.
 */
const RedirectIfAuthenticated = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const from = (location.state as { from?: { pathname: string } })?.from?.pathname;

  if (isAuthenticated) {
    return <Navigate to={from || "/"} replace />;
  }

  return <>{children}</>;
};

export default RedirectIfAuthenticated;
