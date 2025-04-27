"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const menuItems = [
    {
      label: "About",
      hasDropdown: true,
      subItems: [
        { label: "Faculty Profile", type: "item", href: "/about-faculty" },
        { label: "People", type: "item", href: "/people" },
        {
          label: "Faculty Members",
          type: "item",
          indent: true,
          href: "/people/faculty-member",
        },
        {
          label: "Secretariat Team",
          type: "item",
          indent: true,
          href: "/people/secretariat-team",
        },
        {
          label: "PhD Students",
          type: "item",
          indent: true,
          href: "/people/phd-students",
        },
      ],
    },
    {
      label: "Academic Programs",
      hasDropdown: true,
      subItems: [
        { label: "PhD in Political Science", type: "item"},
        { label: "Master of Arts (MA) in Political Science", type: "item"},
        { label: "Master in Public Policy focusing on Climate Change", type: "item"},
      ],
    },
    {
      label: "Research & Publications",
      hasDropdown: true,
      subItems: [
        {
          label:
            "National Survey Varieties of Muslim Religious Practices and Views in Indonesia",
          type: "item",
        },
        {
          label:
            "Center of Muslim Politics and World Society Studies (COMPOSE)",
          type: "item",
        },
        { label: "COMPOSE Working Paper", type: "item", indent: true },
        { label: "Journal", type: "item" },
        { label: "Students", type: "item", indent: true },
        { label: "Lecturers", type: "item", indent: true },
      ],
    },
    {
      label: "Campus Life",
      hasDropdown: true,
      subItems: [
        "Events",
        "Summer Training on Qualitative and Quantitative Methods (STQ2M)",
        "Student Activities",
        "Lecturer Activities",
      ].map((item) => ({ label: item, type: "item" })),
    },
  ];

  return (
    <nav className="relative z-50 flex items-center justify-between h-[78px] px-[50px] py-4 bg-white font-halyard">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <Image
          src="/logo-uiii-berwarna.svg"
          alt="UIII Logo"
          width={260}
          height={50}
        />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-8">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="relative"
            onMouseEnter={() => setOpenDropdown(index)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              className={`flex items-center text-[16px] space-x-1 transition-colors ${
                openDropdown === index
                  ? "text-[#848484]"
                  : "hover:text-brandNavy"
              }`}
            >
              <span>{item.label}</span>
              {item.hasDropdown && <ChevronDown size={16} />}
            </button>

            {/* Dropdown */}
            {openDropdown === index && (
              <ul className="absolute left-0 mt-[0px] w-[260px] bg-white shadow-lg overflow-hidden rounded-md">
                {item.subItems.map((subItem, subIndex) => {
                  const itemClass = `px-4 py-2 ${
                    subItem.indent ? "pl-[25px]" : "pl-4"
                  }`;

                  return (
                    <li key={subIndex} className={itemClass}>
                      {"href" in subItem && subItem.href ? (
                        <Link
                          href={subItem.href}
                          className="block w-full text-[#B0B0B0] hover:text-brandNavy transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ) : (
                        <span className="block w-full text-[#B0B0B0] hover:text-brandNavy transition-colors cursor-pointer">
                          {subItem.label}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
