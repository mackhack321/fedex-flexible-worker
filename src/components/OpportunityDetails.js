import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { employeeProfile, opportunities } from "../resources/data";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import billPfp from "../resources/bill.jpg";
import defaultPfp from "../resources/defaultPfp.png";

export default function OpportunityDetails() {
  const { id } = useParams();
  const [opportunity, setOpportunity] = useState({});
  const [isClaimedByEmployee, setIsClaimedByEmployee] = useState(false);

  const location = useLocation();
  const user = location.pathname.split("/").at(1);

  useEffect(() => {
    setOpportunity(
      opportunities.find((op) => {
        return op.id === parseInt(id);
      })
    );

    setIsClaimedByEmployee(
      employeeProfile.claimedOpportunities.includes(opportunity.id)
    );
  }, [id, opportunity.id]);

  return (
    <div>
      <div className="flex flex-col space-y-3 py-5 md:space-y-0">
        <Link
          to={
            isClaimedByEmployee && user === "employee"
              ? "/employee/profile/claimed"
              : `/${user}`
          }
        >
          <div className="text-xl text-fedex-blue">
            <div className="flex flex-row space-x-2">
              <ChevronLeftIcon className="w-[22px] stroke-2" />
              <div>Go back</div>
            </div>
          </div>
        </Link>
        <h1 className="text-center text-4xl font-light">{opportunity.title}</h1>
      </div>
      <div className="mb-5 grid grid-cols-1 gap-5 md:mb-0 md:grid-cols-2 md:gap-24">
        <div>
          <div className="mb-5 flex flex-col space-y-2">
            <div className="text-2xl">Description</div>
            <div>{opportunity.description}</div>
          </div>
          <div className="mb-5 flex flex-col space-y-2">
            <a
              href={opportunity.mapUrl}
              className="text-fedex-blue"
              target={"_blank"}
              rel={"noreferrer"}
            >
              {opportunity.location}
            </a>
            <div>{opportunity.date}</div>
            <div>
              {opportunity.startTime} - {opportunity.endTime}
            </div>
            {opportunity.repeat?.length > 0 && (
              <div>Repeats every {opportunity.repeat?.join(", ")}</div>
            )}
          </div>
          <div className="mb-9 flex flex-col space-y-2">
            <div>Accepting {opportunity.numWorkersNeeded} workers</div>
          </div>
          <div className="mb-5 flex flex-col space-y-2">
            <div className="text-2xl">Claimants</div>
            {user === "manager" ? (
              <div>
                {opportunity.workersClaimed?.length === 0 ? (
                  <div>None</div>
                ) : (
                  <div className="flex flex-col space-y-5">
                    {opportunity.workersClaimed?.map((emp) => (
                      <div key={emp}>
                        <Link
                          to="/manager/profile"
                          state={{ id: opportunity.id }}
                          className="flex min-w-fit space-x-5 rounded-md bg-fedex-grey p-2 lg:w-2/3"
                        >
                          {emp === "Bill Snyder" ? (
                            <img
                              src={billPfp}
                              alt="Bill Snyder headshot"
                              className="h-[50px] w-[50px] rounded-full"
                            />
                          ) : (
                            <img
                              src={defaultPfp}
                              alt="Default headshot"
                              className="h-[50px] w-[50px] rounded-full"
                            />
                          )}
                          <div className="my-auto">{emp}</div>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div>
                {opportunity.workersClaimed?.length} out of{" "}
                {opportunity.numWorkersNeeded}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="mb-5 flex flex-col space-y-2">
            <div className="text-2xl">Required Training</div>
            <div className="flex flex-col space-y-3 rounded-md bg-fedex-grey p-2">
              {opportunity.requiredTraining?.map((training) => {
                return <div key={training}>{training}</div>;
              })}
            </div>
          </div>
          <div className="mb-5 flex flex-col space-y-2">
            <div className="text-2xl">Required Certifications</div>
            <div className="flex flex-col space-y-3 rounded-md bg-fedex-grey p-2">
              {opportunity.requiredCertifications?.map((certification) => {
                return <div key={certification}>{certification}</div>;
              })}
            </div>
          </div>
          <div className="mb-5">
            <div className="text-2xl">Supervisor: {opportunity.supervisor}</div>
          </div>
          {user === "manager" ? (
            <div className="flex justify-end space-x-6">
              <Link
                to="edit"
                className="w-[110px] rounded-md border-2 border-fedex-orange px-2 py-1 text-center font-bold text-fedex-orange"
              >
                EDIT
              </Link>
              <Link
                to="/manager"
                state={{ unpublishedOpportunity: true }}
                className="w-[110px] rounded-md border-2 border-fedex-red bg-fedex-red px-2 py-1 text-center font-bold text-white"
              >
                UNPUBLISH
              </Link>
            </div>
          ) : (
            <div className="flex justify-end">
              {!isClaimedByEmployee && (
                <Link
                  to="claim"
                  className="w-[110px] rounded-md border-2 border-fedex-orange bg-fedex-orange px-2 py-1 text-center font-bold text-white"
                >
                  CLAIM
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
