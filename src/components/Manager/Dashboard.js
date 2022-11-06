import { CheckIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import { opportunities } from "../../resources/data";
import OpportunityCard from "./OpportunityCard";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Dashboard() {
  const [searchText, setSearchText] = useState("");
  const [showCreateConfirmation, setShowCreateConfirmation] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const { newOpportunity } = location.state ?? false;

    if (newOpportunity) {
      setShowCreateConfirmation(true);
      const timer = setTimeout(() => {
        setShowCreateConfirmation(false);
        window.history.replaceState({}, document.title);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [location.state]);

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
        <Link
          to="create"
          className="w-fit rounded-md bg-fedex-orange px-2 py-1 text-center font-bold text-white"
        >
          CREATE
        </Link>
        <div className="flex space-x-3 rounded-md bg-fedex-grey py-1 px-3">
          <div>
            <MagnifyingGlassIcon className="h-[24px] stroke-2" />
          </div>
          <label htmlFor="search" hidden>
            Search for an opportunity
          </label>
          <input
            type="text"
            name="search"
            id="search"
            onChange={(e) => setSearchText(e.target.value)}
            className="w-56 bg-fedex-grey px-2 placeholder:font-bold placeholder:text-fedex-placeholder"
            placeholder="Search for an opportunity"
          />
        </div>
      </div>
      {showCreateConfirmation && (
        <div className="flex justify-center space-x-3 text-fedex-green">
          <CheckIcon className="w-[30px]" />
          <div className="text-xl">Opportunity published</div>
        </div>
      )}
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
