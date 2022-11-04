import React from "react";
import { Link } from "react-router-dom";

export default function Launcher() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center py-5">
        FedEx Flexible Worker
      </h1>
      <div className="flex space-x-10 justify-center">
        <Link to="manager">
          <div className="bg-fedex-orange text-white w-fit rounded-md p-2 font-bold">
            Manager view
          </div>
        </Link>
        <Link to="employee">
          <div className="bg-fedex-orange text-white w-fit rounded-md p-2 font-bold">
            Employee view
          </div>
        </Link>
      </div>
    </div>
  );
}
