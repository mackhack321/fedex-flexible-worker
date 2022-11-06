import React from "react";
import Navbar from "./Navbar";
import bill from "../resources/bill.jpg";
import { Outlet } from "react-router-dom";

export default function EmployeeContainer() {
  return (
    <div>
      <Navbar name="Bill" pfp={bill} homepage="employee" />
      <main className="grid place-items-center">
        <div className="w-full px-10 lg:w-2/3 lg:px-0 3xl:w-1/3">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
