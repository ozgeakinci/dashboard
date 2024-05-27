import {
  HiOutlineBell,
  HiOutlineChatAlt,
  HiOutlineSearch,
} from "react-icons/hi";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
  MenuItem,
  Menu,
  MenuButton,
  MenuItems,
} from "@headlessui/react";
import { NavLink } from "react-router-dom";

const links = [
    { href: "/profile", label: "Your Profile" },
    { href: "/settings", label: "Settings" },
  { href: "/logout", label: "Logout" },
];

const Header = () => {
  return (
    <div className="bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200">
      <div className="relative">
        <HiOutlineSearch
          fontSize={20}
          className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"
        />
        <input
          type="text"
          placeholder="Search..."
          className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pr-4 pl-11 "
        />
      </div>

      <div className="flex items-center gap-2 mr-2">
        <Popover>
          <PopoverButton className="p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100">
            <HiOutlineChatAlt fontSize={24} />
          </PopoverButton>
          <Transition
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <PopoverPanel anchor="bottom end" className="">
              <div className="p-6 bg-white rounded-sm shadow-md ring-black ring-opacity-5 ">
                <strong className="text-gray-700 font-medium">Messages</strong>
                <div className="mt-2 py-1 text-sm">This is messages panel</div>
              </div>
            </PopoverPanel>
          </Transition>
        </Popover>

        <Popover>
          <PopoverButton className="p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100">
            <HiOutlineBell fontSize={24} />
          </PopoverButton>
          <Transition
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <PopoverPanel anchor="bottom end" className="">
              <div className="p-6 bg-white rounded-sm shadow-md ring-black ring-opacity-5 ">
                <strong className="text-gray-700 font-medium">
                  Notifications
                </strong>
                <div className="mt-2 py-1 text-sm">
                  This is notification panel
                </div>
              </div>
            </PopoverPanel>
          </Transition>
        </Popover>

        <Menu>
          <MenuButton className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
           
            <div
              className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  'url("https://source.unsplash.com/80x80?face")',
              }}
            >
              <span className="sr-only">Marc Backes</span>
            </div>
          </MenuButton>
          <Transition
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
          <MenuItems anchor="bottom " className="mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ">
            {links.map((link) => (
              <MenuItem
                key={link.href}
                className="block data-[focus]:bg-gray-200  no-underline"
              >
                <NavLink to={link.href} className="active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200 no-underline hover:no-underline ">{link.label}</NavLink>
              </MenuItem>
            ))}
          </MenuItems>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
