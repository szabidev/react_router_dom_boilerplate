import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AboutLayout = () => {
  return (
    <div>
      <div className="about__nav">
        <h2>About Stuff</h2>
        <nav className="about__nav">
          <NavLink to="aboutthis">This</NavLink>
          <NavLink to="aboutthat">That</NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default AboutLayout;
