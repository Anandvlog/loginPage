import { Route, Routes } from "react-router";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import RedirectIfAuthenticated from "./components/RedirectIfAuthenticated";
import Layout from "./components/layout";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import RegistrationFormPages from "./pages/RegistrationForm";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* Public: login only; redirect to home if already logged in */}
        <Route
          path="/login"
          element={
            <RedirectIfAuthenticated>
              <LoginPage />
            </RedirectIfAuthenticated>
          }
        />

        {/* Protected: require login; use Layout (Header + Outlet) */}
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<RegistrationFormPages />} />
          </Route>
        </Route>

        <Route path="*" element={<h1>Page not found!</h1>} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
