import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;