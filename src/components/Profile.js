import React from "react";
import { employeeProfile, managerProfile } from "../resources/data";
import employeePfp from "../resources/bill-pfp.jpg";
import managerPfp from "../resources/thomas-pfp.jpg";
import { Link, useLocation } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Profile() {
  const location = useLocation();
  const user = location.pathname.split("/").at(1);
  const profile = user === "employee" ? employeeProfile : managerProfile;

  return (
    <div>
      <h1 className="py-5 text-center text-4xl font-light">
        {profile.firstname}'s Profile
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
          <div className="flex space-x-5 pt-5 text-xl">
            <div className="font-bold">Punctuality</div>
            <div>{profile.punctuality}</div>
          </div>
          <div className="flex space-x-5 text-xl">
            <div className="font-bold">Attendance</div>
            <div>{profile.attendance}</div>
          </div>
        </div>
        <div>
          <div>
            <div className="mb-5 flex flex-col space-y-2">
              <div className="text-2xl">Completed Training</div>
              <div className="flex flex-col space-y-3 rounded-md bg-fedex-grey p-2">
                {profile.completedTraining.map((training) => {
                  return <div key={training}>{training}</div>;
                })}
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="text-2xl">Certifications</div>
              <div className="flex flex-col space-y-3 rounded-md bg-fedex-grey p-2">
                {profile.certifications.map((certification) => {
                  return <div key={certification}>{certification}</div>;
                })}
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link to="claimed">
            <div className="flex text-fedex-blue">
              <div className="text-lg">SEE CLAIMED OPPORTUNITIES</div>
              <ChevronRightIcon className="w-[24px] stroke-2" />
            </div>
          </Link>
          <div>previous work</div>
        </div>
      </div>
    </div>
  );
}
