import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from '../assets/logo.png'

const navLinks = [
  {
    path: "/",
    name: "Home",
    icon: (
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
  },
  {
    path: "/organization",
    name: "Organization",
    icon: (
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21,21H3V3h18V21z M7,7H5v2h2V7z M11,7H9v2h2V7z M15,7h-2v2h2V7z M19,7h-2v2h2V7z M7,11H5v2h2V11z M11,11H9v2h2V11z M15,11h-2v2h2V11z M19,11h-2v2h2V11z M7,15H5v2h2V15z"></path>
      </svg>
    ),
  },
  {
    path: "/assets",
    name: "Assets",
    icon: (
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22,7v10c0,0.55-0.45,1-1,1H3c-0.55,0-1-0.45-1-1V7c0-0.55,0.45-1,1-1h18C21.55,6,22,6.45,22,7z M19,0H5C4.45,0,4,0.45,4,1v4h16V1C20,0.45,19.55,0,19,0z"></path>
      </svg>
    ),
  },
  {
    path: "/trade",
    name: "Trade",
    icon: (
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 6H6v2h2V6zm0 4H6v2h2v-2zm2-4h2v2h-2V6zm0 4h2v2h-2v-2zm2-4h2v2h-2V6zm0 4h2v2h-2v-2zm-4 4H6v2h2v-2zm2 0h2v2h-2v-2zm2 0h2v2h-2v-2z"></path>
        <path d="M20 2H4c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm-1 17H5V5h14v14z"></path>
      </svg>
    ),
  },
  {
    path: "/history",
    name: "History",
    icon: (
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 8v4l3 3"></path>
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
      </svg>
    ),
  },
  {
    path: "/wallet",
    name: "Wallet",
    icon: (
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21 6h-7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h7v2a2 2 0 0 0 2 2h2v-2h-2V6z"></path>
        <rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect>
        <path d="M23 8a2 2 0 0 0-2-2"></path>
      </svg>
    ),
  },
];

const Sidebar = () => {
  // State to manage whether the sidebar is expanded or not
  const [isExpanded, setIsExpanded] = useState(true);
  const location = useLocation();

  // Function to toggle sidebar state
  const toggleSidebar = () => setIsExpanded(!isExpanded);

  useEffect(() => {
    const handleResize = () => {
      // Automatically collapse the sidebar if the window width is less than 768px
      if (window.innerWidth <= 1024) {
        setIsExpanded(false);
      } else {
        setIsExpanded(true);
      }
    };

    // Add event listener on mount
    window.addEventListener("resize", handleResize);

    // Call handleResize initially in case the initial window size is below the threshold
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (path) => location.pathname === path;

  const tapVariants = {
    tap: { scale: 0.95 },
  };

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${
        isExpanded ? "w-64" : "w-20"
      } h-screen bg-sidebar-bg`}
    >
      <div
        className={`flex flex-row ${
          isExpanded ? "justify-between" : "justify-center"
        } items-center mx-[16px] my-[16px]`}
      >
        {/* Conditional rendering to show/hide logo based on isExpanded */}
        {isExpanded ? (
             <img src={Logo} alt="logo" className="w-32" />        
        ) : null}
        {/* Toggle Button */}
        <div
          onClick={toggleSidebar}
          className="p-1 rounded bg-[#353333] cursor-pointer opacity-100 hover:opacity-50 transition-opacity duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
            />
          </svg>
        </div>
      </div>
      {/* Search bar with icon */}
      {isExpanded ? (
        <div
          className={`flex items-center rounded-md bg-mine-shaft m-[16px] px-4 py-2 transition-all duration-300`}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            className="text-white text-lg block float-left cursor-pointer mr-[24px]"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
          </svg>
          <input
            className="bg-transparent w-full text-white text-base focus:outline-none"
            type="search"
            placeholder="Search"
          />
        </div>
      ) : null}
      {/* Navigation links */}
      <nav className={`transition-opacity duration-500`}>
        <ul className="mt-4">
          {navLinks.map((item, index) => (
            <Link key={index} to={item.path}>
              <motion.li
                variants={tapVariants}
                whileTap="tap"
                className={`flex items-center px-4 py-2 m-[16px] rounded cursor-pointer ${
                  isActive(item.path) ? "bg-nav-hover" : "hover:bg-nav-hover"
                }`}
              >
                <motion.div className="flex items-center">
                  {React.cloneElement(item.icon, {
                    className: `${
                      isActive(item.path)
                        ? "text-primary"
                        : "text-white hover:text-secondary"
                    }`,
                  })}
                  {isExpanded && (
                    <span
                      className={`ml-[24px] ${
                        isActive(item.path) ? "text-primary" : "text-white"
                      }`}
                    >
                      {item.name}
                    </span>
                  )}
                </motion.div>
              </motion.li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
