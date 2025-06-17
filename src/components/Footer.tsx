"use client";
import { Mail, Phone, Instagram, Music } from "lucide-react";

// IMPORTANT!!! INSERT SOCIAL MEDIA LINKS!!!!!

const Footer = () => {
  return (
    <footer className="bg-[#01395E] h-[359px] text-white pt-[20px] pb-[29px] px-[50px] font-halyard">
      <div className="max-w-full h-[310px] mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Left Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-[20px] font-medium">
            Faculty of Social Sciences <br /> Universitas Islam Internasional
            Indonesia
          </h3>
          <p className="text-sm leading-relaxed py-[40px]">
            Faculty B Building, <br />
            Jalan Raya Bogor KM. 33.5 <br />
            Cisalak, Sukmajaya <br />
            Depok – West Java <br />
            16416 <br />
            Indonesia
          </p>
          <p className="mt-[14px]">
            © 2025 Faculty of Social Sciences UIII. All rights reserved
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start w-[348px] h-[339px]">
          <h4 className="text-[20px] font-medium">Email Us</h4>
          <div className="pt-[40px] pb-[40px] text-sm text-left">
            <a
              href="mailto:social.sciences@uiii.ac.id"
              className="block hover:text-blue-300"
            >
              social.sciences@uiii.ac.id
            </a>
            <a
              href="mailto:political.science@uiii.ac.id"
              className="block hover:text-blue-300"
            >
              political.science@uiii.ac.id
            </a>
            <a
              href="mailto:public.policy@uiii.ac.id"
              className="block hover:text-blue-300"
            >
              public.policy@uiii.ac.id
            </a>
          </div>

          {/* Icons */}
          <div className="flex justify-between gap-8 mb-[20px]">
            <a href="mailto:social.sciences@uiii.ac.id">
              <Mail className="w-[32px] h-[32px] hover:text-blue-300" />
            </a>
            {/* <a href="#">
              <Music className="w-[32px] h-[32px] hover:text-blue-300" />
            </a> */}
            <a href="tel:+62123456789">
              <Phone className="w-[32px] h-[32px] hover:text-blue-300" />
            </a>
            <a href="https://instagram.com/yourpage" target="_blank">
              <Instagram className="w-[32px] h-[32px] hover:text-blue-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
