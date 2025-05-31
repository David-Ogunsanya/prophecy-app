import React, { useState } from "react";
import "../App.css";

const prophecies = [
  {
    image: "/images/fighting_prophecy.png",
    title: "Jesus Prophecy on Many",
    description: "Prophecy",
  },
  {
    image: "/images/rumours_wars.png",
    title: "Jesus Prophecy On Wars",
    description: "Prophecy",
  },
  {
    image: "/images/rumours_wars.png",
    title: "Jesus Prophecy",
    description: "Prophecy",
  },
  {
    image: "/images/Daniel_2.png",
    title: "Daniel's Vision",
    description: "Prophecy",
  },
];

export default function ProphecyTodayCarousel() {
  const [index, setIndex] = useState(0);
  const [slideClass, setSlideClass] = useState(""); // "slide-left" or "slide-right"
  const total = prophecies.length;

  const getItem = (i) => prophecies[(i + total) % total];

  const goNext = () => {
    setSlideClass("slide-left");
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % total);
      setSlideClass("");
    }, 1200); // match animation duration
  };

  const goPrev = () => {
    setSlideClass("slide-right");
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + total) % total);
      setSlideClass("");
    }, 1200);
  };

  const leftBlur = getItem(index - 1);
  const center1 = getItem(index);
  const center2 = getItem(index + 1);
  const rightBlur = getItem(index + 2);
  const allCards = [leftBlur, center1, center2, rightBlur];

  return (
    <div className="relative w-full max-w-[2800px] h-[680px] mx-auto overflow-hidden px-2">
      {/* Arrows */}
      <button
        onClick={goPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center"
      >
        &#8592;
      </button>
      <button
        onClick={goNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center"
      >
        &#8594;
      </button>

      {/* Animated Card Strip */}
      <div className={`overflow-hidden`}>
        <div
          className={`flex justify-center gap-6  ${slideClass}`}
        >
          {allCards.map((item, i) => {
            const isBlurred = i === 0 || i === 3;
            return (
              <div
                key={i}
                className="flex-shrink-0 overflow-hidden bg-white"
                style={{
                  width: "672px",
                  filter: isBlurred ? "blur(5px)" : "none",
                  opacity: isBlurred ? 0.4 : 1,
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[380px] object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="p-4">
                  <div className="uppercase text-xs font-bold text-gray-500 mb-2">
                    PROPHECY
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <a
                    href="#"
                    className="text-blue-700 font-medium hover:underline text-sm"
                  >
                    Learn more &gt;
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
