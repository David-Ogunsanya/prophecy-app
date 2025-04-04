import React from 'react';

const HomePage = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <img
        src="/images/home_page_group.png"
        alt="Background"
        className="w-full h-auto object-cover"
        style={{ height: '100vh' }} // Ensures it fills the viewport height
      />

      {/* Main Content */}
      <div className="relative bg-amber-50 flex justify-center p-10 ">
        {/* 
          Using flex with two columns:
          - md:w-2/3 for the text column
          - md:w-1/3 for the image column
        */}
        <div className="max-w-3/4 flex place-items-start ">
          
          {/* Left Column: About Us Text */}
          <div className="md:w-2/3 ml-36 space-y-10">
            <h1 className="text-5xl font-bold font-[IBM Plex Mono]">About Us</h1>
            <p className="text-3xl w-4/5 leading-relaxed font-[IBM Plex Sans Condensed]">
              Welcome to our website, where our mission is to shed light on the prophecies of the Bible.
              We delve into these timeless messages with thoughtful interpretation, historical context,
              and spiritual insights to help you explore and understand their significance today.
              Whether you're a scholar or new to the journey of faith, our platform offers a clear,
              insightful perspective on the mysteries and promises found within biblical prophecy.
            </p>
            <div className="py-6">
              <p className="italic font-semibold leading-relaxed text-3xl w-3/4 mb-4">
                knowing this first, that no prophecy of the Scripture came into being of its own private interpretation.
              </p>
              <p className="font-semibold text-3xl">
                2 Peter 1:20
              </p>
            </div>
          </div>

          {/* Right Column: Larger Image aligned right */}
          <div className="md:w-3/3 mr-64 flex justify-start">
            <img 
              src="/images/book_light.jpeg"
              alt="Open Bible with Light"
              className="rounded-lg shadow-lg"
              style={{ width: '700px', height: 'auto' }} // Make the image bigger here
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
