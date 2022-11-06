import React from "react";
import { employeeProfile, managerProfile } from "../resources/data";
import employeePfp from "../resources/bill-pfp.jpg";
import managerPfp from "../resources/thomas-pfp.jpg";
import { useLocation } from "react-router-dom";

export default function Profile() {
  const location = useLocation();
  const user = location.pathname.split("/").at(1);
  const profile = user === "employee" ? employeeProfile : managerProfile;

  return (
    <div>
      <h1 className="py-5 text-center text-4xl font-light">
        {profile.firstname}'s Profile
      </h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <div className="flex flex-col space-y-3">
          <img
            src={user === "employee" ? employeePfp : managerPfp}
            alt={`${profile.firstname} ${profile.lastname} portrait`}
            className="w-2/3 rounded-md"
          />
          <div className="pt-3 text-3xl">
            {`${profile.firstname} ${profile.lastname}`}
          </div>
          <div>DOB: {profile.dob}</div>
          <div>
            Email:{" "}
            <a className="text-fedex-blue" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
          <div>
            Phone:{" "}
            <a className="text-fedex-blue" href={`tel:${profile.phone}`}>
              {profile.phone}
            </a>
          </div>
          <div>Location: {profile.location}</div>
          <div>Punctuality: {profile.punctuality}</div>
          <div>Attendance: {profile.attendance}</div>
        </div>
        <div>bar</div>
        <div>baz</div>
      </div>
    </div>
  );
}
