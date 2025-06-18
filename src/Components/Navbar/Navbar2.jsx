import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

const links = [
  { label: "Home", path: "/" },
  { label: "Top Rated", path: "/topRated" },
  { label: "Kids Wear", path: "/kids" },
  { label: "Mens Wear", path: "/mens" },
  { label: "Electronics", path: "/electronics" },
  {
    label: "Trending Products",
    path: "/trending",
    subMenu: [
      { label: "Flash Sales", path: "/trending/flash-sales" },
      { label: "New Launches", path: "/trending/new-launches" },
      { label: "Best Deals", path: "/trending/best-deals" },
      { label: "Editor's Picks", path: "/trending/editors-picks" },
    ],
  },
];

const Navbar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <section className="w-full bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between md:justify-center">
        {/* Mobile: Show "Menu" Text */}
        <div className="text-xl font-bold text-[#fb9e12] md:hidden">Menu</div>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl text-[#fb9e12]">
            {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-base font-semibold text-[#fb9e12] items-center">
          {links.map((link, i) =>
            link.subMenu ? (
              <li key={i} className="group relative cursor-pointer">
                <div className="flex items-center gap-1">
                  <span>{link.label}</span>
                  <IoIosArrowDown className="mt-[2px]" />
                </div>
                {/* Desktop Dropdown */}
                <ul className="absolute top-8 left-0 bg-white dark:bg-gray-800 shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-[12rem]">
                  {link.subMenu.map((sub, idx) => (
                    <li key={idx}>
                      <NavLink
                        to={sub.path}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-orange-100 dark:hover:bg-gray-700"
                      >
                        {sub.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={i}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `hover:text-[#ffa771] transition-all duration-200 ${
                      isActive ? "underline text-[#ffa771]" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4 text-[#fb9e12] font-medium">
            {links.map((link, i) =>
              link.subMenu ? (
                <li key={i}>
                  <div
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <span>{link.label}</span>
                    <IoIosArrowDown
                      className={`transform transition duration-200 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {dropdownOpen && (
                    <ul className="mt-2 pl-4 border-l border-orange-300">
                      {link.subMenu.map((sub, idx) => (
                        <li key={idx}>
                          <NavLink
                            to={sub.path}
                            onClick={() => setMenuOpen(false)}
                            className="block py-1 text-sm hover:text-[#ffa771]"
                          >
                            {sub.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={i}>
                  <NavLink
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block hover:text-[#ffa771] transition-all duration-200 ${
                        isActive ? "underline text-[#ffa771]" : ""
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Navbar2;
