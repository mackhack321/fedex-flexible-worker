import React from "react";
import { useState } from "react";
import { repeatDayButtons } from "../../resources/data";

export default function Create() {
  const [repeatDays, setRepeatDays] = useState([]);

  function handleRepeatDayClick(value) {
    if (!repeatDays.includes(value)) {
      setRepeatDays([...repeatDays, value]);
    } else {
      setRepeatDays(
        repeatDays.filter((day) => {
          return day !== value;
        })
      );
    }
  }

  return (
    <div>
      <h1 className="text-center font-light text-2xl sm:text-4xl py-5">
        Create an Opportunity
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-24">
        <div className="flex flex-col space-y-5">
          <div className="flex flex-col space-y-2">
            <label htmlFor="title" className="text-xl">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="rounded-md bg-fedex-grey w-full px-2 py-1 placeholder:text-sm placeholder:text-fedex-placeholder placeholder:font-bold"
              placeholder="Enter a title for the opportunity"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="description" className="text-xl">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              className="rounded-md bg-fedex-grey w-full h-44 px-2 py-1 placeholder:text-sm placeholder:py-1 placeholder:text-fedex-placeholder placeholder:font-bold"
              placeholder="Enter a description for the opportunity"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="location" className="text-xl">
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              className="rounded-md bg-fedex-grey w-full px-2 py-1 placeholder:text-sm placeholder:text-fedex-placeholder placeholder:font-bold"
              placeholder="Enter the opportunity's location"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="date" className="text-xl">
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              min={new Date().toLocaleDateString("en-ca")}
              className="rounded-md bg-fedex-grey w-full px-2 py-1"
              placeholder="Select a date"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <div className="text-lg">Repeat</div>
            <div className="flex space-x-3">
              {repeatDayButtons.map((day) => (
                <button
                  className={`p-1 rounded-md text-center h-[30px] w-[30px] font-bold ${
                    repeatDays.includes(day.value)
                      ? "bg-fedex-lightblue"
                      : "bg-fedex-grey"
                  }`}
                  key={day.value}
                  onClick={() => handleRepeatDayClick(day.value)}
                  aria-label={day.value}
                  title={day.value}
                >
                  {day.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex space-x-5">
            <div className="flex flex-col space-y-2">
              <label htmlFor="start-time" className="text-xl">
                Start Time
              </label>
              <input
                type="time"
                name="start-time"
                id="start-time"
                className="rounded-md bg-fedex-grey w-full px-2 py-1"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="end-time" className="text-xl">
                End Time
              </label>
              <input
                type="time"
                name="end-time"
                id="end-time"
                className="rounded-md bg-fedex-grey w-full px-2 py-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
