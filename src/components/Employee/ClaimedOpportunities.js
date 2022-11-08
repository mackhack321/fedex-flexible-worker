import React from "react";
import { employeeProfile } from "../../resources/data";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function ClaimedOpportunities() {
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
      <div className="grid grid-cols-3">
        <div>
          <div className="pb-5 text-center text-2xl">Opportunity</div>
          <div className="flex flex-col space-y-5">
            {employeeProfile.claimedOpportunities.map((job) => {
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
                      to={`/employee/opportunity/${job.id}`}
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
        <div>
          <div className="pb-5 text-center text-2xl">Reminder Settings</div>
          <div>
            {[...Array(employeeProfile.claimedOpportunities.length)].map(
              (e, i) => (
                <div key={i}>
                  <div className="flex w-2/3 justify-between">
                    <div>
                      <div className="flex space-x-2">
                        <input type="checkbox" name="email" id="email" />
                        <label htmlFor="email">Email</label>
                      </div>
                    </div>
                    <div>
                      <div className="flex space-x-2">
                        <input type="checkbox" name="sms" id="sms" />
                        <label htmlFor="sms">SMS</label>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div>
          <div className="pb-5 text-center text-2xl">Manage</div>
        </div>
      </div>
    </div>
  );
}
