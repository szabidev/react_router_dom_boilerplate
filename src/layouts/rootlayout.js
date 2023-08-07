import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../breadcrumbs";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="display">Display</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </nav>
        <Breadcrumbs />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
