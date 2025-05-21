import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {
  IoMailOutline,
  IoLocationOutline,
  IoShareSocial,
} from "react-icons/io5";
import { PiPhoneCall } from "react-icons/pi";
import {
  FaFacebook,
  FaGooglePlusG,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";

export default function Contacts() {
  return (
    <>
      <section className="contacts overflow-hidden w-full">
        <Header />
        <div className="w-full h-full flex flex-col gap-5 items-center mt-20 text-white">
          <h1 className="md:text-7xl text-4xl">CONTACT US</h1>
        </div>
      </section>
      <section className="w-full overflow-hidden flex flex-col items-center py-12 px-6 md:px-12">
        <div className="w-full lg:max-w-[1350px] flex flex-col gap-40">
          <div>
            <h1 className="text-2xl md:text-5xl text-[#343877] border-b-2 pb-5">
              Give us a call, email us, or come and visit us in our offices
            </h1>
          </div>
          <div>
            <ul className="flex flex-col flex-wrap lg:flex-nowrap md:flex-row items-center justify-between gap-10 text-[#343877]">
              <li className="flex flex-col items-center gap-5 flex-1/4">
                <span className="text-3xl md:text-5xl ">
                  <IoLocationOutline />
                </span>
                <span className="text-base lg:text-lg text-wrap text-center">
                  Address: Lorem ipsum dolor, sit amet consectetur{" "}
                </span>
              </li>
              <li className="flex flex-col items-center gap-5 flex-1/4">
                <span className="text-3xl md:text-5xl">
                  <PiPhoneCall />
                </span>
                <span className="text-base lg:text-lg">
                  Phone:{" "}
                  <a
                    href="tel:+1234567890"
                    className="hover:text-[#343877]/50 transition-all duration-300 ease-in-out"
                  >
                    {" "}
                    +1 (234) 567-890
                  </a>
                </span>
              </li>
              <li className="flex flex-col items-center gap-5 flex-1/4">
                <span className="text-3xl md:text-5xl">
                  <IoMailOutline />
                </span>
                <span className="text-base lg:text-lg">
                  Email:{" "}
                  <a
                    href="mailto:example@email.com"
                    className="hover:text-[#343877]/50 transition-all duration-300 ease-in-out"
                  >
                    example@email.com
                  </a>
                </span>
              </li>
              <li className="flex flex-col items-center gap-5 flex-1/4">
                <span className="text-2xl md:text-5xl">
                  <IoShareSocial />
                </span>
                <span className="flex items-center gap-10 text-xl md:text-2xl">
                  <a
                    href=""
                    className="hover:text-[#343877]/50 transition-all duration-300 ease-in-out"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href=""
                    className="hover:text-[#343877]/50 transition-all duration-300 ease-in-out"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href=""
                    className="hover:text-[#343877]/50 transition-all duration-300 ease-in-out"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href=""
                    className="hover:text-[#343877]/50 transition-all duration-300 ease-in-out"
                  >
                    <FaGooglePlusG />
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col lg:flex-row  gap-10">
            <div className="flex-1/2 flex flex-col gap-4">
              <h2 className="text-xl md:text-4xl border-b-2 pb-4 font-semibold">Message Us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                corporis doloribus quia voluptatum officiis consequatur magnam,
                consequuntur nam eligendi assumenda at harum nemo reprehenderit
                dolores eveniet vel aperiam eos. Aliquam?
              </p>
            </div>
            <form action="" className="flex-1/2 flex flex-col gap-5 flex-wrap">
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full">
                <input type="text" name="name" placeholder="First Name" className="h-12 py-2 px-4 bg-gray-300 rounded-2xl flex-1/2" />
                <input type="text" name="lastName" placeholder="Last Name" className="h-12 py-2 px-4 bg-gray-300 rounded-2xl flex-1/2" />
              </div>
              <input type="email" name="email" placeholder="Email" className="h-12 py-2 px-4 bg-gray-300 rounded-2xl" />
              <textarea
                name="message"
                placeholder="Mesaage"
                cols={5}
                rows={6}
                className="py-2 px-4 bg-gray-300 rounded-2xl"
              ></textarea>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
