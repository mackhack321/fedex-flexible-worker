import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";
import { opportunities } from "../../resources/data";
import OpportunityCard from "./OpportunityCard";
import { useState } from "react";

export default function Dashboard() {
  const [searchText, setSearchText] = useState("");

  function getMatchingOpportunities() {
    return opportunities.filter((opportunity) =>
      opportunity.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  return (
    <div>
      <h1 className="text-center font-light text-2xl sm:text-4xl py-5">
        Opportunities Dashboard
      </h1>
      <div className="grid place-items-center mb-9">
        <div className="bg-fedex-grey rounded-md p-1 px-3 flex space-x-3">
          <div>
            <MagnifyingGlassIcon className="h-[24px] stroke-2" />
          </div>
          <input
            type="text"
            name="search"
            id="search"
            onChange={(e) => setSearchText(e.target.value)}
            className="bg-fedex-grey w-56 px-2 placeholder:text-fedex-placeholder placeholder:font-bold"
            placeholder="Search for an opportunity"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center">
        {getMatchingOpportunities().map((opportunity) => {
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
