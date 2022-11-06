import React from "react";
import { Link } from "react-router-dom";

export default function OpportunityCard(props) {
  return (
    <div className="w-fit rounded-md bg-fedex-grey p-5">
      <div className="flex justify-between">
        <div className="mb-2 text-3xl font-light">
          {props.opportunity.title}
        </div>
        <Link
          to={`opportunity/${props.opportunity.id}/claim`}
          className="h-fit rounded-md border-2 border-fedex-orange bg-fedex-orange px-2 py-1 text-center font-bold text-white"
        >
          CLAIM
        </Link>
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
      <div className="flex w-full justify-end">
        <Link
          to={`opportunity/${props.opportunity.id}`}
          className="text-fedex-blue"
        >
          DETAILS
        </Link>
      </div>
    </div>
  );
}
