import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div className=" left-0 w-full flex items-center justify-between p-2 bg-[rgba(5,33,40,255)]">
      {/* LEFT */}
      <div className="items-center ml-4">
        <Link to="/">
          <img src="Logo.jpg" className="h-20 w-30 rounded-xl" alt="Logo" />
        </Link>
      </div>
      <div className="cursor-pointer md:hidden" onClick={() => setOpen(!open)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mb-1 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      {/* RIGHT */}
      {/* Desktop  */}
      <div className="items-center text-[rgba(51,158,173,255)] text-2xl font-montserrat font-weight-80 space-x-10 hidden md:flex mr-4">
        <Link
          to=""
          onClick={handleLinkClick}
          className="flex items-center hover:text-white hover:duration-500"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" className="mr-2">
            <path
              className="flex"
              fill="currentColor"
              d="M12 1L1 10v13a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10L12 1zm-2 18V9h4v10h-4z"
            />
          </svg>

          <span className="">Home</span>
        </Link>

        <Link
          to="/Products"
          onClick={handleLinkClick}
          className="flex items-center hover:text-white hover:duration-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="mr-2"
          >
            <path
              fill="currentColor"
              d="M19 3h-4.18a2 2 0 0 0-1.65.85l-1.3 1.95a1 1 0 0 1-1.6 0l-1.3-1.95A2 2 0 0 0 9.18 3H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-3.76 10.65a1 1 0 1 1-1.41 1.41l-2.5-2.5a1 1 0 0 1 0-1.41l2.5-2.5a1 1 0 1 1 1.41 1.41L13.42 10H17a1 1 0 0 1 0 2h-3.58l1.24 1.65z"
            />
          </svg>

          <span className="">Products</span>
        </Link>
        <Link
          to="/Form"
          onClick={handleLinkClick}
          className="flex items-center hover:text-white hover:duration-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="mr-2"
          >
            <path
              fill="currentColor"
              d="M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-9 14H4v-2h8v2zm5-4H4v-2h13v2zm0-4H4V8h13v2z"
            />
          </svg>

          <span className="">Quote</span>
        </Link>
        <Link
          to="/Cart"
          onClick={handleLinkClick}
          className="flex items-center hover:text-white hover:duration-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="mr-2"
          >
            <path
              fill="currentColor"
              d="M19 3h-4.18a2 2 0 0 0-1.65.85l-1.3 1.95a1 1 0 0 1-1.6 0l-1.3-1.95A2 2 0 0 0 9.18 3H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-4.5 12.5a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1zm-8-12.5h6.18l.82 1.22H6.68L6.5 4z"
            />
          </svg>

          <span className="">Cart</span>
        </Link>
      </div>

      {/* Mobile */}
      <div
        className={`items-center text-[rgba(51,158,173,255)] z-10 bg-slate-100 space-y-24 text-2xl font-weight-80 flex md:hidden flex-col absolute left-0 top-20 h-screen w-3/5 pt-36 shadow-2xl transition-transform duration-300 ease-in-out ${
          open ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <Link
          to=""
          onClick={handleLinkClick}
          className="flex items-center hover:text-white hover:duration-500"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" className="mr-2">
            <path
              className="flex"
              fill="currentColor"
              d="M12 1L1 10v13a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10L12 1zm-2 18V9h4v10h-4z"
            />
          </svg>

          <span className="">Home</span>
        </Link>
        <Link
          to="/Products"
          onClick={handleLinkClick}
          className="flex items-center hover:text-white hover:duration-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="mr-2"
          >
            <path
              fill="currentColor"
              d="M20.75 6h-3.22l.3-1.54a1 1 0 0 0-.63-1.12L15.5 3H8.5l-.7.34a1 1 0 0 0-.63 1.12L7.47 6H4.25A1.25 1.25 0 0 0 3 7.25v9.5A1.25 1.25 0 0 0 4.25 18h16.5A1.25 1.25 0 0 0 22 16.75v-9.5A1.25 1.25 0 0 0 20.75 6zM12 17a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm-7-5.5V7.25h2.25v4.25H5zm0 5.5v-2.25h2.25v2.25H5zm3.25-5.5V7.25h2.25v4.25h-2.25zm0 5.5v-2.25h2.25v2.25h-2.25zm3.25-5.5V7.25h2.25v4.25h-2.25zm0 5.5v-2.25h2.25v2.25h-2.25zm3.25-5.5V7.25h2.25v4.25h-2.25zm0 5.5v-2.25h2.25v2.25h-2.25z"
            />
          </svg>

          <span className="">Products</span>
        </Link>
        <Link
          to="/Form"
          onClick={handleLinkClick}
          className="flex items-center hover:text-white hover:duration-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="mr-2"
          >
            <path
              fill="currentColor"
              d="M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-9 14H4v-2h8v2zm5-4H4v-2h13v2zm0-4H4V8h13v2z"
            />
          </svg>

          <span className="">Quote</span>
        </Link>
        <Link
          to="/Cart"
          onClick={handleLinkClick}
          className="flex items-center hover:text-white hover:duration-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="mr-2"
          >
            <path
              fill="currentColor"
              d="M19 3h-4.18a2 2 0 0 0-1.65.85l-1.3 1.95a1 1 0 0 1-1.6 0l-1.3-1.95A2 2 0 0 0 9.18 3H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-4.5 12.5a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1zm-8-12.5h6.18l.82 1.22H6.68L6.5 4z"
            />
          </svg>

          <span className="">Cart</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
