import React from "react";
import Navbar from "../Navbar";
import thomas from "../../resources/thomas.jpg";
import { Outlet } from "react-router-dom";

export default function ManagerContainer() {
  return (
    <div>
      <Navbar name="Thomas" pfp={thomas} homepage="manager" />
      <main className="grid place-items-center">
        <div className="w-full px-10 lg:w-2/3 lg:px-0 3xl:w-1/3">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
