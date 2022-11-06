import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { opportunities } from "../../resources/data";
import { Link } from "react-router-dom";

export default function ClaimConfirm() {
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
    <div className="flex flex-col space-y-5">
      <div className="mt-5 text-center text-4xl font-light">
        Are you sure you want to claim
      </div>
      <div className="flex flex-col space-y-2 text-center text-2xl">
        <div>{opportunity.title}</div>
        <div>{opportunity.location}</div>
        <div>{opportunity.date}</div>
        <div>
          {opportunity.startTime} - {opportunity.endTime}
        </div>
      </div>
      <div className="flex justify-center space-x-6 pt-10">
        <Link
          to={`/employee/opportunity/${opportunity.id}`}
          className="w-[110px] rounded-md border-2 border-fedex-orange px-2 py-1 text-center font-bold text-fedex-orange"
        >
          NO, CANCEL
        </Link>
        <Link
          to="/employee"
          state={{ unpublishedOpportunity: true }}
          className="w-[110px] rounded-md border-2 border-fedex-orange bg-fedex-orange px-2 py-1 text-center font-bold text-white"
        >
          YES, CLAIM
        </Link>
      </div>
    </div>
  );
}
