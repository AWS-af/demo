import { FaClock, FaLocationArrow } from "react-icons/fa6";
import React from "react";
import { Link } from "react-router";

export default function EventsCard(props) {
  return (
    <div className="w-full grid lg:grid-cols-5 lg:grid-rows-2 grid-cols-1 grid-rows-2  p-5 bg-[#343877]">
      <div className="lg:col-span-2 lg:row-span-2 col-span-1 row-span-1 flex flex-col items-center justify-center">
        <Link className="w-[70%] sm:h-[70%] overflow-hidden">
          <img
            src={props.imgUrl}
            className="w-full h-full hover:scale-105 transition-all duration-300 ease-in-out"
            alt=""
          />
        </Link>
      </div>
      <div className="lg:col-span-3 lg:col-start-3 lg:row-span-2 col-span-1 row-span-1 row-start-2 flex flex-col justify-center gap-6 p-6">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
          {props.eventName}
        </h1>
        <p>
          {props.eventInfo}
        </p>
        <span className="flex items-center gap-4">
          <FaClock className="text-white text-lg" />
          <span>
            <strong>{props.startMonth}</strong>, {props.startTime} - <strong>{props.endMonth} </strong>,
            {props.endTime}
          </span>
        </span>
        <span className="flex items-center gap-4">
          <FaLocationArrow className="text-white text-lg" />
          <span>{props.eventLocation}</span>
        </span>
      </div>
    </div>
  );
}
