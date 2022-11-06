import { TrashIcon, CheckIcon } from "@heroicons/react/24/outline";
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
      <h1 className="py-5 text-center text-4xl font-light">Messages</h1>
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
      <div className="mb-5 flex flex-col justify-center space-y-5 pt-5">
        {(user === "employee" ? employeeMessages : managerMessages).map(
          (message) => (
            <div
              className="m-auto flex w-fit flex-row space-y-2 rounded-md bg-fedex-grey px-5 pb-3 pt-2"
              key={message.id}
            >
              <div className="flex flex-col space-y-2">
                <div className="flex flex-row justify-between">
                  <div>{message.from}</div>
                  <div>{message.date}</div>
                </div>
                <div>{message.teaser}</div>
              </div>
              <TrashIcon className="ml-3 w-12 text-fedex-red" />
            </div>
          )
        )}
      </div>
    </div>
  );
}
