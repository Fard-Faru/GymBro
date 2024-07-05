import { Outlet } from "react-router-dom";
import Navbar from "./WeightNavbar";

export default function HostLayout(){

    return(
        <>
            <Navbar />
            <Outlet />
        </>

    )
}