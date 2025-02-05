import { Button, CustomFlowbiteTheme, Navbar } from "flowbite-react";
import { menuItems } from "./data/MenuItems";
import { MenuItem } from "./types/MenuItems";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname || "/";

  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [dropdownVisible, setDropdownVisible] = useState<string | null>(null); 

  const navTheme: CustomFlowbiteTheme["navbar"] = {
    collapse: {
      base: "w-[90%] md:block md:w-auto absolute md:relative bg-white top-20 md:top-0 transition-all transition-transform duration-1000",
      list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
      hidden: {
        on: "hidden",
        off: "",
      },
    },

    link: {
      active: {
        on: "text-bold border-b-2 border-purple-950 border-solid",
      },
    },
  };

  const handleMouseEnter = (id: string) => {
    setHoveredMenu(id);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  const toggleDropdown = (id: string) => {
    setDropdownVisible(dropdownVisible === id ? null : id);
  };

  return (
    <Navbar
      theme={navTheme}
      fluid
      rounded
      className="sticky backdrop-blur-2xl z-50 px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4 rounded container mx-auto top-2"
    >
      <Navbar.Brand href="https://izhtech.com">
        <img
          src="/logo-primary.png"
          className="w-16"
          alt="izhtech | Your Digital Partner"
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Link to="/contact">
          <Button className="bg-black">Let's Talk</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {menuItems.map((menu: MenuItem) => (
          <motion.div
            key={menu.id}
            onMouseEnter={() => handleMouseEnter(menu.id)}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            {/* Top-level menu item */}
            <Navbar.Link
              href={menu.path}
              className="text-bold"
              active={menu.path === currentPath}
              onClick={() =>
                menu.children && window.innerWidth <= 768
                  ? toggleDropdown(menu.id)
                  : undefined
              }
            >
              {menu.label}
            </Navbar.Link>

            {/* Dropdown for desktop */}
            {menu.children && hoveredMenu === menu.id && window.innerWidth > 768 && (
              <motion.ul
                className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md p-2 space-y-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {menu.children.map((child: MenuItem) => (
                  <li key={child.id}>
                    <Link
                      to={child.path}
                      className="block px-4 py-2 hover:bg-gray-200 rounded-md"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}

            {/* Dropdown for mobile */}
            {menu.children && dropdownVisible === menu.id && window.innerWidth <= 768 && (
              <ul className="mt-2 bg-gray-100 rounded-md space-y-2">
                {menu.children.map((child: MenuItem) => (
                  <li key={child.id} className="pl-4">
                    <Link
                      to={child.path}
                      className="block px-2 py-1 hover:bg-gray-200 rounded-md"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
