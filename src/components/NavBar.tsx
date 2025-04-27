'use client';

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

// IMPORTANT!!! INSERT NAVBAR MENU LINKS!!!!!


const NavBar = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const menuItems = [
    {
      label: "About",
      hasDropdown: true,
      subItems: [
        { label: "Faculty Profile", type: "item" },
        { label: "People", type: "subheader" }, 
        { label: "Faculty Members", type: "item", indent: true },
        { label: "Secretariat Team", type: "item", indent: true },
        { label: "PhD Students", type: "item", indent: true },
      ],
    },
    {
      label: "Academic Programs",
      hasDropdown: true,
      subItems: [
        { label: "MA & PhD in Political Science", type: "subheader" }, 
        { label: "PhD in Political Science", type: "item", indent: true },
        { label: "Master of Arts (MA) in Political Science", type: "item", indent: true },
        { label: "Master in Public Policy focusing on Climate Change", type: "item", indent: false },
      ],
    },
    {
      label: "Research & Publications",
      hasDropdown: true,
      subItems: [
        { label: "National Survey Varieties of Muslim Religious Practices and Views in Indonesia", type: "item" }, 
        { label: "Center of Muslim Politics and World Society Studies (COMPOSE)", type: "subheader" },
        { label: "COMPOSE Working Paper", type: "item", indent: true },
        { label: "Journal", type: "subheader" },
        { label: "Students", type: "item", indent: true },
        { label: "Lecturers", type: "item", indent: true },
      ],
    },
    {
      label: "Campus Life",
      hasDropdown: true,
      subItems: ["Events","Student Activities", "Lecturer Activities", "Alumni Activities"].map((item) => ({ label: item, type: "item" })),
    },
  ];

  return (
    <nav className="relative z-50 flex items-center justify-between h-[78px] pr-[100px] pl-[6px] py-4 bg-white">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <Image src="/logo-uiii-berwarna.svg" alt="UIII Logo" width={300} height={50} />
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
            <button className={`flex items-center text-[18px] space-x-1 font-semibold transition-colors ${
                openDropdown === index ? "text-[#848484]" : "hover:text-[#848484]"
              }`}>
              <span>{item.label}</span>
              {item.hasDropdown && <ChevronDown size={16} />}
            </button>

            {/* Dropdown Menu */}
            {openDropdown === index && (
              <ul className="absolute left-0 mt-[0px] w-[210px] bg-white shadow-lg overflow-hidden">
                {item.subItems.map((subItem, subIndex) =>
                  subItem.type === "subheader" ? (
                    <li
                      key={subIndex}
                      className="px-4 py-2 text-[#A0A0A0] hover:text-[#2C2C2C] font-semibold cursor-pointer"
                    >
                      {subItem.label}
                    </li>
                  ) : (
                    <li 
                      key={subIndex} 
                      className={`px-4 py-2 text-[#B0B0B0] hover:text-[#2C2C2C] cursor-pointer ${subItem.indent ? "pl-[25px]" : ""}`}
                    >
                      {subItem.label}
                    </li>
                  )
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
