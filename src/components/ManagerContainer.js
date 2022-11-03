import React from "react";
import Navbar from "./Navbar";
import thomas from "../resources/thomas.jpg";
import { Router } from "@reach/router";
import Dashboard from "./Manager/Dashboard";

export default function ManagerContainer() {
  return (
    <div>
      <Navbar name="Thomas" pfp={thomas} />
      <main className="grid place-items-center">
        <div className="w-full lg:w-2/3 3xl:w-1/3 px-10 lg:px-0">
          <Router>
            <Dashboard path="/" />
          </Router>
        </div>
      </main>
    </div>
  );
}
