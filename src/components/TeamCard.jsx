import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";
import event from "../assets/events.jpg";

export default function TeamCard(props) {
    const [hover, setHover] = useState(false)
  return (
    <div 
    className={hover ? "w-65 flex flex-col items-center gap-6 bg-[#343877] py-10 transition-all duration-300 ease-in-out" : "w-65 flex flex-col items-center gap-6 py-10 transition-all duration-300 ease-in-out"}
    onMouseEnter={()=> setHover(true)}
    onMouseLeave={()=> setHover(false)}
    >
      <div className="flex items-center gap-4 text-white text-lg">
        <a href="">
          <FaFacebook />
        </a>
        <a href="">
          <FaTwitter />
        </a>
        <a href="">
          <FaInstagram />
        </a>
      </div>
      <div>
        <img src={props.url} alt="teamMember" className="w-38 h-38 rounded-full" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className={hover ? "text-white" : "text-black"}>{props.name}</span>
        <span className={hover ? "text-white" : "text-black"}>{props.title}</span>
      </div>
    </div>
  );
}
