import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { opportunities } from "../../resources/data";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function OpportunityDetails() {
  const { id } = useParams();
  const [opportunity, setOpportunity] = useState({});

  useEffect(() => {
    setOpportunity(
      opportunities.find((op) => {
        return op.id === parseInt(id);
      })
    );
  }, [id]);

  return (
    <div>
      <div className="relative flex flex-row justify-center py-5">
        <Link to="/employee" className="hidden md:block">
          <div className="absolute left-0 text-xl text-fedex-blue">
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
            <div>{opportunity.location}</div>
            <div>{opportunity.date}</div>
            <div>
              {opportunity.startTime} - {opportunity.endTime}
            </div>
            <div>Repeats every {opportunity.repeat?.join(", ")}</div>
          </div>
          <div className="mb-9 flex flex-col space-y-2">
            <div>Accepting {opportunity.numWorkersNeeded} workers</div>
          </div>
          <div className="mb-5 flex flex-col space-y-2">
            <div className="text-2xl">Claimants</div>
            <div>
              {opportunity.workersClaimed?.length === 0 ? (
                <div>None</div>
              ) : (
                <div>{opportunity.workersClaimed?.join(", ")}</div>
              )}
            </div>
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
          <div className="flex justify-end">
            <Link
              to="claim"
              className="w-[110px] rounded-md border-2 border-fedex-orange bg-fedex-orange px-2 py-1 text-center font-bold text-white"
            >
              CLAIM
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
