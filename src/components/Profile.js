import React from "react";
import { employeeProfile } from "../resources/data";
import employeePfp from "../resources/bill-pfp.jpg";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Profile() {
  return (
    <div>
      <h1 className="py-5 text-center text-4xl font-light">
        {employeeProfile.firstname}'s Profile
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="flex flex-col space-y-3">
          <img
            src={employeePfp}
            alt={`${employeeProfile.firstname} ${employeeProfile.lastname} portrait`}
            className="w-2/3 rounded-md"
          />
          <div className="pt-3 text-3xl">
            {`${employeeProfile.firstname} ${employeeProfile.lastname}`}
          </div>
          <div>DOB: {employeeProfile.dob}</div>
          <div>
            Email:{" "}
            <a
              className="text-fedex-blue"
              href={`mailto:${employeeProfile.email}`}
            >
              {employeeProfile.email}
            </a>
          </div>
          <div>
            Phone:{" "}
            <a
              className="text-fedex-blue"
              href={`tel:${employeeProfile.phone}`}
            >
              {employeeProfile.phone}
            </a>
          </div>
          <div>Location: {employeeProfile.location}</div>
          <div className="flex space-x-5 pt-5 text-xl">
            <div className="font-bold">Punctuality</div>
            <div>{employeeProfile.punctuality}</div>
          </div>
          <div className="flex space-x-5 text-xl">
            <div className="font-bold">Attendance</div>
            <div>{employeeProfile.attendance}</div>
          </div>
        </div>
        <div>
          <div>
            <div className="mb-5 flex flex-col space-y-2">
              <div className="text-2xl">Completed Training</div>
              <div className="flex flex-col space-y-3 rounded-md bg-fedex-grey p-2">
                {employeeProfile.completedTraining.map((training) => {
                  return <div key={training}>{training}</div>;
                })}
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="text-2xl">Certifications</div>
              <div className="flex flex-col space-y-3 rounded-md bg-fedex-grey p-2">
                {employeeProfile.certifications.map((certification) => {
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
