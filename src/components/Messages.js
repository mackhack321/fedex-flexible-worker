import {
  TrashIcon,
  CheckIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { employeeMessages, managerMessages } from "../resources/data";

export default function Messages() {
  const [showSentConfirmation, setShowSentConfirmation] = useState(false);

  const location = useLocation();
  const user = location.pathname.split("/").at(1);

  function showConfirmation(setter) {
    setter(true);
    const timer = setTimeout(() => {
      setter(false);
      window.history.replaceState({}, document.title);
    }, 5000);

    return () => clearTimeout(timer);
  }

  useEffect(() => {
    const { sentMessage } = location.state ?? false;

    sentMessage && showConfirmation(setShowSentConfirmation);
  }, [location.state]);

  return (
    <div>
      <div className="flex flex-col space-y-3 py-5 md:space-y-0">
        <Link to={`/${user}`}>
          <div className="text-xl text-fedex-blue">
            <div className="flex flex-row space-x-2">
              <ChevronLeftIcon className="w-[22px] stroke-2" />
              <div>Go back</div>
            </div>
          </div>
        </Link>
        <h1 className="text-center text-4xl font-light">Messages</h1>
      </div>

      <div className="mb-5 flex flex-row justify-center">
        <Link
          to="new"
          className="w-fit rounded-md bg-fedex-orange py-2 px-4 text-center font-bold text-white"
        >
          NEW MESSAGE
        </Link>
      </div>
      {showSentConfirmation && (
        <div className="flex justify-center space-x-3 text-fedex-green">
          <CheckIcon className="w-[30px]" />
          <div className="text-xl">Message sent</div>
        </div>
      )}

      <div className="grid place-items-center">
        <div className="mb-5 flex flex-col justify-center space-y-5 pt-5 md:w-2/3 lg:w-1/3">
          {(user === "employee" ? employeeMessages : managerMessages).map(
            (message) => (
              <div
                className="m-auto flex w-full flex-row justify-between space-y-2 rounded-md bg-fedex-grey px-5 pb-3 pt-2"
                key={message.id}
              >
                <div className="flex w-full flex-col space-y-2">
                  <div className="flex flex-row justify-between">
                    <div className="font-bold">{message.from}</div>
                    <div>{message.date}</div>
                  </div>
                  <div>{message.teaser}</div>
                </div>
                <div className="w-fit pl-5">
                  <TrashIcon className="ml-auto w-12 text-fedex-red" />
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="text-center font-bold">End of messages</div>
    </div>
  );
}
