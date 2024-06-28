import { Outlet } from "react-router-dom";
import Navbar from "./AppNavbar";

export default function HostLayout() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <Outlet />
    </div>
  );
}
