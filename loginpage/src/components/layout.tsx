import React from "react";
import { Outlet } from "react-router";
import Header from "./header";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;