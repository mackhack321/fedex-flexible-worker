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
      <h1 className="py-5 text-center text-4xl font-light">
        Opportunities Dashboard
      </h1>
      <div className="mb-5 flex flex-col justify-center space-y-5 md:flex-row md:space-y-0 md:space-x-3">
        <div className="flex rounded-md bg-fedex-grey py-1 pl-3">
          <div>
            <MagnifyingGlassIcon className="h-[24px] stroke-2" />
          </div>
          <label htmlFor="search" className="hidden">
            Search for an opportunity
          </label>
          <input
            type="text"
            name="search"
            id="search"
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full bg-fedex-grey px-2 placeholder:overflow-visible placeholder:font-bold placeholder:text-fedex-placeholder"
            placeholder="Search for an opportunity"
          />
        </div>
      </div>
      <div className="mt-9 mb-5 grid grid-cols-1 place-items-center gap-5 md:grid-cols-2">
        {getMatchingOpportunities().map((opportunity) => {
          return (
            <div key={opportunity.id}>
              <OpportunityCard opportunity={opportunity} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
