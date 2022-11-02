import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Addnewuser } from "../Admin Component/Addnewuser";
import { Adminhome } from "../Admin Component/Adminhome";
import { Dashboard } from "../Admin Component/Dashboard";
import { Showuser } from "../Admin Component/Showuser";
import { Updateuser } from "../Admin Component/Updateuser";
import { LayOut } from "../component/Layout";
import { useSelector } from "react-redux";
export const Routers = () => {
  const loggedin = useSelector((state) => state.admin.getToken);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={loggedin ? <Navigate to="/admin" /> : <LayOut />}
        />
        <Route
          path="admin"
          element={loggedin ? <Dashboard /> : <Navigate to="/" />}
        >
          <Route index element={<Adminhome />} />
          <Route path="users" element={<Showuser />} />
          <Route path="adduser" element={<Addnewuser />} />
          <Route path="updateuser" element={<Updateuser />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
