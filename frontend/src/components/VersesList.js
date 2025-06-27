import React, { useEffect, useState } from 'react';
import API from './api';

function VersesList() {

    return (
        <div className="bg-white min-h-screen">
            <section style={{width: "1728px", height: "1776px", backgroundColor: "white"}}>
                <div className="" style={{width: "1728px", height: "580px", background: "linear-gradient(to right, #2f3e49, #1c252b, #121619, #0e1114)"}}>
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
            <section className="bg-white">
                <div className="grid grid-cols-4 mt-20 ml-4">
                    <div className="text-white font-graphik text-center text-3xl rounded-sm" style={{width: "415px", height: "435px", backgroundColor: "black"}}>
                        <p className="mt-1">Daniel</p>
                    </div>
                    <div className="text-white font-graphik text-center text-3xl rounded-sm" style={{width: "415px", height: "435px", backgroundColor: "black"}}>Isaiah</div>
                    <div className="text-white font-graphik text-center text-3xl rounded-sm" style={{width: "415px", height: "435px", backgroundColor: "black"}}>Jeremiah</div>
                    <div className="text-white font-graphik text-center text-3xl rounded-sm" style={{width: "415px", height: "435px", backgroundColor: "black"}}>Ezekiel</div>
                </div>
            </section>
            <div className="bg-white mt-20"></div>
        </div>
    );
}

export default VersesList;
