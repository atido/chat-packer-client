import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const AuthentLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default AuthentLayout;
