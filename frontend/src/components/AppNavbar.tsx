import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { NavLink as L1 } from "react-router-dom";

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
    <Navbar onMenuOpenChange={setIsMenuOpen} className="app-navbar">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <AcmeLogo /> APP LOGO IN FUTURE GOES HERE */}
          <p className="font-bold text-inherit">GymBro</p>
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
              {({ isActive }) => (
                <p className={isActive ? "primary" : "foreground"}>Sign Up</p>
              )}
            </L1>
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="pt-10">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color={"primary"} className="w-full" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
