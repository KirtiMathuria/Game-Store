import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Auth } from "../context/AuthContext";
import { SearchContext } from "../context/SearchContext";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { FaGamepad } from "react-icons/fa";

const Navbar = ({ cartCount = 0 }) => {
  const { user, logout } = useContext(Auth);
  const { search, setSearch } = useContext(SearchContext);

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between gap-6">

        
          <h1 className="flex items-center text-2xl font-extrabold tracking-wide bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent cursor-pointer gap-2">
            <FaGamepad size={28} />
            <img
              src="https://gameloot.in/wp-content/uploads/2022/11/GameLoot-India.png"
              alt="GameLoot"
            />
          </h1>

          {user && (
            <div className="relative flex-1 mx-6">
              <input
                type="text"
                placeholder="Search your favorite games..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-black
                 bg-white/90 backdrop-blur-md px-5 py-2.5 pr-12
                 text-sm text-gray-700 placeholder-gray-500
                 shadow-md focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500
                 transition-all duration-300 hover:scale-105 hover:shadow-lg outline-none"
              />
              <AiOutlineSearch
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg pointer-events-none"
              />
            </div>
          )}

      
          <div className="flex items-center gap-6 text-sm font-medium">

            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative px-1 transition-all duration-300 ${
                  isActive
                    ? "text-blue-600 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-gradient-to-r after:from-blue-600 after:to-indigo-600"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/games"
              className={({ isActive }) =>
                `relative px-1 transition-all duration-300 ${
                  isActive
                    ? "text-blue-600 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-gradient-to-r after:from-blue-600 after:to-indigo-600"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              Game Galaxy
            </NavLink>

        
            {user?.role === "admin" && (
              <NavLink
                to="/add"
                className={({ isActive }) =>
                  `rounded-lg px-3 py-1.5 text-sm transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-md"
                      : "border border-green-500 text-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-500 hover:text-white"
                  }`
                }
              >
                Add Game
              </NavLink>
            )}

        
            {user && (
              <NavLink
                to="/cart"
                className="relative flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-all"
              >
                <AiOutlineShoppingCart size={20} />
                Cart
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                    {cartCount}
                  </span>
                )}
              </NavLink>
            )}

        
            {user ? (
              <button
                onClick={logout}
                className="rounded-lg border border-red-400 px-3 py-1.5 text-red-500 transition-all hover:bg-red-50 hover:scale-105 active:scale-95"
              >
                Logout
              </button>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-2 transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                        : "border border-blue-600 text-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white"
                    }`
                  }
                >
                  Login
                </NavLink>

                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-2 transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                        : "border border-indigo-600 text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white"
                    }`
                  }
                >
                  Sign Up
                </NavLink>
              </>
            )}

           
            {user && (
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md transition hover:scale-110 cursor-pointer">
                <FaGamepad size={16} />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
