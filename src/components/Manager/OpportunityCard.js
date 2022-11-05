import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

export default function OpportunityCard(props) {
  return (
    <div className="bg-fedex-grey rounded-md p-5 w-fit">
      <div className="flex justify-between">
        <div className="font-light text-3xl mb-2">
          {props.opportunity.title}
        </div>
        {props.opportunity.workersClaimed.length === 0 && (
          <div className="text-sm text-fedex-red font-bold flex items-center space-x-1 mb-2">
            <div>
              <ExclamationCircleIcon className="h-6 stroke-2" />
            </div>
            <div className="">UNCLAIMED</div>
          </div>
        )}
      </div>
      <div className="flex mb-4 flex-col md:flex-row space-y-2 md:space-y-0">
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
        <div className="text-fedex-blue">DETAILS</div>
      </div>
    </div>
  );
}
