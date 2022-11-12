import React from "react";
import { employeeProfile } from "../../resources/data";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { opportunities } from "../../resources/data";

export default function ClaimedOpportunities() {
  function getJobByID(id) {
    return opportunities.find((op) => {
      return op.id === id;
    });
  }

  return (
    <div className="mb-5">
      <div className="relative flex flex-row justify-center py-5">
        <Link to="/employee" className="hidden md:block">
          <div className="absolute left-0 text-xl text-fedex-blue">
            <div className="flex flex-row space-x-2">
              <ChevronLeftIcon className="w-[22px] stroke-2" />
              <div>Go back</div>
            </div>
          </div>
        </Link>
        <h1 className="text-center text-4xl font-light">
          {employeeProfile.firstname}'s Claimed Opportunities
        </h1>
      </div>
      <div className="mb-5 hidden justify-between md:flex">
        <div className="w-1/3 text-center text-2xl">Opportunity</div>
        <div className="w-1/3 text-center text-2xl">Reminder Settings</div>
        <div className="w-1/3 text-center text-2xl">Manage</div>
      </div>
      <div className="flex flex-col space-y-10 md:space-y-5">
        {employeeProfile.claimedOpportunities.map((id) => {
          const job = getJobByID(id);
          return (
            <div
              key={job.id + job.date}
              className="flex flex-col justify-between space-y-3 md:flex-row md:space-y-0"
            >
              <div className="flex w-full flex-col space-y-2 rounded-md bg-fedex-grey p-2 md:w-1/3">
                <div className="flex justify-between">
                  <div className="text-xl">{job.title}</div>
                  <div className="text-lg">{job.date}</div>
                </div>
                <div className="flex w-full justify-end">
                  <Link
                    to={`/employee/opportunity/${job.id}`}
                    className="font-bold text-fedex-blue"
                  >
                    DETAILS
                  </Link>
                </div>
              </div>
              <div className="flex w-full items-center justify-center md:w-1/3">
                <div className="flex space-x-24">
                  <div className="flex space-x-2">
                    <input type="checkbox" name="email" id="email" />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="flex space-x-2">
                    <input type="checkbox" name="sms" id="sms" />
                    <label htmlFor="sms">SMS</label>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center justify-center pt-4 md:w-1/3 md:pt-0">
                <button className="h-fit rounded-md border-2 border-fedex-red bg-fedex-red px-4 py-2 text-center font-bold text-white">
                  UNCLAIM
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
