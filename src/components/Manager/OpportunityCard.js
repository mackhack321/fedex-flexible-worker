import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function OpportunityCard(props) {
  return (
    <div className="w-fit rounded-md bg-fedex-grey p-5">
      <div className="flex justify-between">
        <div className="mb-2 text-3xl font-light">
          {props.opportunity.title}
        </div>
        {props.opportunity.workersClaimed.length === 0 && (
          <div className="mb-2 flex items-center space-x-1 text-sm font-bold text-fedex-red">
            <div>
              <ExclamationCircleIcon className="h-6 stroke-2" />
            </div>
            <div className="">UNCLAIMED</div>
          </div>
        )}
      </div>
      <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0">
        <div className="md:w-60">{props.opportunity.description}</div>
        <div className="flex flex-col lg:mr-16">
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
