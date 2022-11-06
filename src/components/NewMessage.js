import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function NewMessage() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const location = useLocation();
  const user = location.pathname.split("/").at(1);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    console.log(to, subject, body);

    navigate(`/${user}/messages`, { state: { sentMessage: true } });
  }

  return (
    <div>
      <h1 className="py-5 text-center text-4xl font-light">New Message</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-5 flex flex-col space-y-5">
          <div className="flex flex-col space-y-2">
            <label htmlFor="to" className="text-xl">
              To
            </label>
            <input
              required
              type="text"
              name="to"
              id="to"
              onChange={(e) => setTo(e.target.value)}
              className="w-full rounded-md bg-fedex-grey px-2 py-1 placeholder:text-sm placeholder:font-bold placeholder:text-fedex-placeholder"
              placeholder="Enter message recipients"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="subject" className="text-xl">
              Subject
            </label>
            <input
              required
              type="text"
              name="subject"
              id="subject"
              onChange={(e) => setSubject(e.target.value)}
              className="w-full rounded-md bg-fedex-grey px-2 py-1 placeholder:text-sm placeholder:font-bold placeholder:text-fedex-placeholder"
              placeholder="Enter message subject"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="body" className="text-xl">
              Message Body
            </label>
            <textarea
              required
              name="body"
              id="body"
              onChange={(e) => setBody(e.target.value)}
              className="h-44 w-full rounded-md bg-fedex-grey px-2 py-1 placeholder:py-1 placeholder:text-sm placeholder:font-bold placeholder:text-fedex-placeholder"
              placeholder="Enter your message"
            />
          </div>
          <div className="flex justify-end space-x-6">
            <Link
              to={`/${user}/messages`}
              className="w-[100px] rounded-md border-2 border-fedex-orange px-2 py-1 text-center font-bold text-fedex-orange"
            >
              CANCEL
            </Link>
            <button
              type="submit"
              className="w-[100px] rounded-md border-2 border-fedex-orange bg-fedex-orange px-2 py-1 text-center font-bold text-white"
            >
              SEND
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
