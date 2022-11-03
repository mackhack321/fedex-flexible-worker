import React from "react";
import logo from "../resources/logo.png";
import thomas from "../resources/thomas.jpg";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <div className="bg-fedex-purple h-[75px] grid place-items-center">
      <div className="h-full w-full lg:w-2/3 3xl:w-1/3 px-10 lg:px-0 self-center">
        <div className="h-full flex items-center">
          <div>
            <img src={logo} alt="FedEx logo" width={88} height={25.14} />
          </div>
          <div className="text-white ml-auto mr-5 invisible md:visible">
            Hello, Thomas
          </div>
          <div>
            <EnvelopeIcon className="h-[24px] w-[24px] text-white stroke-2 mr-5" />
          </div>
          <div>
            <img
              src={thomas}
              alt="Thomas"
              className="rounded-full w-[50px] h-[50px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
