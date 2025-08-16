import React, { useEffect, useState } from 'react';
import './shooting_stars.scss';



export default function ProphecyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
    {
        src: "/images/psalms_image.png",
        link: "#",
        caption: "Psalms",
        captionStyle: "bottom-[3.5em] left-[0.2em]",
        buttonStyle: "bottom-[20px] left-[0.8em]",
    },
    {
        src: "/images/zechariah_image.png",
        link: "#",
        caption: "Zechariah",
        captionStyle: "-bottom-[0.25em] left-[8em]",
        buttonStyle: "bottom-[20px] left-[0.8em]",
    },
    {
        src: "/images/malachi_image.png",
        link: "#",
        caption: "Malachi",
        captionStyle: "-bottom-[0.2em] left-[9em]",
        buttonStyle: "bottom-[20px] left-[0.8em]",
    },
        {
        src: "/images/micah_image.png",
        link: "#",
        caption: "Micah",
        captionStyle: "-bottom-[0.2em] left-[9em]",
        buttonStyle: "bottom-[20px] left-[0.8em]",
    },
        {
        src: "/images/isaiah_looking_up.png",
        link: "#",
        caption: "Isaiah",
        captionStyle: "top-[40px] right-[80px]",
        buttonStyle: "top-[150px] right-[80px]",
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
        <div className="bg-white max-w-full min-h-screen overflow-hidden">
            <section style={{width: "1728px", height: "1180px", backgroundColor: "white"}}>
                <div className="shooting-star-container inset-y-2 shadow-lg" style={{ width: "1728px", height: "580px", position: "relative", overflow: "hidden" }}>
                    <video
                        src="/images/revelation_1.mp4"
                        className="absolute top-0 left-0 md:w-32 lg:w-48 w-full h-full object-cover"
                        style={{ width: "100%", height: "100%", objectPosition: "center 90%" }}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                        <div className="absolute top-[9em] right-[0em] flex flex-col justify-center items-center z-10">
                            <h1 className="text-white text-6xl font-sans font-semibold drop-shadow-lg mb-4">Revelation</h1>
                            <p className="text-white text-xl mr-10 font-graphik drop-shadow-md mb-3 max-w-xl text-center">
                            The Book of Revelation filled with prophecies. Visions stories about a particular king
                            </p>
                            <div className="flex flex-row gap-2">
                            <button className="text-white font-graphik text-2xl py-2 px-4 transition duration-500 mr-4 flex items-center gap-2 hover:-translate-y-2">
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                                </svg>
                            </button>
                            <button className="bg-transparent text-white font-sans text-2xl py-2 px-4 flex items-center gap-2 hover:-translate-y-2 duration-500">
                                Summary
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                                </svg>
                            </button>
                        </div>
                        </div>
                    
                </div>
                <div className="inset-y-3 mt-3" style={{width: "1728px", height: "580px"}}>
                    <div className="grid " style={{width: "1728px", height: "580px"}}>
                        
                        <div className="flex justify-center relative" style={{ height: "580px" }}>
                            <video
                                src="/images/daniel_1.mp4"
                                className="absolute top-0 left-0 md:w-32 lg:w-48 w-full h-full object-cover"
                                style={{ width: "100%", height: "100%", objectPosition: "center 30%" }}
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                                <div className="absolute top-[9em] right-[0em] flex flex-col justify-center items-center z-10">
                                    <h1 className="text-white text-6xl font-graphik font-semibold drop-shadow-lg mb-4">Daniel</h1>
                                    <p className="text-white text-xl font-graphik drop-shadow-md mb-8 max-w-xl text-center">
                                    The Book of Daniel filled with prophecies. Visions stories about a particular king
                                    </p>
                                    <div className="flex flex-row gap-2">
                                    <button className="text-white font-graphik text-2xl py-2 px-4 transition duration-500 hover:-translate-y-2 mr-4 flex items-center gap-2">
                                        Learn More
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                                        </svg>
                                    </button>
                                    <button className="bg-transparent text-white font-sans text-2xl py-2 px-4 duration-500 hover:-translate-y-2 flex items-center gap-2">
                                        Summary
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                                        </svg>
                                    </button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="bg-white" style={{width: "1728px", height: "1780px"}}>
                <div className="grid grid-cols-2 ml-3 mt-2">
                    <div className="relative bg-[#f5f5f7]" style={{width: "846px", height: "590px"}}>
                        <img src="/images/ezekiel_image.png" alt="" className="w-full h-full object-cover object-center rounded-lg" />
                        {/* Text Overlay */}
                        <div className="absolute bottom-[14em] mr-[16em] mt-[2em] text-white px-4 py-2 rounded">
                            <h1 className="text-7xl ml-[0.8em] tracking-wide text-white font-sans">Ezekiel</h1>
                            <p className="text-xl font-sans ml-[2.8em] mt-3 text-white  tracking-wider">
                                Will replace in the future
                            </p>
                            <button className="bg-[#0071e3] text-white font-sans text-lg py-2 px-4 rounded-full border-black ml-[2em] mt-[1em]">
                                Learn More
                            </button>
                            <button
                                className="text-white border-white font-sans ml-[2em] text-lg py-2 px-4 rounded-full hover:bg-white hover:text-black transition duration-300 mt-3"
                                style={{ border: "1px solid white" }}
                                >
                                Summary
                            </button>
                        </div>
                    </div>
                    
                    <div className="relative rounded-lg overflow-hidden" style={{ width: "846px", height: "590px", backgroundColor: "rgb(1, 1, 12)" }}>
                        <img src="/images/isaiah_looking_up.png" alt="" className="w-full h-full object-center object-cover rounded-lg" />                  
                        {/* Text Overlay */}
                        <div className="absolute bottom-[14em] left-0 text-white px-4 py-2">
                            <h1 className="text-7xl ml-[6.8em] tracking-wide text-slate-100 font-sans">Isaiah</h1>
                            <p className="text-xl font-sans text-slate-100 w-[26em] ml-[20em] mt-[1em] tracking-wider">
                                Visions stories about different future events
                            </p>
                            <button className="bg-[#0071e3] text-white font-sans text-lg py-2 px-4 rounded-full border-black ml-[25em] mt-[2em]">
                                Learn More
                            </button>
                            <button
                                className="text-white font-sans text-lg py-2 px-4 rounded-full mt-3 ml-[2.6em] hover:bg-white hover:text-black transition duration-300 "
                                style={{ border: "1px solid white" }}
                                >
                                Summary
                            </button>
                        </div>
                    </div>

                </div>
                <div className="grid grid-cols-2 ml-3 mt-2">
                    <div className="relative rounded-lg overflow-hidden" style={{width: "846px", height: "580px"}}>
                        <img src="/images/jeremiah_image.png" alt="" className="w-full h-full object-cover object-center rounded-lg" />
                        {/* Text Overlay */}
                        <div className="absolute bottom-[2em] ml-[0em] mt-[2em] text-white px-4 py-2 rounded">
                            <h1 className="text-7xl ml-[0.25em] tracking-wide text-white font-sans">Jeremiah</h1>
                            <p className="text-xl font-sans ml-[2.8em] mt-3 text-white  tracking-wider">
                                Will replace in the future
                            </p>
                            <button className="bg-[#0071e3] text-white font-sans text-lg py-2 px-4 rounded-full border-black ml-[2em] mt-[1em]">
                                Learn More
                            </button>
                            <button
                                className="text-white border-white font-sans ml-[2em] text-lg py-2 px-4 rounded-full hover:bg-white hover:text-black transition duration-300 mt-3"
                                style={{ border: "1px solid white" }}
                                >
                                Summary
                            </button>
                        </div>
                    </div>
                    <div className="relative rounded-lg overflow-hidden" style={{width: "846px", height: "580px", backgroundColor: "white"}}>
                        <img src="/images/joel_image.png" alt="" className="w-full h-full object-cover object-center rounded-lg" />
                        {/* Text Overlay */}
                        <div className="absolute bottom-[23em] ml-[30em] mt-[2em] text-white px-4 py-2 rounded">
                            <h1 className="text-7xl ml-[1.45em] tracking-wide text-white font-sans">Joel</h1>
                            <p className="text-xl font-sans ml-[2.8em] mt-3 text-white  tracking-wider">
                                Will replace in the future
                            </p>
                            <button className="bg-[#0071e3] text-white font-sans text-lg py-2 px-4 rounded-full border-black ml-[2em] mt-[1em]">
                                Learn More
                            </button>
                            <button
                                className="text-white border-white font-sans ml-[2em] text-lg py-2 px-4 rounded-full hover:bg-white hover:text-black transition duration-300 mt-3"
                                style={{ border: "1px solid white" }}
                                >
                                Summary
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 ml-3 mt-2">
                        <div className="relative rounded-lg overflow-hidden" style={{width: "846px", height: "580px", backgroundColor: "white"}}>
                            <img src="/images/matthew_prophecy.png" alt="" className="w-full h-full object-cover object-center rounded-lg" />
                            {/* Text Overlay */}
                            <div className="absolute bottom-[12em] -ml-[2em] mb-[0em] text-white px-4 py-2 rounded">
                                <h1 className="text-7xl ml-[0.55em] tracking-wide text-white font-sans">Matthew</h1>
                                <p className="text-xl font-sans ml-[2.2em] mt-3 text-white  tracking-wider">
                                    Will replace in the future
                                </p>
                                <button className="bg-[#0071e3] text-white font-sans text-lg py-2 px-4 rounded-full border-black ml-[2em] mt-[1em]">
                                    Learn More
                                </button>
                                <button
                                    className="text-white border-white font-sans ml-[2em] text-lg py-2 px-4 rounded-full hover:bg-white hover:text-black transition duration-300 mt-3"
                                    style={{ border: "1px solid white" }}
                                    >
                                    Summary
                                </button>
                            </div>
                        </div>
                    
                    <div className="relative rounded-lg overflow-hidden" style={{width: "846px", height: "580px", backgroundColor: "black"}}>
                        <img src="/images/genesis_image.png" alt="" className="w-full h-full object-cover object-center rounded-lg" />
                        {/* Text Overlay */}
                        <div className="absolute bottom-[2em] ml-[26em] mt-[2em] text-white px-4 py-2 rounded">
                            <h1 className="text-7xl ml-[0.8em] tracking-wide text-white font-sans">Genesis</h1>
                            <p className="text-xl font-sans ml-[3.6em] mt-3 text-white  tracking-wider">
                                Will replace in the future
                            </p>
                            <button className="bg-[#0071e3] text-white font-sans text-lg py-2 px-4 rounded-full border-black ml-[2.5em] mt-[1em]">
                                Learn More
                            </button>
                            <button
                                className="text-white border-white font-sans ml-[2em] text-lg py-2 px-4 rounded-full hover:bg-white hover:text-black transition duration-300 mt-3"
                                style={{ border: "1px solid white" }}
                                >
                                Summary
                            </button>
                        </div>
                    </div>
                </div>
            </section>
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

            <section className="bg-white" style={{ width: "2560px", height: "292px" }}>
                <div className="w-full overflow-hidden -mt-[36px]">
                    <div className="flex w-max animate-marquee gap-4 px-6 group-hover:animate-marquee-slow">
                        {[...second_images, ...second_images].map((img, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[417px] h-[236px] overflow-hidden"
                        >
                            <a
                            href={img.link || "#"}
                            className="block w-full h-full text-black"
                            style={{
                                backgroundImage: `url(${img.src})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                           />
                            {/* Text Overlay */}
                        
                        </div>
                        ))}
                    </div>
                </div>
            </section>
                
        </div>
    );
}

