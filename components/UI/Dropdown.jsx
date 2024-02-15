"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdLogin, MdLogout, MdVpnKey } from "react-icons/md";
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-3  inline-flex items-center rounded-full"
      >
        <span>Profile</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
          <div className="py-1">
            <Link
              href="#"
              className=" px-4 py-2 text-gray-800 hover:bg-gray-300 flex items-center justify-between"
            >
              <MdVpnKey />
              Change Password{" "}
            </Link>
            {loggedIn ? (
              <Link
                href="#"
                className="px-4 py-2 text-gray-800 hover:bg-gray-300 flex items-center justify-between"
              >
                <MdLogout />
                Logout
              </Link>
            ) : (
              <Link
                href="#"
                className="px-4 py-2 text-gray-800 hover:bg-gray-300 flex items-center justify-between"
              >
                <MdLogin />
                Login
              </Link>
            )}
            {/* <Link
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
            >
              Logout{" "}
            </Link> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
