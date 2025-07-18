import React, { useEffect, useState } from 'react';
import './shooting_stars.scss';



export default function ProphecyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/images/isaiah_looking_up.png",
    "/images/isaiah_looking_up.png",
    "/images/isaiah_looking_up.png",
    "/images/isaiah_looking_up.png",
    "/images/isaiah_looking_up.png",
  ];

    return (
        <div className="bg-white max-w-full min-h-screen overflow-hidden">
            <section style={{width: "1728px", height: "1180px", backgroundColor: "white"}}>
                <div className="shooting-star-container inset-y-2 shadow-lg" style={{ width: "1728px", height: "580px", position: "relative", overflow: "hidden" }}>
                    <div className="night">
                        {[...Array(20)].map((_, i) => {
                        const top = Math.random() * 420;
                        const left = Math.random() * 1728;
                        const delay = Math.random() * 6000;
                        return (
                            <div
                            key={i}
                            className="shooting_star"
                            style={{
                                top: `${top}px`,
                                left: `${left}px`,
                                animationDelay: `${delay}ms`,
                                position: "absolute",
                                rotate: `30deg`,
                                borderwidth: "2px",
                                
                            }}
                            />
                        );
                        })}
                    </div>

                    <div className="grid grid-cols-2 pt-3 pb-10 relative z-10" style={{ width: "1728px", height: "580px" }}>
                        <div className="flex justify-center" style={{height: "540px"}}>
                            <img src="/images/john_looking_up.png" alt="" className="mr-[23rem] mt-[1.5rem]" style={{ height: "490px"}}/>
                        </div>
                        <div className="font-sans text-8xl font-normal" style={{ height: "540px" }}>
                            <div className="mt-[12rem] ml-[15rem] text-slate-100">
                                <h1 className="ml-20">Revelation</h1>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="inset-y-3 mt-4" style={{width: "1728px", height: "580px", background: "linear-gradient(to right, #2f3e49, #1c252b, #121619, #0e1114)"}}>
                    <div className="grid grid-cols-2 pt-3 pb-10" style={{width: "1728px", height: "580px"}}>
                        <div className=" font-sans text-8xl font-normal" style={{height: "540px"}}>
                            <h1 className="mt-40 ml-20 text-slate-100">Daniel</h1>
                            <p className="text-xl ml-20 font-graphik mt-3 text-slate-100">The Book of Daniel filled with prophecies. Visions stories about a particular king.</p>
                            <button className="bg-gray-600 text-white font-sans text-lg py-2 px-4 rounded-full hover:bg-slate-600 transition duration-300 mt-3 ml-20">Learn More</button>
                            <button className="bg-transparent box-border-white text-white font-sans text-lg py-2 px-4 rounded-full hover:bg-slate-600 transition duration-300 mt-3 ml-20">Summary</button>
                        </div>
                        <div className="flex justify-center ml-20 -mt-4" style={{height: "540px"}}>
                            <img src="/images/daniel_image_no_bg.png" alt="" className="" style={{ height: "650px"}}/>
                        </div>
                    </div>
                </div>

            </section>
            <section className="bg-white" style={{width: "1728px", height: "1780px"}}>
                <div className="grid grid-cols-2 ml-3 mt-2">
                    <div className="relative bg-[#f5f5f7]" style={{width: "849px", height: "590px"}}>
                        <div className="absolute justify-center items-center ml-[16em] mt-[2em] text-white px-4 py-2 rounded">
                            <h1 className="text-7xl tracking-wide text-slate-950 font-sans">Ezekiel</h1>
                            <p className="text-xl font-sans text-slate-950  tracking-wider">
                                Will replace in the future
                            </p>
                            <button className="bg-[#0071e3] text-white font-sans text-lg py-2 px-4 rounded-full border-black">
                                Learn More
                            </button>
                            <button
                                className="text-[#0071e3] border-blue-700 font-sans text-lg py-2 px-4 rounded-full"
                                style={{ border: "1px solid #0071e3" }}
                                >
                                Summary
                            </button>
                        </div>
                    </div>
                    <div className="relative" style={{ width: "858px", height: "590px", backgroundColor: "rgb(1, 1, 12)" }}>
                        <img src="/images/isaiah_looking_up.png" alt="" className="w-full h-full object-cover" />                  
                        {/* Text Overlay */}
                        <div className="absolute bottom-[14em] left-0 text-white px-4 py-2 rounded">
                            <h1 className="text-7xl ml-[6.8em] tracking-wide text-slate-100 font-sans">Isaiah</h1>
                            <p className="text-xl font-sans text-slate-100 w-[26em] ml-[20em] mt-[1em] tracking-wider">
                                Visions stories about different future events
                            </p>
                            <button className="bg-[#0071e3] text-white font-sans text-lg py-2 px-4 rounded-full border-black ml-[25em] mt-[2em]">
                                Learn More
                            </button>
                            <button
                                className="text-[#0071e3] border-blue-700 font-sans text-lg py-2 px-4 rounded-full mt-3 ml-[2.6em]"
                                style={{ border: "1px solid #0071e3" }}
                                >
                                Summary
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 ml-3 mt-2">
                    <div className="bg-[#0e0e0f]" style={{width: "846px", height: "580px"}}>Jeremiah</div>
                    <div className="relative" style={{width: "846px", height: "580px", backgroundColor: "white"}}>
                        Joel    
                    </div>
                </div>
                <div className="grid grid-cols-2 ml-3 mt-2">
                    <div className="bg-[gray]" style={{width: "846px", height: "580px"}}>Matthew</div>
                    <div className="relative" style={{width: "846px", height: "580px", backgroundColor: "black"}}>    
                    </div>
                </div>
            </section>
            <section className="bg-white" style={{ width: "1728px", height: "800px" }}>
                <div className="overflow-visible w-[1600px] h-[700px] mx-auto relative">
                <div
                    className="flex transition-transform duration-1000 ease-in-out gap-2"
                    style={{
                    width: `${images.length * (1230 + 24)}px`,
                    transform: `translateX(calc(-${currentIndex * (1230 + 24)}px + 220px))`,
                    }}
                >
                    {images.map((src, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 flex justify-center items-center relative"
                        style={{ width: "1230px", height: "700px" }}
                    >
                        <a
                        href="#"
                        style={{
                            width: "100%",
                            height: "100%",
                            backgroundImage: `url(${src})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            display: "block",
                            borderRadius: "12px",
                        }}
                        ></a>
                    </div>
                    ))}
                </div>
                </div>

                <div className="flex justify-center mt-6 gap-3">
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
                
        </div>
    );
}

