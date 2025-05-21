import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router";
import logoWhite from "../assets/logo-white.png";
export default function Footer() {
  return (
    <>
      <footer className="w-full h-fit flex flex-col items-center sm:px-6 py-12 bg-[#20212B] text-white overflow-x-hidden">
        <div className="max-w-[1350px] flex flex-col gap-10">
          <div className="w-full flex flex-col sm:flex-row  gap-20 px-6">
            <div className="md:w-[33.99%] w-full flex flex-col gap-4">
              <span className="w-30">
                <img src={logoWhite} alt="logo" />
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                praesentium, cum necessitatibus ea, nemo voluptate labore modi
                amet aliquam temporibus vitae{" "}
              </p>
              <span className="flex flex-col gap-5">
                <span className="text-xl sm:text-2xl">Follow Us</span>
                <ul className="flex items-center text-xl sm:text-2xl gap-5">
                  <li className="p-2 bg-gray-600 rounded-sm hover:bg-gray-800 cursor-pointer">
                    <FaFacebookF />
                  </li>
                  <li className="p-2 bg-gray-600 rounded-sm hover:bg-gray-800 cursor-pointer">
                    <FaTwitter />
                  </li>
                  <li className="p-2 bg-gray-600 rounded-sm hover:bg-gray-800 cursor-pointer">
                    <FaInstagram />
                  </li>
                  <li className="p-2 bg-gray-600 rounded-sm hover:bg-gray-800 cursor-pointer">
                    <FaYoutube />
                  </li>
                </ul>
              </span>
            </div>
            <div className="md:w-[33.99%] w-full flex flex-col gap-6">
              <h2 className="font-bold text-xl sm:text-2xl">Contacts</h2>
              <span className="flex flex-col gap-5 text-gray-500">
                <address className="border-b-2 border-gray-300">NewYork, Usa</address>
                <address className="border-b-2 border-gray-300">Tokyo, Japan</address>
                <a href="tel:+1234567890" className="hover:text-gray-200 border-b-2 border-gray-300">+1 (234) 567-890</a>
                <a href="mailto:info@example.com" className="hover:text-gray-200 border-b-2 border-gray-300">info@example.com</a>
              </span>
            </div>
            <div className="md:w-[33.99%] w-full flex flex-col gap-10">
              <h2 className="font-bold text-xl sm:text-2xl">Subscribe</h2>
              <form>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="py-3 px-5 border-2 border-white rounded-lg w-full"
                />
                <br />
                <input type="submit" value="Subscribe" className="text-sm mt-8 border-2 border-white p-2 rounded-lg hover:bg-gray-600 cursor-pointer" />
              </form>
            </div>
          </div>
          <div className="w-full flex flex-col sm:flex-row justify-between px-6 pt-6 border-t-2 gap-10 text-sm sm:text-base">
            <span>© 2025 Life Line Charity Template by AW Siddiui</span>
            <span>
                <Link className="mr-2 pr-2 hover:text-gray-600">Privacy</Link>
                <Link className="hover:text-gray-600">Policy</Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
