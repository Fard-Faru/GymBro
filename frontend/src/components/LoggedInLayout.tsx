import { Outlet } from "react-router-dom";
import Navbar from "./MainNavbar";

export default function LoggedInLayout() {
  return (
    <div className="flex flex-1 flex-col relative">
      <Navbar />
      <Outlet />
    </div>
  );
}
