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
import { NavLink as L1 } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

const AppNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "Features",
    "About",
    "Contact",
    "Profile",
    "Sign in",
    "Login",
  ];
  const NextUICSS =
    "relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity";

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="navbar">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <L1 to="/" className={NextUICSS}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "black",
              }}
            >
              <FontAwesomeIcon
                icon={faDumbbell}
                style={{ marginRight: "5px" }}
              />
              <p className="font-bold text-inherit">GymBro</p>
            </div>
          </L1>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <L1 to="/" className={NextUICSS}>
            Home
          </L1>
        </NavbarItem>
        <NavbarItem>
          <L1 to="features" className={NextUICSS}>
            Features
          </L1>
        </NavbarItem>
        <NavbarItem>
          <L1 to="about" className={NextUICSS}>
            About
          </L1>
        </NavbarItem>
        <NavbarItem>
          <L1 to="contact" className={NextUICSS}>
            Contact
          </L1>
        </NavbarItem>

        <NavbarItem>
          <L1 to="integrations" className={NextUICSS}>
            Integrations
          </L1>
        </NavbarItem>
        <NavbarItem>
          <L1 to="weightTracker" className={NextUICSS}>
            Weight Tracker
          </L1>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <L1 to="login" className={NextUICSS}>
            Login
          </L1>
        </NavbarItem>
        <NavbarItem>
          <Button color="primary" variant="flat">
            <L1 to="signup" className={NextUICSS}>
              Sign Up
            </L1>
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="pt-10">
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
