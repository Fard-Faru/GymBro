import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./MainNavbar";
import Drawer from "./Drawer";

export default function LoggedInLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div className="flex flex-1 flex-col relative">
      <Navbar toggleDrawer={toggleDrawer} />
      <Drawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <Outlet />
    </div>
  );
}
