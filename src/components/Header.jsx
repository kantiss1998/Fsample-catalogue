import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import HeaderLogo from "../assets/icons/logo.png";
import SearchIcon from "../assets/icons/search.svg";

const Header = ({ className }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const isMainPage = location.pathname === "/";

  const handleBackClick = () => {
    navigate(-1);
  };

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setIsSearchActive(false);
    }
  };

  return (
    <header
      className={`bg-fa_white rounded-3xl flex justify-between items-center p-[28px] lg:p-8 ${className}`}
    >
      <div className="w-[40%] justify-start items-center gap-x-10 hidden sm:flex">
        {!isMainPage && (
          <button
            onClick={handleBackClick}
            className="font-semibold text-base text-gray_dark"
          >
            ← Back
          </button>
        )}
      </div>
      <div className="sm:w-[20%] flex justify-center items-center">
        <img
          className="cursor-pointer w-[80px] h-[auto] sm:w-[128px] sm:h-[32px]"
          src={HeaderLogo}
          alt="Kicks - Ecommerce store"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div className="w-[40%] flex justify-end items-center gap-x-[28px] sm:gap-x-[20px] md:gap-x-[28px] lg:gap-x-10">
        {isSearchActive ? (
          <form onSubmit={handleSearchSubmit} className="flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:bg-[rgb(231,231,227)]"
            />
            <button
              type="submit"
              className="bg-[rgb(231,231,227)] text-gray_dark px-4 py-2 rounded-r-md hover:bg-yellow-600 transition duration-300"
            >
              Search
            </button>
          </form>
        ) : (
          <button onClick={toggleSearch}>
            <img
              className="cursor-pointer w-[22px] h-[22px] md:w-[28px] md:h-[28px]"
              src={SearchIcon}
              alt="Search your fav shoe now!"
            />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;