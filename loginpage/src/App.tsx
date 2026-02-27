import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import RegistrationFormPages from "./pages/RegistrationForm";
import Layout from "./components/layout";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<RegistrationFormPages />} />
      </Route>
    </Routes>
  );
};

export default App;