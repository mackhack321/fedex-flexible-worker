import {
  CheckIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import { opportunities } from "../resources/data";
import OpportunityCard from "./OpportunityCard";
import { useState } from "react";
import { employeeProfile } from "../resources/data";
import { Link, useLocation } from "react-router-dom";
import moment from "moment/moment";

export default function Dashboard() {
  const [searchText, setSearchText] = useState("");
  const [showCreateConfirmation, setShowCreateConfirmation] = useState(false);
  const [showEditConfirmation, setShowEditConfirmation] = useState(false);
  const [showUnpublishConfirmation, setShowUnpublishConfirmation] =
    useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filterLocation, setFilterLocation] = useState("");
  const [filterStartDate, setFilterStartDate] = useState("");
  const [filterEndDate, setFilterEndDate] = useState("");
  const [filterStartTime, setFilterStartTime] = useState("");
  const [filterEndTime, setFilterEndTime] = useState("");
  const [filterOnlyClaimed, setfilterOnlyClaimed] = useState(false);

  const location = useLocation();
  const user = location.pathname.split("/").at(1);

  const allLocations = opportunities
    .map((opportunity) => opportunity.location)
    .filter((value, index, self) => self.indexOf(value) === index);

  function showConfirmation(setter) {
    setter(true);
    const timer = setTimeout(() => {
      setter(false);
      window.history.replaceState({}, document.title);
    }, 5000);

    return () => clearTimeout(timer);
  }

  useEffect(() => {
    const { newOpportunity, editedOpportunity, unpublishedOpportunity } =
      location.state ?? false;

    newOpportunity && showConfirmation(setShowCreateConfirmation);
    editedOpportunity && showConfirmation(setShowEditConfirmation);
    unpublishedOpportunity && showConfirmation(setShowUnpublishConfirmation);
  }, [location.state]);

  function getMatchingOpportunities() {
    return opportunities.filter((opportunity) => {
      if (
        user === "employee" &&
        employeeProfile.claimedOpportunities.includes(opportunity.id)
      ) {
        return false;
      }

      if (searchText) {
        if (!opportunity.title.toLowerCase().includes(searchText.toLowerCase()))
          return false;
      }

      if (!showFilters) return true;

      if (filterLocation) {
        if (opportunity.location !== filterLocation) return false;
      }

      if (filterOnlyClaimed) {
        if (opportunity.workersClaimed.length === 0) return false;
      }

      if (filterStartDate && filterEndDate) {
        const jobDate = moment(opportunity.date, "MM/D/YYYY", true);
        const startDate = moment(filterStartDate, "YYYY-MM-DD", true);
        const endDate = moment(filterEndDate, "YYYY-MM-DD", true);

        if (!jobDate.isBetween(startDate, endDate)) return false;
      }

      if (filterStartTime && filterEndTime) {
        const jobStartTime = moment(opportunity.startTime, "h:mma");
        const startTime = moment(filterStartTime, "HH:mm");
        const endTime = moment(filterEndTime, "HH:mm");

        if (!jobStartTime.isBetween(startTime, endTime)) return false;
      }

      return true;
    });
  }

  return (
    <div>
      <h1 className="py-5 text-center text-4xl font-light">
        Opportunities Dashboard
      </h1>
      <div className="mb-5 flex flex-col justify-center space-y-5 md:flex-row md:space-y-0 md:space-x-3">
        {user === "manager" && (
          <Link
            to="create"
            className="mx-auto w-fit rounded-md bg-fedex-orange py-2 px-4 text-center font-bold text-white md:mx-0 md:px-2 md:py-1"
          >
            CREATE
          </Link>
        )}
        <div className="flex justify-between space-x-3">
          <div className="flex w-full rounded-md bg-fedex-grey py-1 pl-3">
            <div>
              <MagnifyingGlassIcon className="h-[24px] stroke-2" />
            </div>
            <label htmlFor="search" className="sr-only">
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
          <button
            aria-label="Show filters"
            className={`flex items-center rounded-md p-1 ${
              showFilters ? "bg-fedex-lightblue" : "bg-fedex-grey"
            }`}
            onClick={() => setShowFilters(!showFilters)}
          >
            <FunnelIcon className="h-[24px] stroke-2" />
          </button>
        </div>
      </div>
      {showCreateConfirmation && (
        <div className="flex justify-center space-x-3 text-fedex-green">
          <CheckIcon className="w-[30px]" />
          <div className="text-xl">Opportunity published</div>
        </div>
      )}
      {showEditConfirmation && (
        <div className="flex justify-center space-x-3 text-fedex-green">
          <CheckIcon className="w-[30px]" />
          <div className="text-xl">Opportunity saved</div>
        </div>
      )}
      {showUnpublishConfirmation && (
        <div className="flex justify-center space-x-3 text-fedex-green">
          <CheckIcon className="w-[30px]" />
          <div className="text-xl">Opportunity unpublished</div>
        </div>
      )}
      {showFilters && (
        <div className="flex flex-col justify-center space-y-5 md:flex-row md:space-y-0 md:space-x-5">
          <div className="mx-auto flex items-center space-x-2 md:mx-0">
            <label htmlFor="location">Location</label>
            <select
              name="location"
              id="location"
              defaultValue={"default"}
              className="rounded-md bg-fedex-grey px-2 py-1"
              onChange={(e) => setFilterLocation(e.target.value)}
            >
              <option value="">Select a location</option>
              {allLocations.map((loc) => (
                <option value={loc} key={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
          <div className="mx-auto flex flex-col space-y-3 md:mx-0">
            <div className="text-center font-bold">Date Range</div>
            <div className="flex items-center space-x-2 md:justify-between">
              <label htmlFor="startDate">Start Date</label>
              <input
                required
                type="date"
                name="startDate"
                id="startDate"
                onChange={(e) => setFilterStartDate(e.target.value)}
                className="rounded-md bg-fedex-grey px-2 py-1"
              />
            </div>
            <div className="flex items-center space-x-2 md:justify-between">
              <label htmlFor="startDate">End Date</label>
              <input
                required
                type="date"
                name="endDate"
                id="endDate"
                onChange={(e) => setFilterEndDate(e.target.value)}
                className="rounded-md bg-fedex-grey px-2 py-1"
              />
            </div>
          </div>
          <div className="mx-auto flex flex-col space-y-3 md:mx-0">
            <div className="text-center font-bold">Time Range</div>
            <div className="flex items-center space-x-2 md:justify-between">
              <label htmlFor="startDate">Start Time</label>
              <input
                required
                type="time"
                name="startTime"
                id="startTime"
                onChange={(e) => setFilterStartTime(e.target.value)}
                className="rounded-md bg-fedex-grey px-2 py-1"
              />
            </div>
            <div className="flex items-center space-x-2 md:justify-between">
              <label htmlFor="startDate">End Time</label>
              <input
                required
                type="time"
                name="endTime"
                id="endTime"
                onChange={(e) => setFilterEndTime(e.target.value)}
                className="rounded-md bg-fedex-grey px-2 py-1"
              />
            </div>
          </div>
          {user === "manager" && (
            <div className="mx-auto flex items-center space-x-2 md:mx-0">
              <label htmlFor="onlyClaimed" className="text-end">
                Only Show Claimed Opportunities
              </label>
              <input
                type="checkbox"
                name="onlyClaimed"
                id="onlyClaimed"
                onChange={(e) => setfilterOnlyClaimed(e.target.checked)}
              />
            </div>
          )}
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
