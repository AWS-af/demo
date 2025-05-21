import React, { useState } from "react";
import { Link } from "react-router";
import CountUp from "react-countup";
import Header from "./Header";
import Footer from "./Footer";
import Styles from "../Styles";
import TeamCard from "./TeamCard";
import { FaHandHoldingWater, FaHeartbeat, FaBookOpen } from "react-icons/fa";
import { FaHouseChimneyMedical } from "react-icons/fa6";
import events from "../assets/events1.jpg";
import teamImg from '../assets/team_1.jpg'

export default function AboutUs() {
  const images = [
    { src: events, text: "Image Information" },
    { src: events, text: "Image Information" },
    { src: events, text: "Image Information" },
    { src: events, text: "Image Information" },
  ];
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <section className="aboutUs overflow-hidden w-full">
        <Header />
        <div className="w-full flex flex-col gap-5 items-center mt-20 text-white">
          <h1 className="md:text-7xl text-7xl">WE LOVE ALL PEOPLE</h1>
          <h2 className="md:text-2xl text-[15px] max-w-[600px] text-center">
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
      <section className="w-full overflow-hidden py-12 bg-amber-400 flex flex-col items-center">
        <div className="max-w-[1350px] flex flex-col px-4 sm:px-8 gap-10">
          <div className="self-center flex flex-col items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-semibold">WHAT WE DO</h1>
            <p className="text-lg sm:text-xl">
              We work for the better future of people in need
            </p>
          </div>
          <div className="sm:px-16">
            <ul className="grid sm:grid-cols-[5,1fr] sm:grid-rows-[5, 1fr] grid-cols-[2,1fr] grid-rows-[auto] gap-8">
              <li
                style={{ backgroundImage: `url(${events})` }}
                className={`${Styles.whatWeDoLi}`}
              >
                <Link className={`${Styles.whatWeDoLink}`}>
                  <h4 className="font-semibold">First Story</h4>
                  <h5 className="text-gray-500 text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugit,
                  </h5>
                </Link>
              </li>
              <li
                style={{ backgroundImage: `url(${events})` }}
                className={`${Styles.whatWeDoLi}`}
              >
                <Link className={`${Styles.whatWeDoLink}`}>
                  <h4 className="font-semibold">Second Story</h4>
                  <h5 className="text-gray-500 text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugit,
                  </h5>
                </Link>
              </li>

              <li
                className={`${Styles.whatWeDoLi} grid-rows-[auto] sm:row-start-2`}
                style={{ backgroundImage: `url(${events})` }}
              >
                <Link className={`${Styles.whatWeDoLink}`}>
                  <h4 className="font-semibold">Third Story</h4>
                  <h5 className="text-gray-500 text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugit,
                  </h5>
                </Link>
              </li>
              <li
                className={`${Styles.whatWeDoLi} grid-rows-[auto] sm:row-start-2`}
                style={{ backgroundImage: `url(${events})` }}
              >
                <Link className={`${Styles.whatWeDoLink}`}>
                  <h4 className="font-semibold">Fourth Story</h4>
                  <h5 className="text-gray-500 text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugit,
                  </h5>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="weDoNow w-full overflow-hidden py-12 flex flex-col items-center justify-center">
        <div className="lg:max-w-[1350px] sm:px-52 text-white -mt-25 ">
          <div className="w-full h-full sm:px-10 flex flex-col items-center gap-10 p-4">
            <h1 className="text-2xl sm:text-4xl font-semibold">
              Our Current Project
            </h1>
            <p className="text-center text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
              minima labore debitis laudantium. Quidem vero repudiandae tempora
              provident quos ea laboriosam, deleniti, modi nesciunt tenetur
              aliquid debitis nihil excepturi doloribus. Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Id blanditiis cupiditate
              accusantium repellat incidunt accusamus consectetur est dolorum
              molestias, illum dolore totam voluptatum dicta quod maiores enim
              nemo asperiores ratione!
            </p>
            <span>
              <Link className="px-7 py-2 md:px-12 md:py-3 bg-amber-400 hover:bg-amber-200 transition-all duration-300 ease-in-out">
                Details
              </Link>
            </span>
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden flex flex-col items-center py-20 bg-gray-200">
        <div className="max-w-[1350px] sm:px-12 px-4">
          <div className="w-full flex flex-col gap-20">
            <h1 className="text-2xl sm:text-5xl font-semibold self-center">
              Our Future Plans
            </h1>
            <ul className="w-full flex flex-col lg:flex-row  gap-6 sm:px-16 lg:px-2">
              <li className={`${Styles.futureProjectLi}`}>
                <Link className="flex flex-col items-center gap-4">
                  <span className="text-5xl text-amber-400">
                    <FaHandHoldingWater />
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold">
                    Water Project
                  </h3>
                  <p className="text-center text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Itaque ab iste assumenda perspiciatis veniam, rem suscipit
                    harum! Delectus ullam fuga quibusdam.
                  </p>
                </Link>
              </li>

              <li className={`${Styles.futureProjectLi}`}>
                <Link className="flex flex-col items-center gap-4">
                  <span className="text-5xl text-amber-400">
                    <FaBookOpen />
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold">
                    Education Project
                  </h3>
                  <p className="text-center text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Itaque ab iste assumenda perspiciatis veniam, rem suscipit
                    harum! Delectus ullam fuga quibusdam.
                  </p>
                </Link>
              </li>
              <li className={`${Styles.futureProjectLi}`}>
                <Link className="flex flex-col items-center gap-4">
                  <span className="text-5xl text-amber-400">
                    <FaHeartbeat />
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold">
                    Health Project
                  </h3>
                  <p className="text-center text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Itaque ab iste assumenda perspiciatis veniam, rem suscipit
                    harum! Delectus ullam fuga quibusdam.
                  </p>
                </Link>
              </li>
              <li className={`${Styles.futureProjectLi}`}>
                <Link className="flex flex-col items-center gap-4">
                  <span className="text-5xl text-amber-400">
                    <FaHouseChimneyMedical />
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold">
                    Building Project
                  </h3>
                  <p className="text-center text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Itaque ab iste assumenda perspiciatis veniam, rem suscipit
                    harum! Delectus ullam fuga quibusdam.
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden py-12 flex flex-col items-center">
        <div className="w-full lg:max-w-[1350px] flex flex-col items-center gap-10 px-6">
          <h1 className="text-2xl sm:text-4xl text-center font-semibold">
            Your Help can Make a Difference
          </h1>
          <div>
            <ul className="w-full flex flex-col sm:flex-row items-center gap-15">
              <li className="flex flex-col items-center gap-3">
                <CountUp
                  start={0}
                  end={856}
                  duration={5}
                  className={`${Styles.aboutUsCounter}`}
                />
                <span className="font-semibold">People's Helped</span>
              </li>
              <li className="flex flex-col items-center gap-3">
                <CountUp
                  start={0}
                  end={12890}
                  duration={5}
                  className={`${Styles.aboutUsCounter}`}
                />
                <span className="font-semibold">Donation's Recived</span>
              </li>
              <li className="flex flex-col items-center gap-3">
                <CountUp
                  start={0}
                  end={10}
                  duration={6}
                  className={`${Styles.aboutUsCounter}`}
                />
                <span className="font-semibold">Countries Visited</span>
              </li>
              <li className="flex flex-col items-center gap-3">
                <CountUp
                  start={0}
                  end={78}
                  duration={5}
                  className={`${Styles.aboutUsCounter}`}
                />
                <span className="font-semibold">Houses Built</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full h-fit overflow-hidden py-24 flex flex-col items-center bg-[#343877] text-white">
        <div className="w-full lg:w-[70%] flex flex-col items-center gap-10 px-6">
          <h1 className="text-2xl sm:text-4xl">More About Life Line</h1>
          <p className="text-center text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa corporis consequatur ex praesentium necessitatibus deleniti veniam impedit reiciendis doloremque repellat numquam delectus consequuntur quos sapiente, odit voluptas nostrum modi aliquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis culpa in optio. Illo, cupiditate ut asperiores, tenetur dolorum quis consectetur ratione veniam nisi omnis voluptates voluptate sequi dignissimos error dolores?</p>
          <span className="border-2 border-white rounded-4xl py-2 px-4 hover:bg-white hover:text-black  transition-all duration-300 ease-in-out">
            <Link>Read More</Link>
          </span>
        </div>
      </section>

      <section className="w-full overflow-hidden flex flex-col items-center py-20 bg-[#343877] text-white">
        <div className="w-full lg:w-[80%] flex flex-col items-center gap-10">
          <CountUp start={0} end={53} duration={5} className="text-2xl sm:text-4xl border-2 p-5 rounded-full"/>
          <h1 className="text-2xl sm:text-5xl">Projects Done</h1>
        </div>
      </section>

      <section className="w-full overflow-hidden py-12 flex flex-col items-center mb-20">
        <div className="w-full lg:max-w-[1350px] flex flex-col items-center gap-30 px-12">
          <h1 className="text-2xl sm:text-5xl font-semibold">Our Gallery</h1>
          <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10">
            {images.map((img, index) => (
              <div key={index} className="relative group overflow-hidden">
                <img
                  src={img.src}
                  alt={`Image ${index}`}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-amber-400/50 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full overflow-hidden flex flex-col items-center py-12 px-6 sm:px-12">
        <div className="w-full lg:max-w-[1350px] flex flex-col items-center gap-15">
          <div>
            <h1 className="text-2xl sm:text-5xl font-semibold">
              <span className="text-[#343877]">Meet</span> our Team
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-10 justify-center">
            <TeamCard name="name" title = "ceo" url = {teamImg} />
            <TeamCard name="name" title = "ceo" url = {teamImg} />
            <TeamCard name="name" title = "ceo" url = {teamImg} />
            <TeamCard name="name" title = "ceo" url = {teamImg} />
            <TeamCard name="name" title = "ceo" url = {teamImg} />
            <TeamCard name="name" title = "ceo" url = {teamImg} />
            <TeamCard name="name" title = "ceo" url = {teamImg} />
            <TeamCard name="name" title = "ceo" url = {teamImg} />
          </div>
          <span className="border-2 border-[#343877] rounded-4xl py-2 px-4 hover:bg-[#343877] hover:text-white  transition-all duration-300 ease-in-out">
            <Link>Become Part of our Team</Link>
          </span>
        </div>
      </section>
      <Footer />
    </>
  );
}
