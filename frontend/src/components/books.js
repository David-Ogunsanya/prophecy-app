import React, { useEffect, useState } from 'react';
import API from './api';
import './shooting_stars.scss';


function VersesList() {

    return (
        <div className="bg-white min-h-screen">
            <section style={{width: "1728px", height: "1180px", backgroundColor: "white"}}>
                <div className="inset-y-3" style={{width: "1728px", height: "580px", background: "linear-gradient(to right, #2f3e49, #1c252b, #121619, #0e1114)"}}>
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

            </section>
            <section className="bg-white" style={{width: "1728px", height: "1200px"}}>
                <div className="grid grid-cols-2 ml-3">
                    <div className="bg-gray-400" style={{width: "846px", height: "580px"}}>01</div>
                    <div className="" style={{width: "846px", height: "580px", 
                        backgroundColor: "rgb(1, 1, 12)"}}>
                            <img src="/images/isaiah_vision.png" alt="" />
                    </div>
                </div>
            </section>
            <div className="bg-white mt-20"></div>
        </div>
    );
}

export default VersesList;
