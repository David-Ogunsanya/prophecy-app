import React, { useEffect, useState } from 'react';

export default function ProphecyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    {
      src: "/images/psalms_image.png",
      link: "#",
      caption: "Psalms",
      captionStyle: "bottom-8 left-4 md:bottom-12 md:left-8",
      buttonStyle: "bottom-4 left-4 md:bottom-8 md:left-8",
    },
    {
      src: "/images/zechariah_image.png",
      link: "#",
      caption: "Zechariah",
      captionStyle: "bottom-8 left-4 md:bottom-12 md:left-8",
      buttonStyle: "bottom-4 left-4 md:bottom-8 md:left-8",
    },
    {
      src: "/images/malachi_image.png",
      link: "#",
      caption: "Malachi",
      captionStyle: "bottom-8 left-4 md:bottom-12 md:left-8",
      buttonStyle: "bottom-4 left-4 md:bottom-8 md:left-8",
    },
    {
      src: "/images/micah_image.png",
      link: "#",
      caption: "Micah",
      captionStyle: "bottom-8 left-4 md:bottom-12 md:left-8",
      buttonStyle: "bottom-4 left-4 md:bottom-8 md:left-8",
    },
    {
      src: "/images/isaiah_looking_up.png",
      link: "#",
      caption: "Isaiah",
      captionStyle: "top-8 right-4 md:top-12 md:right-12",
      buttonStyle: "top-20 right-4 md:top-32 md:right-12",
    },
  ];

  const second_images = [
    { src: "/images/isaiah_looking_up.png", link: "#" },
    { src: "/images/isaiah_looking_up.png", link: "#" },
    { src: "/images/isaiah_looking_up.png", link: "#" },
    { src: "/images/isaiah_looking_up.png", link: "#" },
    { src: "/images/isaiah_looking_up.png", link: "#" },
    { src: "/images/isaiah_looking_up.png", link: "#" },
    { src: "/images/isaiah_looking_up.png", link: "#" },
    { src: "/images/isaiah_looking_up.png", link: "#" },
    { src: "/images/isaiah_looking_up.png", link: "#" },
  ];

  return (
    <div className="bg-white w-full min-h-screen overflow-hidden">
      {/* Hero Videos Section */}
      <section className="w-full">
        {/* Revelation Video */}
        <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[580px]">
          <video
            src="/images/revelation_1.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 90%" }}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 flex items-center justify-center md:justify-end px-6 md:px-12 lg:px-24">
            <div className="text-center md:text-left max-w-xl">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold drop-shadow-lg mb-4">
                Revelation
              </h1>
              <p className="text-white text-base md:text-lg lg:text-xl drop-shadow-md mb-6">
                The Book of Revelation filled with prophecies. Visions stories about a particular king
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="text-white text-lg md:text-xl lg:text-2xl py-2 px-4 transition duration-500 flex items-center justify-center gap-2 hover:-translate-y-1">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </button>
                <button className="text-white text-lg md:text-xl lg:text-2xl py-2 px-4 flex items-center justify-center gap-2 hover:-translate-y-1 duration-500">
                  Summary
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Daniel Video */}
        <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[580px] mt-1">
          <video
            src="/images/daniel_1.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 30%" }}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 flex items-center justify-center md:justify-end px-6 md:px-12 lg:px-0">
            <div className="text-center md:text-left max-w-xl">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold drop-shadow-lg mb-4">
                Daniel
              </h1>
              <p className="text-white text-base md:text-lg lg:text-xl drop-shadow-md mb-6">
                The Book of Daniel filled with prophecies. Visions stories about a particular king
              </p>
              <div className="flex flex-row gap-4 justify-center md:justify-start">
                <button className="text-white text-lg md:text-xl lg:text-2xl transition duration-500 hover:-translate-y-1 flex items-center justify-center gap-2">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </button>
                <button className="text-white text-lg md:text-xl lg:text-2xl py-2 px-4 duration-500 hover:-translate-y-1 flex items-center justify-center gap-2">
                  Summary
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Isaiah Video */}
        <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[580px] mt-1">
          <video
            src="/images/isaiah_1.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 0%" }}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 flex items-center justify-center md:justify-start px-6 md:px-12 lg:px-24">
            <div className="text-center md:text-left max-w-xl">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold drop-shadow-lg mb-4">
                Isaiah
              </h1>
              <p className="text-white text-base md:text-lg lg:text-xl drop-shadow-md mb-6">
                The Book of Daniel filled with prophecies. Visions stories about a particular king
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="text-white text-lg md:text-xl lg:text-2xl py-2 px-4 transition duration-500 hover:-translate-y-1 flex items-center justify-center gap-2">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </button>
                <button className="text-white text-lg md:text-xl lg:text-2xl py-2 px-4 duration-500 hover:-translate-y-1 flex items-center justify-center gap-2">
                  Summary
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="w-full bg-white py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 px-2 md:px-4">
          {/* Ezekiel */}
          <div className="relative h-[50vh] md:h-[70vh] lg:h-[590px] bg-gray-100 rounded-lg overflow-hidden">
            <img src="/images/ezekiel_image.png" alt="Ezekiel" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-12">
              <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-bold mb-3">Ezekiel</h1>
              <p className="text-base md:text-lg lg:text-xl text-white mb-4 max-w-md">
                Will replace in the future
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-blue-500 text-white text-base md:text-lg py-2 px-6 rounded-full hover:bg-blue-600 transition">
                  Learn More
                </button>
                <button className="text-white text-base md:text-lg py-2 px-6 rounded-full border border-white hover:bg-white hover:text-black transition">
                  Summary
                </button>
              </div>
            </div>
          </div>

          {/* Isaiah */}
          <div className="relative h-[50vh] md:h-[70vh] lg:h-[590px] bg-gray-900 rounded-lg overflow-hidden">
            <img src="/images/isaiah_looking_up.png" alt="Isaiah" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-end items-end p-6 md:p-8 lg:p-12">
              <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-bold mb-3">Isaiah</h1>
              <p className="text-base md:text-lg lg:text-xl text-white mb-4 max-w-md text-right">
                Visions stories about different future events
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-blue-500 text-white text-base md:text-lg py-2 px-6 rounded-full hover:bg-blue-600 transition">
                  Learn More
                </button>
                <button className="text-white text-base md:text-lg py-2 px-6 rounded-full border border-white hover:bg-white hover:text-black transition">
                  Summary
                </button>
              </div>
            </div>
          </div>

          {/* Jeremiah */}
          <div className="relative h-[50vh] md:h-[70vh] lg:h-[580px] rounded-lg overflow-hidden">
            <video 
              src="/images/jeremiah_1.mp4" 
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-12">
              <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-bold mb-3">Jeremiah</h1>
              <p className="text-base md:text-lg lg:text-xl text-white mb-4 max-w-md">
                Will replace in the future
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-blue-500 text-white text-base md:text-lg py-2 px-6 rounded-full hover:bg-blue-600 transition">
                  Learn More
                </button>
                <button className="text-white text-base md:text-lg py-2 px-6 rounded-full border border-white hover:bg-white hover:text-black transition">
                  Summary
                </button>
              </div>
            </div>
          </div>

          {/* Joel */}
          <div className="relative h-[50vh] md:h-[70vh] lg:h-[580px] bg-white rounded-lg overflow-hidden">
            <img src="/images/joel_image.png" alt="Joel" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-start items-end p-6 md:p-8 lg:p-12">
              <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-bold mb-3">Joel</h1>
              <p className="text-base md:text-lg lg:text-xl text-white mb-4 max-w-md text-right">
                Will replace in the future
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-blue-500 text-white text-base md:text-lg py-2 px-6 rounded-full hover:bg-blue-600 transition">
                  Learn More
                </button>
                <button className="text-white text-base md:text-lg py-2 px-6 rounded-full border border-white hover:bg-white hover:text-black transition">
                  Summary
                </button>
              </div>
            </div>
          </div>

          {/* Matthew */}
          <div className="relative h-[50vh] md:h-[70vh] lg:h-[580px] bg-white rounded-lg overflow-hidden">
            <img src="/images/matthew_prophecy.png" alt="Matthew" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-8 lg:p-12">
              <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-bold mb-3">Matthew</h1>
              <p className="text-base md:text-lg lg:text-xl text-white mb-4 max-w-md">
                Will replace in the future
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-blue-500 text-white text-base md:text-lg py-2 px-6 rounded-full hover:bg-blue-600 transition">
                  Learn More
                </button>
                <button className="text-white text-base md:text-lg py-2 px-6 rounded-full border border-white hover:bg-white hover:text-black transition">
                  Summary
                </button>
              </div>
            </div>
          </div>

          {/* Genesis */}
          <div className="relative h-[50vh] md:h-[70vh] lg:h-[580px] bg-black rounded-lg overflow-hidden">
            <img src="/images/genesis_image.png" alt="Genesis" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-end items-end p-6 md:p-8 lg:p-12">
              <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-bold mb-3">Genesis</h1>
              <p className="text-base md:text-lg lg:text-xl text-white mb-4 max-w-md text-right">
                Will replace in the future
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-blue-500 text-white text-base md:text-lg py-2 px-6 rounded-full hover:bg-blue-600 transition">
                  Learn More
                </button>
                <button className="text-white text-base md:text-lg py-2 px-6 rounded-full border border-white hover:bg-white hover:text-black transition">
                  Summary
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="bg-white" style={{ width: "1728px", height: "800px" }}>
    <div className="overflow-visible w-[1600px] h-[700px] mx-auto relative">
        <div
        className="flex transition-transform duration-1000 ease-in-out gap-4"
        style={{
            width: `${images.length * (1230 + 24)}px`,
            transform: `translateX(calc(-${currentIndex * (1230 + 24)}px + 230px))`,
        }}
        >   
      {images.map((img, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={index}
            className="relative flex-shrink-0 flex justify-center items-center transition-all duration-700"
            style={{
              width: "1230px",
              height: "700px",
              filter: isActive ? "blur(0px)" : "blur(5px)",
              opacity: isActive ? 1 : 0.7,
              transform: isActive ? "scale(1)" : "scale(0.98)",
            }}
          >
            <a
              href={isActive ? img.link || "#" : "#"}
              onClick={(e) => {
                if (!isActive) {
                  e.preventDefault();
                  setCurrentIndex(index);
                }
              }}
              className="block w-full h-full rounded-[12px]"
              style={{
                backgroundImage: `url(${img.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Text and button overlay */}
              <div className="absolute w-full h-full">
                <p
                  className={`absolute text-[6em] text-white font-sangbleu font-normal tracking-wide ${img.captionStyle}`}
                >
                  {img.caption || "Default caption"}
                </p>
                <button
                  className={`absolute text-black border-white font-sans text-lg py-2 px-6 rounded-full bg-white hover:bg-slate-100 hover:text-black transition duration-300 ${img.buttonStyle}`}
                  style={{ border: "1px solid white" }}
                >
                  Summary
                </button>
              </div>
            </a>
          </div>
                );
                })}
                </div>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center mt-4 gap-3">
                {images.map((_, index) => (
                <button
                    key={index}
                    className={`w-[8px] h-[8px] rounded-full ${
                    currentIndex === index ? "bg-black" : "bg-gray-400"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                ></button>
                ))}
            </div>
            </section>

      {/* Marquee Section */}
      <section className="w-full bg-white py-8 overflow-hidden">
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}</style>
        <div className="relative">
          <div className="flex animate-marquee">
            {[...second_images, ...second_images].map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[250px] md:w-[350px] lg:w-[417px] h-[150px] md:h-[200px] lg:h-[236px] mx-2"
              >
                <a
                  href={img.link || "#"}
                  className="block w-full h-full rounded-lg overflow-hidden"
                  style={{
                    backgroundImage: `url(${img.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}