import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Button,
  DropdownItem,
  Input,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { SearchIcon } from "../assets/svg/SearchIcon";
import { NotificationBellIcon } from "../assets/svg/NotificationBellIcon";
import HamburgerIcon from "../assets/svg/HamburgerIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

export default function MainNavbar() {
  return (
    <Navbar isBlurred={false} position="static">
      <NavbarContent>
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="flat"
              isIconOnly
              style={{ backgroundColor: "transparent" }}
            >
              <HamburgerIcon size={20} color="#000" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Static Actions"
            className="w-full"
            variant="bordered"
            style={{
              height: "calc(100vh - 100px)",
              backgroundColor: "transparent",
            }}
          >
            <DropdownItem key="new" description="b;ah blah">
              Dashboard
            </DropdownItem>
            <DropdownItem key="copy">Log Exercise</DropdownItem>
            <DropdownItem key="edit">Edit file</DropdownItem>
            <DropdownItem key="delete" className="text-danger" color="danger">
              Delete file
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarBrand>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FontAwesomeIcon icon={faDumbbell} style={{ marginRight: "5px" }} />
            <p className="font-bold text-inherit">GymBro</p>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[14rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
        <NotificationBellIcon size={22} />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
