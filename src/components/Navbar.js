import React from "react";
import logo from "../resources/logo.png";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="grid h-[75px] place-items-center bg-fedex-purple">
      <div className="h-full w-full self-center px-10 lg:w-2/3 lg:px-0 3xl:w-1/3">
        <div className="flex h-full items-center">
          <div>
            <Link to={`/${props.homepage}`}>
              <img src={logo} alt="FedEx logo" width={88} height={25.14} />
            </Link>
          </div>
          <div className="invisible ml-auto mr-5 text-white md:visible">
            Hello, {props.name}
          </div>
          <div>
            <EnvelopeIcon className="mr-5 h-[24px] w-[24px] stroke-2 text-white" />
          </div>
          <div>
            <img
              src={props.pfp}
              alt={props.name}
              className="h-[50px] w-[50px] rounded-full"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
