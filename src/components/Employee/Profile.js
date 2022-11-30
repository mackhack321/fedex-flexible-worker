import React from "react";
import { employeeProfile } from "../../resources/data";
import employeePfp from "../../resources/bill-pfp.jpg";
import { Link, useLocation } from "react-router-dom";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function Profile() {
  const location = useLocation();
  const user = location.pathname.split("/").at(1);

  return (
    <div className="mb-5">
      <div className="flex flex-col space-y-3 py-5 md:space-y-0">
        <Link to={`/${user}`} className="w-fit">
          <div className="text-xl text-fedex-blue">
            <div className="flex flex-row space-x-2">
              <ChevronLeftIcon className="w-[22px] stroke-2" />
              <div className="font-bold">Go back</div>
            </div>
          </div>
        </Link>
        <h1 className="text-center text-4xl font-light">
          {employeeProfile.firstname}'s Profile
        </h1>
      </div>
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
        <div className="flex flex-col space-y-10">
          <Link to="claimed">
            <div className="flex space-x-2 text-fedex-blue">
              <div className="w-fit text-end text-xl font-bold">
                {employeeProfile.firstname.toUpperCase()}'S CLAIMED
                OPPORTUNITIES
              </div>
              <ChevronRightIcon className="w-[24px] stroke-2" />
            </div>
          </Link>
          <div>
            <div className="flex flex-col space-y-2">
              <div className="text-2xl">Previous Work</div>
              <div className="flex flex-col space-y-5">
                {employeeProfile.previousWork.map((job) => {
                  return (
                    <div
                      key={job.title + job.date}
                      className="flex flex-col space-y-2 rounded-md bg-fedex-grey p-2"
                    >
                      <div className="flex justify-between">
                        <div className="text-xl">{job.title}</div>
                        <div className="text-lg">{job.date}</div>
                      </div>
                      <div className="flex w-full justify-end">
                        <Link
                          to={`/${user}/opportunity/${job.id}`}
                          className="font-bold text-fedex-blue"
                        >
                          DETAILS
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
