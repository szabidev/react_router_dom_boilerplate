import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="errorpage">
      <div className="back_btn">
        <NavLink to="/">Go Back</NavLink>
      </div>
      <div>ErrorPage</div>
    </div>
  );
};

export default ErrorPage;
