import React from "react";
import { useState, useEffect } from "react";
import {
  certifications,
  repeatDayButtons,
  trainings,
} from "../../resources/data";
import { MultiSelect } from "react-multi-select-component";
import { Link, useNavigate, useParams } from "react-router-dom";
import { opportunities } from "../../resources/data";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import moment from "moment";

export default function OpportunityEdit() {
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
  const [opportunity, setOpportunity] = useState({});
  const [isClaimed, setIsClaimed] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

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

    navigate("/manager", { state: { editedOpportunity: true } });
  }

  useEffect(() => {
    const match = opportunities.find((op) => {
      return op.id === parseInt(id);
    });

    setOpportunity(match);
    setIsClaimed(match.workersClaimed.length > 0);

    setTitle(match.title);
    setDescription(match.description);
    setLocation(match.location);
    setDate(match.date);
    setStartTime(match.startTime);
    setEndTime(match.endTime);
    setAmtWorkersNeeded(match.numWorkersNeeded);
    setSupervisor(match.supervisor);
    setRepeatDays(match.repeat);
    setSelectedTraining(
      trainings.filter((training) =>
        match.requiredTraining.includes(training.label)
      )
    );
    setSelectedCertifications(
      certifications.filter((certification) =>
        match.requiredCertifications.includes(certification.label)
      )
    );
  }, [id]);

  return (
    <div>
      <h1 className="py-5 text-center text-4xl font-light">
        Editing "{opportunity.title}"
      </h1>
      {isClaimed && (
        <div className="flex flex-col justify-center pb-5 text-fedex-red md:flex-row md:space-x-3">
          <div className="w-full md:w-fit">
            <ExclamationTriangleIcon className="mx-auto w-[30px]" />
          </div>
          <div className="text-center text-xl">
            Some fields are disabled because this opportunity has been claimed
            by {opportunity.workersClaimed.length} worker(s).
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-5 grid grid-cols-1 gap-5 md:mb-0 md:grid-cols-2 md:gap-24">
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-md bg-fedex-grey px-2 py-1 placeholder:text-sm placeholder:font-bold placeholder:text-fedex-placeholder disabled:bg-white"
                placeholder="Enter a title for the opportunity"
                disabled={isClaimed}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="h-44 w-full rounded-md bg-fedex-grey px-2 py-1 placeholder:py-1 placeholder:text-sm placeholder:font-bold placeholder:text-fedex-placeholder disabled:bg-white"
                placeholder="Enter a description for the opportunity"
                disabled={isClaimed}
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
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-md bg-fedex-grey px-2 py-1 placeholder:text-sm placeholder:font-bold placeholder:text-fedex-placeholder disabled:bg-white"
                placeholder="Enter the opportunity's location"
                disabled={isClaimed}
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
                value={new Date(date).toLocaleDateString("en-ca")}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toLocaleDateString("en-ca")}
                className="w-full rounded-md bg-fedex-grey px-2 py-1 disabled:bg-white"
                placeholder="Select a date"
                disabled={isClaimed}
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
                        : "bg-fedex-grey disabled:bg-white"
                    }`}
                    key={day.value}
                    onClick={() => handleRepeatDayClick(day.value)}
                    aria-label={day.value}
                    title={day.value}
                    type="button"
                    disabled={isClaimed}
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
                  required
                  type="time"
                  name="start-time"
                  id="start-time"
                  value={moment(startTime, ["h:ma"]).format("HH:mm")}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="w-full rounded-md bg-fedex-grey px-2 py-1 disabled:bg-white"
                  disabled={isClaimed}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="end-time" className="text-xl">
                  End Time
                </label>
                <input
                  required
                  type="time"
                  name="end-time"
                  id="end-time"
                  value={moment(endTime, ["h:ma"]).format("HH:mm")}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="w-full rounded-md bg-fedex-grey px-2 py-1 disabled:bg-white"
                  disabled={isClaimed}
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
                  disabled={isClaimed}
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
                  disabled={isClaimed}
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
                value={amtWorkersNeeded}
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
                value={supervisor}
                onChange={(e) => setSupervisor(e.target.value)}
                className="w-full rounded-md bg-fedex-grey px-2 py-1 placeholder:text-sm placeholder:font-bold placeholder:text-fedex-placeholder"
                placeholder="Enter the opportunity's supervisor"
              />
            </div>
            <div className="flex justify-end space-x-6">
              <Link
                to={`/manager/opportunity/${id}`}
                className="w-[100px] rounded-md border-2 border-fedex-orange px-2 py-1 text-center font-bold text-fedex-orange"
              >
                CANCEL
              </Link>
              <button
                type="submit"
                className="w-[100px] rounded-md border-2 border-fedex-orange bg-fedex-orange px-2 py-1 text-center font-bold text-white"
              >
                SAVE
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
