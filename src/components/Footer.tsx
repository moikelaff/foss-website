"use client";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
  FaEnvelope,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#01395E] text-white pt-[20px] pb-[29px] px-[50px] font-halyard">
      <div className="max-w-full mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Left Section */}
        <div className="mb-6 md:mb-0 max-w-[400px]">
          <h3 className="text-[20px] font-medium">
            Faculty of Social Sciences <br />
            Universitas Islam Internasional Indonesia
          </h3>
          <p className="text-sm leading-relaxed py-[40px]">
            Faculty B Building, <br />
            Jalan Raya Bogor KM. 33.5 <br />
            Cisalak, Sukmajaya <br />
            Depok – West Java <br />
            16416 <br />
            Indonesia
          </p>
          <p className="mt-[14px] text-sm">
            © 2025 Faculty of Social Sciences UIII. All rights reserved
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start w-[348px]">
          <h4 className="text-[20px] font-medium">Email Us</h4>
          <div className="pt-[40px] pb-[40px] text-sm text-left space-y-1">
            <a
              href="mailto:social.sciences@uiii.ac.id"
              className="block hover:text-yellow-200"
            >
              social.sciences@uiii.ac.id
            </a>
            <a
              href="mailto:political.science@uiii.ac.id"
              className="block hover:text-yellow-200"
            >
              political.science@uiii.ac.id
            </a>
            <a
              href="mailto:public.policy@uiii.ac.id"
              className="block hover:text-yellow-200"
            >
              public.policy@uiii.ac.id
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/fossuiii/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-yellow-200"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.youtube.com/@fossuiii?si=32mqxCr88erFQiuD"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-yellow-200"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://www.facebook.com/groups/uncode"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-yellow-200"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://x.com/fossuiii?s=11"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="hover:text-yellow-200"
            >
              <FaXTwitter size={24} />
            </a>
            <a
              href="https://www.linkedin.com/school/universitas-islam-internasional-indonesia/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-yellow-200"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
