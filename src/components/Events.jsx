import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Styles from "../Styles";
import picture from "../assets/about-us.jpg";
import picture_2 from "../assets/promo_3.jpg";
import EventsCard from "./EventsCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useState } from "react";

export default function Events() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <section className="events overflow-hidden w-full">
        <Header />
        <div className="w-full flex flex-col gap-5 items-center mt-20 text-white">
          <h1 className="md:text-7xl text-4xl">LIFE LINE EVENTS</h1>
          <h2 className="md:text-2xl text-[12px] max-w-[600px] text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur ex sapiente distinctio aut enim cupiditate corporis
            eligendi necessitatibus maxime
          </h2>
        </div>
      </section>
      <section className="w-full overflow-hidden lg:py-12 flex flex-col items-center md:px-12">
        <div className="w-full lg:max-w-[1350px] text-white/90 sm:p-20 flex flex-col items-center gap-10">
          <EventsCard
            imgUrl={picture}
            eventName="Event Name"
            eventInfo=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing eli Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            startMonth="October 10"
            endMonth="October 12"
            startTime="10:00 AM"
            endTime="10:00 AM"
            eventLocation=" Dark Spurt, San Francisco, CA 94528, USA"
          />
          <EventsCard
            imgUrl={picture}
            eventName="Event Name"
            eventInfo=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing eli Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            startMonth="October 10"
            endMonth="October 12"
            startTime="10:00 AM"
            endTime="10:00 AM"
            eventLocation=" Dark Spurt, San Francisco, CA 94528, USA"
          />
          <EventsCard
            imgUrl={picture}
            eventName="Event Name"
            eventInfo=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing eli Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            startMonth="October 10"
            endMonth="October 12"
            startTime="10:00 AM"
            endTime="10:00 AM"
            eventLocation=" Dark Spurt, San Francisco, CA 94528, USA"
          />
          <EventsCard
            imgUrl={picture}
            eventName="Event Name"
            eventInfo=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing eli Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            startMonth="October 10"
            endMonth="October 12"
            startTime="10:00 AM"
            endTime="10:00 AM"
            eventLocation=" Dark Spurt, San Francisco, CA 94528, USA"
          />
          <EventsCard
            imgUrl={picture}
            eventName="Event Name"
            eventInfo=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing eli Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            startMonth="October 10"
            endMonth="October 12"
            startTime="10:00 AM"
            endTime="10:00 AM"
            eventLocation=" Dark Spurt, San Francisco, CA 94528, USA"
          />
          <EventsCard
            imgUrl={picture}
            eventName="Event Name"
            eventInfo=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing eli Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            startMonth="October 10"
            endMonth="October 12"
            startTime="10:00 AM"
            endTime="10:00 AM"
            eventLocation=" Dark Spurt, San Francisco, CA 94528, USA"
          />
        </div>
        <div className="flex items-center justify-center space-x-2 mt-6">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handleClick(page)}
              className={`px-4 py-2 border rounded-full transition 
            ${
              page === currentPage
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-200"
            }`}
            >
              {page}
            </button>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
