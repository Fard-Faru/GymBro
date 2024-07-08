import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import Navbar from "./MainNavbar";
import HamburgerIcon from "../assets/svg/HamburgerIcon";
import PieChart from "../assets/svg/PieChart";
import Users from "../assets/svg/Users";

export default function LoggedInLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex flex-1 flex-col relative">
      <Navbar />
      <div className="flex flex-row">
        <div style={{ display: isDrawerOpen ? "none" : "block" }}>
          <Button
            variant="flat"
            isIconOnly
            style={{ backgroundColor: "transparent" }}
            onClick={toggleDrawer}
            className="text-center border-solid border-1 shadow-lg rounded-lg"
          >
            <HamburgerIcon size={20} color="#000" />
          </Button>
        </div>

        <div
          id="drawer-navigation"
          className={`z-40 h-full p-4 overflow-y-auto transition-transform bg-white w-64 dark:bg-gray-800`}
          style={{
            display: isDrawerOpen ? "block" : "none",
            position: "relative",
          }}
          aria-labelledby="drawer-navigation-label"
        >
          <h5
            id="drawer-navigation-label"
            className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
          >
            Menu
          </h5>
          <Button
            variant="flat"
            isIconOnly
            onClick={toggleDrawer}
            aria-controls="drawer-navigation"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </Button>
          <div className="py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <PieChart />
                  <span className="ms-3">Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <Users />
                  <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    3
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <Users />
                  <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ flex: "1", position: "relative" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
