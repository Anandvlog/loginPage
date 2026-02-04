import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";

const App = () => {
  return (
    <>
      {/* <LoginPage /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route element={<AuthLayout />}>
        </Route> */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default App;
