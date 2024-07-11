import React from "react";
import Logo from "../../assets/logo.png";
import { BiPhoneCall } from "react-icons/bi";
import DarkMode from "./DarkMode";
export const NavLinks = [
  {
    id: 1,
    name: "SERVICES",
    link: "/#services",
  },
  {
    id: 2,
    name: "ABOUT",
    link: "/#about",
  },
  {
    id: 3,
    name: "JOIN",
    link: "/#join",
  },
];
const Navbar = () => {
  return (
    <>
      <nav className="shadow-md w-full dark:bg-dark dark:text-white">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 group">
              <BiPhoneCall className="text-2xl text-primary animate-pulse group-hover:scale-105 duration-200" />
              <span>+98364637474</span>
            </div>
            <div>
              <img
                src={Logo}
                alt="logo of Company"
                className="w-16 sm:w-24 m-2"
              />
            </div>
            <div>
              <ul className="flex gap-8 items-center">
                {NavLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.link}
                      className="inline-block text-lg font-semibold hover:text-primary duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <DarkMode />
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
