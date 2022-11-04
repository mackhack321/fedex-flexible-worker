import React from "react";
import Navbar from "./Navbar";
import thomas from "../resources/thomas.jpg";
import { Outlet } from "react-router-dom";

export default function ManagerContainer() {
  return (
    <div>
      <Navbar name="Thomas" pfp={thomas} />
      <main className="grid place-items-center">
        <div className="w-full lg:w-2/3 3xl:w-1/3 px-10 lg:px-0">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
