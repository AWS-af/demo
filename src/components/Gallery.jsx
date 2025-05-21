import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import pic from "../assets/promo_1.jpg";
import pic2 from "../assets/promo_3.jpg";


export default function Gallery() {
  const images = [
    pic,
    pic2,
    pic,
    pic2,
    pic,
    pic2,
    pic,
    pic2,
    pic,
    pic2,
    pic,
    pic2 /*ADD MORE PICTURES HERE */,
  ];

  const [selectedIndex, setSelectedIndex] =
    useState(null); /*This state is used to show the selected pictures index */

  const openImage = (index) => {
    setSelectedIndex(index);
    /* This function is used to open the image and send its index to the selectedIndex state */
  };

  const closeImage = () => {
    setSelectedIndex(null);
    /* This function is used to close the image when the x arow is clicked  */
  };

  const showPrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    /* This function is used to show the previes picture when the left arrow is clicked  */
  };

  const showNext = () => {
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    /* This function is used to to show the next image when the right arrow is clicked */
  };

  return (
    <>
      <section className="gallery overflow-hidden w-full">
        <Header />
        <div className="w-full flex flex-col gap-5 items-center mt-20 text-white">
          <h1 className="md:text-7xl text-4xl">OUR GALLERY</h1>
          <h2 className="md:text-2xl text-[12px] max-w-[600px] text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur ex sapiente distinctio aut enim cupiditate corporis
            eligendi necessitatibus maxime
          </h2>
        </div>
      </section>

      <section className="w-full overflow-hidden flex flex-col items-center py-12 md:px-8 lg:px-20 pt-20 bg-[#d3ebc1] text-[#343877]">
        <div className="w-full lg:max-w-[1350px] flex flex-col gap-10 ">
          <span className="p-4 ">
            <h1 className="text-2xl sm:text-6xl font-semibold border-b-2 pb-4">
              The Moments we captured during our Journey
            </h1>
          </span>
          <div>
            {/* Gallery Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-4">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Image ${i + 1}`}
                  className="cursor-pointer shadow-md hover:scale-105 transition-transform duration-300 ease-in-out"
                  onClick={() => openImage(i)}
                />
              ))}
            </div>

            {/* Lightbox Modal */}
            {selectedIndex !== null && (
              <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                <button
                  onClick={closeImage}
                  className="absolute top-4 right-6 text-white text-2xl"
                >
                  <FaTimes />
                </button>

                <button
                  onClick={showPrev}
                  className="absolute left-4 text-white text-3xl"
                >
                  <FaArrowLeft />
                </button>

                <img
                  src={images[selectedIndex]}
                  alt="Enlarged"
                  className="max-h-[80%] max-w-[90%] shadow-lg"
                />

                <button
                  onClick={showNext}
                  className="absolute right-4 text-white text-3xl"
                >
                  <FaArrowRight />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      <section
        className="w-full h-[500px] overflow-hidden flex flex-col items-center bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${pic2})` }}
      >
        <div className="w-full h-full lg:max-w-[1350px] flex flex-col items-center justify-center gap-10">
          <h2 className="text-2xl sm:text-4xl font-semibold">Subscribe</h2>
          <form action="" className="w-full flex flex-col items-center gap-5">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-[80%] sm:w-[340px] p-3 bg-white text-black"
            />
            <input
              type="submit"
              value="Submit"
              className="py-2 px-4 bg-amber-400 text-black cursor-pointer"
            />
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
