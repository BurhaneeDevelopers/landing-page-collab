import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="mx-auto bg-gray-900 py-5 mt-5">
          <div className="mx-auto max-w-screen-2xl flex items-center justify-between px-8">
            <p className="text-center text-sm text-white lg:mt-0 lg:text-right">
              Crafted By Taheri Developers & Managed by @Mustryy
            </p>
            <div className="flex">
              <a href="#" className="mx-2">
                <BsFacebook className="text-sm text-white" />
              </a>

              <a href="#" className="mx-2">
                <FaInstagram className="text-sm text-white" />
              </a>

              <a href="#" className="mx-2">
                <IoLogoTwitter className="text-sm text-white" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
