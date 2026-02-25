import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import RegistrationFormPages from "./pages/RegistrationForm";

const App = () => {
  return (
    <>
      {/* <LoginPage /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route element={<AuthLayout />}>
        </Route> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationFormPages />} />
        <Route path="*" element={<h1>Page not found!</h1>} />
      </Routes>
    </>
  );
};

export default App;
