import React from "react";
import { useState } from "react";
import {
  certifications,
  repeatDayButtons,
  trainings,
} from "../../resources/data";
import { MultiSelect } from "react-multi-select-component";
import { Link, useNavigate } from "react-router-dom";

export default function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [amtWorkersNeeded, setAmtWorkersNeeded] = useState(-1);
  const [supervisor, setSupervisor] = useState("");
  const [repeatDays, setRepeatDays] = useState([]);
  const [selectedTraining, setSelectedTraining] = useState([]);
  const [selectedCertifications, setSelectedCertifications] = useState([]);

  const navigate = useNavigate();

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

  function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      title: title,
      description: description,
      location: location,
      date: date,
      startTime: startTime,
      endTime: endTime,
      amtWorkersNeeded: amtWorkersNeeded,
      supervisor: supervisor,
    };

    navigate("/manager", { state: { newOpportunity: true, payload: payload } });
  }

  return (
    <div>
      <h1 className="py-5 text-center text-4xl font-light">
        Create an Opportunity
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-24">
          <div className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-2">
              <label htmlFor="title" className="text-xl">
                Title
              </label>
              <input
                required
                type="text"
                name="title"
                id="title"
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-md bg-fedex-grey px-2 py-1 placeholder:text-sm placeholder:font-bold placeholder:text-fedex-placeholder"
                placeholder="Enter a title for the opportunity"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="description" className="text-xl">
                Description
              </label>
              <textarea
                required
                name="description"
                id="description"
                onChange={(e) => setDescription(e.target.value)}
                className="h-44 w-full rounded-md bg-fedex-grey px-2 py-1 placeholder:py-1 placeholder:text-sm placeholder:font-bold placeholder:text-fedex-placeholder"
                placeholder="Enter a description for the opportunity"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="location" className="text-xl">
                Location
              </label>
              <input
                required
                type="text"
                name="location"
                id="location"
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-md bg-fedex-grey px-2 py-1 placeholder:text-sm placeholder:font-bold placeholder:text-fedex-placeholder"
                placeholder="Enter the opportunity's location"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="date" className="text-xl">
                Date
              </label>
              <input
                required
                type="date"
                name="date"
                id="date"
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toLocaleDateString("en-ca")}
                className="w-full rounded-md bg-fedex-grey px-2 py-1"
                placeholder="Select a date"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <div className="text-lg">Repeat</div>
              <div className="flex space-x-3">
                {repeatDayButtons.map((day) => (
                  <button
                    className={`h-[30px] w-[30px] rounded-md p-1 text-center font-bold ${
                      repeatDays.includes(day.value)
                        ? "bg-fedex-lightblue"
                        : "bg-fedex-grey"
                    }`}
                    key={day.value}
                    onClick={() => handleRepeatDayClick(day.value)}
                    aria-label={day.value}
                    title={day.value}
                    type="button"
                  >
                    {day.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-between space-x-5">
              <div className="flex w-full flex-col space-y-2">
                <label htmlFor="start-time" className="text-xl">
                  Start Time
                </label>
                <input
                  required
                  type="time"
                  name="start-time"
                  id="start-time"
                  onChange={(e) => setStartTime(e.target.value)}
                  className="w-full rounded-md bg-fedex-grey px-2 py-1"
                />
              </div>
              <div className="flex w-full flex-col space-y-2">
                <label htmlFor="end-time" className="text-xl">
                  End Time
                </label>
                <input
                  required
                  type="time"
                  name="end-time"
                  id="end-time"
                  onChange={(e) => setEndTime(e.target.value)}
                  className="w-full rounded-md bg-fedex-grey px-2 py-1"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-2">
              <div className="text-xl">Required Training</div>
              <div className="flex flex-col space-y-2">
                <MultiSelect
                  options={trainings}
                  value={selectedTraining}
                  onChange={setSelectedTraining}
                  hasSelectAll={false}
                  overrideStrings={{
                    selectSomeItems: "Select required trainings",
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="text-xl">Required Certificatons</div>
              <div className="flex flex-col space-y-2">
                <MultiSelect
                  options={certifications}
                  value={selectedCertifications}
                  onChange={setSelectedCertifications}
                  hasSelectAll={false}
                  overrideStrings={{
                    selectSomeItems: "Select required certifications",
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="workers-needed" className="text-xl">
                Amount of Workers Needed
              </label>
              <input
                type="number"
                name="workers-needed"
                id="workers-needed"
                onChange={(e) => setAmtWorkersNeeded(e.target.value)}
                min={1}
                className="w-full rounded-md bg-fedex-grey px-2 py-1 placeholder:text-sm placeholder:font-bold placeholder:text-fedex-placeholder"
                placeholder="Leave blank for no limit"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="supervisor" className="text-xl">
                Supervisor
              </label>
              <input
                required
                type="text"
                name="supervisor"
                id="supervisor"
                onChange={(e) => setSupervisor(e.target.value)}
                className="w-full rounded-md bg-fedex-grey px-2 py-1 placeholder:text-sm placeholder:font-bold placeholder:text-fedex-placeholder"
                placeholder="Enter the opportunity's supervisor"
              />
            </div>
            <div className="flex justify-end space-x-6">
              <Link
                to="/manager"
                className="w-[100px] rounded-md border-2 border-fedex-orange px-2 py-1 text-center font-bold text-fedex-orange"
              >
                CANCEL
              </Link>
              <button
                type="submit"
                className="w-[100px] rounded-md border-2 border-fedex-orange bg-fedex-orange px-2 py-1 text-center font-bold text-white"
              >
                PUBLISH
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
