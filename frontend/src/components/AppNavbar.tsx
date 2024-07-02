import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link as UILink,
  Button,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';


const AppNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];


  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <NavLink to="/">
          <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <FontAwesomeIcon icon={faDumbbell} style={{ marginRight: "5px" }} />
            <p className="font-bold text-inherit">GymBro</p>
          </div>
          </NavLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <NavLink to="/features">
            {({ isActive }) => (
              <UILink color={isActive ? "primary" : "foreground"}>
                Features
              </UILink>
            )}
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/customers">
            {({ isActive }) => (
              <UILink color={isActive ? "primary" : "foreground"}>
                Customers
              </UILink>
            )}
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/integrations">
            {({ isActive }) => (
              <UILink color={isActive ? "primary" : "foreground"}>
                Integrations
              </UILink>
            )}
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/weightTracker">
            {({ isActive }) => (
              <UILink color={isActive ? "primary" : "foreground"}>
                Weight Tracker
              </UILink>
            )}
          </NavLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <UILink href="#">Login</UILink>
        </NavbarItem>
        <NavbarItem>
          <Button as={UILink} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <UILink
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </UILink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default AppNavbar;
