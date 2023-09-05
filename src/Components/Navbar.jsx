import React from "react";
import logo from '../images/Logo.png'
import PropTypes from "prop-types";

export const Navbar = ({ prop }) => {
  console.log(prop)
  const handleSortByView = () => {
    // Call the sorting function provided by the parent
    prop();
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 lg:px-10 p-4">
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <a href="" className="flex items-center">
            <img src={logo} className="h-8 mr-3" alt="Logo" />
          </a>

          <button
            onClick={handleSortByView}
            type="button"
            className="bg-gray-300 hover:bg-gray-600 hover:text-cyan-50 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-gray-400 dark:hover:bg-gray-500 dark:focus:ring-gray-700"
          >
            Sort by view
          </button>
          <a href="blog.html">
            <button
              type="button"
              className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-200 font-medium rounded text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-red-400 dark:hover:bg-red-500 dark:focus:ring-red-600"
            >
              Blog
            </button>
          </a>
        </div>
        <hr className="mt-4 border-b-gray-300 border-b-2" />
      </nav>
    </>
  );
};

Navbar.propTypes = {
  prop: PropTypes.array,
};

export default Navbar;
