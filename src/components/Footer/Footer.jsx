import React from "react";
import Logo from "../../assets/logo.png";
import { BiPhoneCall } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
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
const Footer = () => {
  return (
    <>
      <nav className="shadow-md w-full dark:bg-dark bg-gray-200 py-10">
        <div className="container">
          <div className="flex items-center sm:justify-between">
            <div className="flex items-center ">
              <img
                src={Logo}
                alt="logo of Company"
                className="w-16 sm:w-24 m-2"
              />
              <div className="flex items-center gap-3">
                <a href="#">
                  <FaInstagram className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl hover:text-primary duration-300" />
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 group hidden sm:flex">
              <BiPhoneCall className="text-2xl text-primary animate-pulse group-hover:scale-105 duration-200" />
              <span>+98364637474</span>
            </div>

            <div className=" hidden sm:block">
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
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Footer;
