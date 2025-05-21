import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router";
import { FaCaretRight } from "react-icons/fa";
import { FaDove, FaGlobe, FaHeart } from "react-icons/fa6";
import picture from "../assets/promo_3.jpg";
import Education from "../assets/events.jpg";

export default function WhatWeDo() {
  return (
    <>
      <section className="whatWeDo overflow-hidden w-full">
        <Header />
        <div className="w-full flex flex-col gap-5 items-center px-4 lg:px-0 mt-20 text-white">
          <h1 className="md:text-5xl text-3xl text-center">
            WE WORK FOR MAKING A BETTER WORLD
          </h1>
          <h2 className="md:text-xl text-[12px] max-w-[600px] text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur ex sapiente distinctio aut enim cupiditate corporis
            eligendi necessitatibus maxime
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
      </section>

      <section className="w-full overflow-hidden flex flex-col items-center py-12 mt-20">
        <div className="w-full lg:max-w-[1350px] flex flex-col lg:flex-row items-center gap-20 lg:gap-10 md:px-12 px-4">
          <div className="flex flex-col gap-7 flex-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Our Goals and Strategy
            </h2>
            <p className="text-sm lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              reprehenderit, incidunt ea nam placeat alias vero perspiciatis
              provident porro
            </p>
            <Link>
              <span className="w-fit px-7 py-2 md:px-12 md:py-3 border-2 border-amber-400 rounded-4xl hover:bg-amber-400 transition-all duration-300 ease-in-out">
                Read More
              </span>
            </Link>
          </div>
          <div className="flex-1/2 bg-gray-400/30 px-4 py-10 rounded-2xl">
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <span className="text-xl text-amber-400">
                  <FaCaretRight />
                </span>
                <span>
                  <strong>incidunt ea nam placeat: </strong>alias vero
                  perspiciatis provident porro
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-xl text-amber-400">
                  <FaCaretRight />
                </span>
                <span>
                  <strong>incidunt ea nam placeat: </strong>alias vero
                  perspiciatis provident porro
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-xl text-amber-400">
                  <FaCaretRight />
                </span>
                <span>
                  <strong>incidunt ea nam placeat: </strong>alias vero
                  perspiciatis provident porro
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-xl text-amber-400">
                  <FaCaretRight />
                </span>
                <span>
                  <strong>incidunt ea nam placeat: </strong>alias vero
                  perspiciatis provident porro
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-xl text-amber-400">
                  <FaCaretRight />
                </span>
                <span>
                  <strong>incidunt ea nam placeat: </strong>alias vero
                  perspiciatis provident porro
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="whatWeDoCard w-full overflow-hidden py-12 mt-20 flex flex-col items-center ">
        <div className="md:w-full max-w-[1350px] px-4 lg:px-16 flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-6 py-14 px-10 bg-white">
            <h1 className="text-2xl md:text-4xl font-semibold">What We Do</h1>
            <p className="text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              nam eos quos id odio. Ullam odio, illum error dolor labore quod
              nostrum optio ratione tenetur, beatae cumque voluptatibus officiis
              corrupti.
            </p>
            <span className="w-fit px-7 py-2 md:px-12 md:py-3 border-2 border-amber-400 rounded-4xl hover:bg-amber-400 transition-all duration-300 ease-in-out">
              <Link>Read More</Link>
            </span>
          </div>

          <div className="flex sm:flex-row flex-col gap-10">
            <div className="flex flex-col items-center gap-6 p-10 bg-white">
              <span className="flex flex-col gap-3 items-center">
                <FaDove className="text-2xl text-amber-400" />
                <h2 className="text-xl md:text-2xl">Project Name</h2>
              </span>
              <span className="flex flex-col items-center gap-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis consequatur similique nulla at excepturi voluptatum
                  maiores, esse dolores est voluptatibus repudiandae non ut
                  reprehenderit a optio
                </p>
                <Link className=" underline underline-offset-4 hover:text-amber-400 transition-all duration-300 ease-in-out">
                  Read More
                </Link>
              </span>
            </div>

            <div className="flex flex-col items-center gap-6 p-10 bg-white">
              <span className="flex flex-col gap-3 items-center">
                <FaGlobe className="text-2xl text-amber-400" />
                <h2 className="text-xl md:text-2xl">Project Name</h2>
              </span>
              <span className="flex flex-col items-center gap-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis consequatur similique nulla at excepturi voluptatum
                  maiores, esse dolores est voluptatibus repudiandae non ut
                  reprehenderit a optio
                </p>
                <Link className=" underline underline-offset-4 hover:text-amber-400 transition-all duration-300 ease-in-out">
                  Read More
                </Link>
              </span>
            </div>

            <div className="flex flex-col items-center gap-6 p-10 bg-white">
              <span className="flex flex-col gap-3 items-center">
                <FaHeart className="text-2xl text-amber-400" />
                <h2 className="text-xl md:text-2xl">Project Name</h2>
              </span>
              <span className="flex flex-col items-center gap-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis consequatur similique nulla at excepturi voluptatum
                  maiores, esse dolores est voluptatibus repudiandae non ut
                  reprehenderit a optio
                </p>
                <Link className=" underline underline-offset-4 hover:text-amber-400 transition-all duration-300 ease-in-out">
                  Read More
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden flex flex-col items-center py-12">
        <div className="w-full lg:max-w-[1350px] px-6 lg:px-16">
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl sm:text-4xl font-semibold">New Projects</h1>
            <p className="max-w-[600px] text-sm sm:text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
              sequi saepe facilis illum adipisci sint nemo vero reiciendis
              cumque. Numquam perspiciatis quo incidunt excepturi ad impedit rem
              itaque sit illo!
            </p>
          </div>
          <div className="grid grid-cols-1 grid-rows-12 md:grid-cols-6 md:grid-rows-11 text-white">
            <div className="row-span-3 md:col-span-3 md:row-span-6 bg-amber-500 flex flex-col items-center justify-center gap-10 sm:p-10 p-5 ">
              <span className="p-2 px-5 bg-blue-400">Food</span>
              <h2 className="text-xl sm:text-2xl font-semibold">
                Help for the Food
              </h2>
              <p className="text-center text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium a nobis est sed nisi libero, quidem totam ipsa
                ratione amet quisquam ipsam, laudantium excepturi voluptas
                eveniet nihil illo reprehenderit quo.
              </p>
              <span className="text-sm sm:text-base">Goal: 24000$</span>
            </div>

            <div className="row-span-3 row-start-4 md:col-span-3 md:row-span-4 md:col-start-4 relative overflow-hidden">
              <img
                src={Education}
                alt="event"
                className="w-full h-full"
              />
              <div className="w-full h-full absolute left-0 top-0 flex flex-col items-center justify-center gap-4 bg-black/40 sm:p-10 p-5">
                <span className="p-2 px-5 bg-amber-400">Education</span>
                <h2 className="text-xl sm:text-2xl font-semibold">
                  Help for the Education
                </h2>
                <p className="text-center text-sm sm:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium a nobis est sed nisi libero, quidem totam ipsa
                  ratione amet quisquam ipsam, laudantium excepturi voluptas
                  eveniet nihil illo reprehenderit quo.
                </p>
                <span className="text-sm sm:text-base">Goal: 24000$</span>
              </div>
            </div>

            <div className="row-span-3 row-start-7 md:col-span-3 md:row-span-4 md:col-start-1 md:row-start-7 relative overflow-hidden">
              <img
                src={picture}
                alt="event"
                className="w-full h-full hover:scale-105 transition-all duration-300 ease-in-out"
              />
              <div className="w-full h-full absolute left-0 top-0 flex flex-col items-center justify-center gap-4 bg-black/40 sm:p-10 p-5">
                <span className="p-2 px-5 bg-sky-400">Water</span>
                <h2 className="text-xl sm:text-2xl font-semibold">
                  Help for the Water
                </h2>
                <p className="text-center text-sm sm:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium a nobis est sed nisi libero, quidem totam ipsa
                  ratione amet quisquam ipsam, laudantium excepturi voluptas
                  eveniet nihil illo reprehenderit quo.
                </p>
                <span className="text-sm sm:text-base">Goal: 24000$</span>
              </div>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center gap-10 row-span-3 row-start-10 md:col-span-3 md:row-span-6 md:col-start-4 md:row-start-5 sm:p-10 p-5 bg-orange-300">
              <span className="p-2 px-5 bg-red-300">Food</span>
              <h2 className="text-xl sm:text-2xl font-semibold">
                Help for the Food
              </h2>
              <p className="text-center text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium a nobis est sed nisi libero, quidem totam ipsa
                ratione amet quisquam ipsam, laudantium excepturi voluptas
                eveniet nihil illo reprehenderit quo.
              </p>
              <span className="text-sm sm:text-base">Goal: 24000$</span>
            </div>
          </div>
        </div>
      </section>


      <section 
      className="w-full h-[500px] overflow-hidden flex flex-col items-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${picture})` }}
      >
        <div className="w-full h-full lg:max-w-[1350px] flex flex-col items-center justify-center gap-10">
          <h2 className="text-2xl sm:text-4xl font-semibold">Subscribe</h2>
          <form action="" className="w-full flex flex-col items-center gap-5">
            <input type="email" name="email" placeholder="Enter your email" className="w-[80%] sm:w-[340px] p-3 bg-white text-black" />
            <input type="submit" value="Submit" className="py-2 px-4 bg-amber-400 text-black cursor-pointer" />
          </form>
        </div>

      </section>
      <Footer />
    </>
  );
}
