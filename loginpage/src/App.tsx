import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import RegistrationFormPages from "./pages/RegistrationForm";
import Layout from "./components/layout";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/registration" element={<RegistrationFormPages />} />
        <Route path="*" element={<h1>Page Not Found!</h1>} />
      </Route>
    </Routes>
  );
};

export default App;
