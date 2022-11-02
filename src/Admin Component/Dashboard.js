import React from "react";
import { Outlet } from "react-router-dom";
import { Adminnavbar } from "./Adminavbar";
export const Dashboard = () => {
  return (
    <>
      <div>
        <Adminnavbar />
        <Outlet />
      </div>
    </>
  );
};
