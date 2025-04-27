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
      href: "/about-faculty",
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
      href: "/academic-program",
      hasDropdown: true,
      subItems: [
        {
          label: "PhD in Political Science",
          type: "item",
          href: "/academic-program/phd-political-science",
        },
        {
          label: "Master of Arts (MA) in Political Science",
          type: "item",
          href: "/academic-program/ma-political-science",
        },
        {
          label: "Master in Public Policy focusing on Climate Change",
          type: "item",
          href: "/academic-program/master-public-policy",
        },
      ],
    },
    {
      label: "Research & Publications",
      href: "/research-and-publication/compose",
      hasDropdown: true,
      subItems: [
        {
          label:
            "Center of Muslim Politics and World Society Studies (COMPOSE)",
          type: "item",
          href: "/research-and-publication/compose",
        },
        { label: "COMPOSE Working Paper", type: "item", indent: true },
        {
          label:
            "National Survey Varieties of Muslim Religious Practices and Views in Indonesia",
          type: "item",
        },
        { label: "Journal", type: "item" },
        { label: "Students", type: "item", indent: true },
        { label: "Lecturers", type: "item", indent: true },
      ],
    },
    {
      label: "Campus Life",
      href: "/CampusLife",
      hasDropdown: true,
      subItems: [
        { label: "Events", type: "item", href: "/CampusLife/Events" },
        {
          label: "Student Activities",
          type: "item",
          href: "/CampusLife/StudentActivities",
        },
        {
          label: "Lecturer Activities",
          type: "item",
          href: "/CampusLife/LecturerActivities",
        },
        {
          label: "Alumni Activities",
          type: "item",
          href: "/CampusLife/AlumniActivities",
        },
      ],
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
            <Link href={item.href}>
              {" "}
              {/* Wrap the label in a Link */}
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
            </Link>

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
