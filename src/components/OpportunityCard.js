import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

export default function OpportunityCard(props) {
  const location = useLocation();
  const user = location.pathname.split("/").at(1);

  return (
    <div className="mx-auto rounded-md bg-fedex-grey p-5 md:w-11/12 lg:w-9/12">
      <div className="flex justify-between">
        <div className="mb-2 text-3xl font-light">
          {props.opportunity.title}
        </div>
        {user === "manager" ? (
          props.opportunity.workersClaimed.length === 0 && (
            <div className="mb-2 flex items-center space-x-1 text-sm font-bold text-fedex-red">
              <div>
                <ExclamationCircleIcon className="h-6 stroke-2" />
              </div>
              <div>UNCLAIMED</div>
            </div>
          )
        ) : (
          <Link
            to={`opportunity/${props.opportunity.id}/claim`}
            className="h-fit rounded-md border-2 border-fedex-orange bg-fedex-orange px-2 py-1 text-center font-bold text-white"
          >
            CLAIM
          </Link>
        )}
      </div>
      <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-10 md:space-y-0">
        <div className="md:w-1/2">{props.opportunity.description}</div>
        <div className="flex flex-col md:w-1/2">
          <div>{props.opportunity.date}</div>
          <div>
            {props.opportunity.startTime} - {props.opportunity.endTime}
          </div>
          <div>{props.opportunity.location}</div>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div>
          Claimed: {props.opportunity.workersClaimed.length} out of{" "}
          {props.opportunity.numWorkersNeeded}
        </div>
        <Link
          to={`opportunity/${props.opportunity.id}`}
          className="font-bold text-fedex-blue"
        >
          DETAILS
        </Link>
      </div>
    </div>
  );
}
