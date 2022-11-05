import React from "react";
import { opportunities } from "../../resources/data";
import OpportunityCard from "./OpportunityCard";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-center font-light text-2xl sm:text-4xl py-5">
        Opportunities Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center">
        {opportunities.map((opportunity) => {
          return (
            <div>
              <OpportunityCard opportunity={opportunity} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
