import { Outlet } from "react-router-dom";
import Navbar from "./AppNavbar";

export default function HostLayout(){

    return(
        <>
            <Navbar />
            <Outlet />
        </>

    )
}