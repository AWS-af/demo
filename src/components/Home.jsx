import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Partners from "./Partners";
import Footer from "./Footer"

import aboutUs from "../assets/about-us.jpg";
import aboutColor from "../assets/about_layout.png";
import church from "../assets/church.png";
import water from "../assets/water.png";
import health from "../assets/health.png";
import charity from "../assets/charity.png";

export default function home() {
  return (
    <>
      <section className="w-full relative">
        <div className="home w-full bg-cover bg-center">
          <Header />
          <div className="w-full flex flex-col gap-5 items-center mt-20 text-white">
            <h3 className="text-[13px]">100+ PROJECTS ACROSS THE GLOBE</h3>
            <h1 className="md:text-9xl text-7xl">Life Line</h1>
            <h2 className="md:text-2xl text-[15px] max-w-[600px] text-center">
              We work towards ensuring a life free from inequality and
              discrimination for everyone
            </h2>
            <span>
              <Link
                to="donate"
                className="px-7 py-2 md:px-12 md:py-3 border-2 border-amber-400 rounded-4xl hover:bg-amber-400 transition-all duration-300 ease-in-out"
              >
                Donate
              </Link>
            </span>
          </div>
        </div>
      </section>

      <section className="w-full relative py-12 bg-[#d3ebc1] flex flex-col items-center">
        <div className="md:max-w-[1350px] flex flex-col justify-between md:px-10 py-4 px-5">
          <div className="flex flex-col gap-5 ">
            <span className="sm:text-2xl text-lg">ABOUT US</span>
            <h1 className="md:text-6xl text-3xl">
              Helping people never doubt that they are{"  "}
              <span className="border-b-4 text-[#343877]">
                Valuable & Powerful
              </span>
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-10">
            <p className="md:w-[590px] mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic qui
              facere, alias saepe ad similique fugit harum vitae blanditiis
              doloremque at laudantium impedit quis ducimus consequatur?
              Doloribus sunt earum voluptatum. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Error laudantium quasi, magnam ullam
              aspernatur facere et aperiam velit nulla eaque officia in
              consequatur aliquid, iusto adipisci, libero doloribus repellendus
              atque!
            </p>
            <span>
              <Link className="px-7 py-2 md:px-12 md:py-3 border-2 border-amber-400 rounded-4xl hover:bg-amber-400 transition-all duration-300 ease-in-out">
                Read More
              </Link>
            </span>
          </div>
        </div>
      </section>

      <section className="w-full relative flex flex-col items-center py-12 ">
        <div className="lg:max-w-[1350px] flex flex-col sm:flex-row items-center justify-between gap-10 px-6 sm:px-10 py-4 font-sans">
          <div className="md:w-[50%] flex flex-col gap-3 md:gap-5">
            <h4 className="md:text-2xl text-lg">WHAT WE DO</h4>
            <h2 className="text-4xl sm:text-6xl font-semibold">
              <span className="text-[#343877]">Life Line</span> Causes
            </h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              distinctio quaerat molestias nulla perspiciatis ducimus, qui
              voluptates sequi at minima dolorum expedita doloremque. Dolores
              eum similique tempora aspernatur fugit magni! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Praesentium ea cupiditate
              maiores vitae consequatur dicta rerum ex necessitatibus vero sint
              esse possimus assumenda nam excepturi, tempore soluta dolores
              quisquam? Ipsam?
            </p>
            <span className="w-fit px-7 py-2 md:px-12 md:py-3 border-2 border-amber-400 rounded-4xl hover:bg-amber-400 transition-all duration-300 ease-in-out">
              More Causes
            </span>
          </div>
          <div className="sm:w-[40%] splashBg relative">
            <img src={aboutUs} alt="about us" />
          </div>
        </div>
        <img
          src={aboutColor}
          className=" max-w-[51%] absolute right-0 -z-10 2xl:right-[23%]"
        />
      </section>

      <section className="w-full relative py-12 mt-20 font-sans flex flex-col items-center">
        <div className="max-w-[1450px] flex flex-col items-center gap-16 px-2">
          <div className="w-full flex flex-col items-center gap-5">
            <span className="sm:text-2xl text-lg">SERVICES</span>
            <h1 className="sm:text-5xl text-2xl">
              <span className="font-bold text-[#343877]">What we do</span> for
              people
            </h1>
          </div>
          <div className="w-full text-lg text-[#343877] font-semibold">
            <ul className="flex flex-col sm:flex-row w-full md:gap-20">
              <li className="flex flex-col items-center">
                <img src={charity} alt="charity" className="w-30 h-25" />
                <span>Medicine Help</span>
              </li>
              <li className="flex flex-col items-center">
                <img src={church} alt="charity" className="w-30 h-25" />
                <span>We Build and Create</span>
              </li>
              <li className="flex flex-col items-center">
                <img src={water} alt="charity" className="w-30 h-25" />
                <span>Water Delivery</span>
              </li>
              <li className="flex flex-col items-center">
                <img src={health} alt="charity" className="w-30 h-25" />
                <span>We Care About</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#d3ebc1] w-full flex flex-col items-center relative bg-cover bg-content py-12 mt-20">
        <div className="max-w-[1450px] flex flex-col gap-50">
          <div className="w-full lg:px-10 px-4 py-12 flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full h-full flex flex-col items-center lg:items-start gap-10">
              <span className="text-lg sm:text-2xl">EVENTS</span>
              <h1 className="text-2xl sm:text-7xl text-center sm:text-start">
                We Organize Fun Events{" "}
                <span className="border-b-4 border-[#343877] pb-2 text-[#343877]">
                  Around the World
                </span>
              </h1>
            </div>
            <div className="eventsInfo flex flex-col gap-10 items-center justify-center h-100 py-10 px-4 text-white">
              <h2 className="text-center text-2xl">
                Help us to create more Events for People
              </h2>
              <Link className="w-fit px-7 py-2 md:px-12 md:py-3 rounded-lg  bg-amber-500  hover:bg-amber-400 transition-all duration-300 ease-in-out">
                Donate
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center lg:flex-row gap-10 px-10">
            <div className="flex flex-col gap-10 p-4 border-l-2 ">
              <span className="font-semibold border-b-2 pb-4 w-fit">
                17 October, 2020
              </span>
              <h2 className="text-xl sm:text-3xl font-semibold">
                Lorem ipsum dolor, sit amet consectetur veritatis nulla sequi .
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                accusantium nesciunt, et sunt vel, veritatis nulla sequi aliquam
                debitis
              </p>
              <span className="w-fit px-7 py-2 md:px-12 md:py-3 border-2 border-amber-400 rounded-4xl hover:bg-amber-400 transition-all duration-300 ease-in-out">
                <Link>READ MORE</Link>
              </span>
            </div>

            <div className="flex flex-col gap-10 p-4 border-l-2 ">
              <span className="font-semibold border-b-2 pb-4 w-fit">
                17 October, 2020
              </span>
              <h2 className="text-xl sm:text-3xl font-semibold">
                Lorem ipsum dolor, sit amet consectetur veritatis nulla sequi .
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                accusantium nesciunt, et sunt vel, veritatis nulla sequi aliquam
                debitis
              </p>
              <span className="w-fit px-7 py-2 md:px-12 md:py-3 border-2 border-amber-400 rounded-4xl hover:bg-amber-400 transition-all duration-300 ease-in-out">
                <Link>READ MORE</Link>
              </span>
            </div>

            <div className="flex flex-col gap-10 p-4 border-l-2 ">
              <span className="font-semibold border-b-2 pb-4 w-fit">
                17 October, 2020
              </span>
              <h2 className="text-xl sm:text-3xl font-semibold">
                Lorem ipsum dolor, sit amet consectetur veritatis nulla sequi.
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                accusantium nesciunt, et sunt vel, veritatis nulla sequi aliquam
                debitis
              </p>
              <span className="w-fit px-7 py-2 md:px-12 md:py-3 border-2 border-amber-400 rounded-4xl hover:bg-amber-400 transition-all duration-300 ease-in-out">
                <Link>READ MORE</Link>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-fit py-12  ">
        <div className="w-full h-fit flex flex-col items-center">
          <div className="w-full flex flex-col items-center px-10">
            <span className="text-lg sm:text-2xl mb-5">OUR PARTNER'S</span>
            <Partners />
          </div>
        </div>
      </section>

      <section className="donation w-full h-fit py-12 mt-12  flex flex-col items-center justify-center text-white">
        <div className="max-w-[1350px] flex flex-col items-center gap-12">
          <span className="text-lg sm:text-2xl">WANT TO HELP US ?</span>
          <h1 className="text-2xl sm:text-5xl md:w-[60%] text-center">
            Help us Raise Moeny for our Projects around the Gloab
          </h1>
          <span className="w-fit px-7 py-2 md:px-12 md:py-3 bg-amber-400 rounded-4xl hover:bg-amber-300 transition-all duration-300 ease-in-out">
            <Link>DONATE</Link>
          </span>
        </div>
      </section>
      <Footer />
    </>
  );
}
