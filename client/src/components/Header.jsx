import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { tabs } from "../utils/constants";
import { MdKeyboardArrowDown } from "react-icons/md";
import LoginModal from "./LoginModal";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentUser, setCurrentUser] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSubmit = async () => {};
  return (
    <nav className="bg-gray-800 px-16 sm:px-20 py-4 fixed z-10 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-white text-xl font-bold flex items-center gap-2"
        >
          <p>
            second-<span className="text-theme-color">Hand</span>
          </p>
          <img
            src="https://cdn-icons-png.flaticon.com/128/10597/10597864.png"
            className="h-6 w-6 object-cover"
          />
        </Link>

        <form onSubmit={handleSubmit} className="border rounded-md bg-white">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 outline-none rounded-md"
            value={searchTerm}
            onChange={handleChange}
          />
          <button className="px-2 text-gray-800">
            <FaSearch />
          </button>
        </form>

        {/* Nav Links for desktop */}
        <nav className="flex gap-4 text-white">
          {tabs.map((tab, index) => (
            <NavLink
              to={tab.to}
              key={`tabs-${index}`}
              className={({ isActive }) =>
                isActive ? "underline underline-offset-4 " : null
              }
            >
              {tab.text}
            </NavLink>
          ))}
        </nav>

        {/* Login/Signup */}
        <div className="space-x-4">
          {!currentUser ? (
            <div>
              <button
                className="py-1 px-2 rounded-md bg-theme-color text-white"
                onClick={() => setIsLoginModalOpen(true)}
              >
                Login
              </button>
              <LoginModal
                isOpen={isLoginModalOpen}
                setIsOpen={setIsLoginModalOpen}
              />
            </div>
          ) : (
            <div className="flex gap-2 items-center cursor-pointer">
              <MdKeyboardArrowDown className="text-white" />
              <span className="text-white">Me</span>
              <img
                src="https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with actual user avatar URL
                alt="User Avatar"
                className="w-8 h-8 rounded-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Hamburger Menu for Mobile View */}
        <div className="lg:hidden">
          {/* You can implement your own hamburger menu icon here */}
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Hamburger menu icon */}
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
