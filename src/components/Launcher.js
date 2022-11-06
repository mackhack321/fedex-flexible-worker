import React from "react";
import { Link } from "react-router-dom";

export default function Launcher() {
  return (
    <div>
      <h1 className="py-5 text-center text-2xl font-bold">
        FedEx Flexible Worker
      </h1>
      <div className="flex justify-center space-x-10">
        <Link to="manager">
          <div className="w-fit rounded-md bg-fedex-orange p-2 font-bold text-white">
            Manager view
          </div>
        </Link>
        <Link to="employee">
          <div className="w-fit rounded-md bg-fedex-orange p-2 font-bold text-white">
            Employee view
          </div>
        </Link>
      </div>
    </div>
  );
}
