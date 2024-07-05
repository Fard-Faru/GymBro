import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  Link as UILink
} from "@nextui-org/react";

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="center">
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
      
      <NavbarContent justify="end">
      </NavbarContent>
      
    </Navbar>
  );
}
