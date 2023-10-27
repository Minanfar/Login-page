import React from "react";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { Outlet } from "react-router-dom";

function RootElement() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootElement;
