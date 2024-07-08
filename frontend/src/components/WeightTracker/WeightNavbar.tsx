// import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarContent, Link as UILink } from "@nextui-org/react";

export default function AppNavbar() {
  return (
    <Navbar>
      <NavbarContent></NavbarContent>

      <NavbarContent className="sm:flex" justify="center">
        <NavLink to="." end>
          {({ isActive }) => (
            <UILink color={isActive ? "primary" : "foreground"}>
              View Progress
            </UILink>
          )}
        </NavLink>

        <NavLink to="add">
          {({ isActive }) => (
            <UILink color={isActive ? "primary" : "foreground"}>
              Add New Weight
            </UILink>
          )}
        </NavLink>
      </NavbarContent>

      <NavbarContent justify="end"></NavbarContent>
    </Navbar>
  );
}
