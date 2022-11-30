import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="grid place-items-center">
      <h1 className="py-5 text-3xl">oops, page not found D:</h1>
      <Link to="/" className="text-2xl font-bold text-fedex-blue">
        start over
      </Link>
    </div>
  );
}
