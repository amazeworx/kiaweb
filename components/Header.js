"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "About Us",
    link: "#",
    submenu: [
      { title: "Brief Profile", link: "/about/brief-profile" },
      { title: "Corporate Values", link: "/about/corporate-values" },
    ],
  },
  {
    title: "Subsidiaries",
    link: "/subsidiaries",
    submenu: [
      { title: "Property", link: "/subsidiaries/property" },
      {
        title: "Property Management",
        link: "/subsidiaries/property-management",
      },
    ],
  },
  {
    title: "Affiliates",
    link: "/affiliates",
    submenu: [
      {
        title: "Logistics / Mining / Trading / Ports",
        link: "/affiliates/logistics",
      },
    ],
  },
  {
    title: "Upcoming Projects",
    link: "#",
    submenu: [
      {
        title: "4 Stars Hotel Ballroom",
        link: "/projects/4-stars-hotel-ballroom",
      },
      {
        title: "4 Stars Hotel Lobby & Facilities",
        link: "/projects/4-stars-hotel-lobby-facilities",
      },
      {
        title: "3 Stars Hotel Project",
        link: "/projects/3-stars-hotel-project",
      },
    ],
  },
  { title: "Contact Us", link: "/contact" },
];

const Header = ({ backgroundColor = "transparent" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 lg:pt-8"
      style={{ backgroundColor }}
    >
      <div className="bg-white">
        <div className="container px-4 lg:px-6 mx-auto">
          <nav className="navbar bg-base-100 px-0 py-2 min-h-min lg:py-0">
            <div className="flex-1">
              <Link href="/">
                <Image
                  src="/images/logo-kia.png"
                  alt="PT Karunia Indo Alam"
                  width={402}
                  height={54}
                  className="h-[28px] w-auto max-w-none xl:max-w-full"
                />
              </Link>
            </div>
            <div className="flex flex-1 justify-end">
              <div className="hidden lg:block">
                <ul className="flex px-1 py-0 text-base gap-x-2">
                  {menuItems.map((item, index) => (
                    <li key={`${item.title || "untitled"}-${index}`}>
                      {item.submenu ? (
                        <div className="dropdown dropdown-hover">
                          {item.link && (
                            <Link
                              href={item.link}
                              className="flex px-4 py-3 text-nowrap hover:bg-transparent active:!bg-transparent active:!text-black"
                            >
                              {item.title}
                            </Link>
                          )}
                          <ul className="dropdown-content menu bg-base-100 rounded-lg z-[1] w-52 p-2 shadow">
                            {item.submenu.map((subItem, index) => (
                              <li key={`${subItem.link || "nolink"}-${index}`}>
                                <Link
                                  href={subItem.link}
                                  className="flex px-4 py-2 text-base leading-tight"
                                >
                                  {subItem.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <Link
                          href={item.link}
                          className="flex px-4 py-3 text-nowrap hover:bg-transparent active:!bg-transparent active:!text-black"
                        >
                          {item.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="btn btn-ghost -mr-4 lg:hidden"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-5 w-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>

              {/* Off-canvas Menu */}
              <div
                className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-end lg:hidden"
                style={{
                  zIndex: isMenuOpen ? "40" : "-10",
                  transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                <div
                  className="bg-white w-64 h-screen fixed top-0 right-0 shadow-lg p-4 pt-16 transition-transform duration-500 ease-in-out"
                  style={{
                    transform: isMenuOpen
                      ? "translateX(0)"
                      : "translateX(100%)", // Use translateX
                  }}
                >
                  {/* Close Button */}
                  <button
                    className="absolute top-4 right-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  {/* Menu Items */}
                  <ul>
                    {menuItems.map((item) => (
                      <li key={item.title}>
                        {item.link && (
                          <Link
                            href={item.link}
                            className="btn btn-md btn-block btn-ghost justify-start text-left"
                          >
                            {item.title}
                          </Link>
                        )}
                        {item.submenu?.length > 0 && ( // Only render if there's a submenu
                          <ul className="pb-5">
                            {" "}
                            {/* Add a nested <ul> */}
                            {item.submenu.map((subItem) => (
                              <li key={subItem.link}>
                                <Link
                                  href={subItem.link}
                                  className="btn btn-md btn-block btn-ghost justify-start text-left flex-nowrap font-normal"
                                >
                                  <span>&#8213;</span>{" "}
                                  <span>{subItem.title}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
