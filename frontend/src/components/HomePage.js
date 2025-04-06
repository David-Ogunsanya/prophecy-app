import React, { useEffect } from 'react';

const HomePage = () => {
  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });
  }, []);

  return (
    <div className="relative">
      {/* 🔹 Background Image */}
      <img
        src="/images/home_page_group.png"
        alt="Background"
        className="w-full h-auto object-cover"
        style={{ height: '100vh' }}
      />

      {/* 🔹 About Section */}
      <div className="relative bg-[#f9efe4] flex justify-center p-10">
        <div className="max-w-7xl flex flex-wrap md:flex-nowrap gap-10">
          
          {/* 🟠 Left: About Text */}
          <div className="md:w-2/3 space-y-10 ml-6">
            <h1 className="text-4xl font-bold font-[IBM Plex Mono] uppercase">
              About Us
            </h1>
            <p className="text-2xl w-4/5 leading-relaxed font-[IBM Plex Sans Condensed]">
              Welcome to our website, where our mission is to shed light on the prophecies of the Bible.
              We delve into these timeless messages with thoughtful interpretation, historical context,
              and spiritual insights to help you explore and understand their significance today.
              Whether you're a scholar or new to the journey of faith, our platform offers a clear,
              insightful perspective on the mysteries and promises found within biblical prophecy.
            </p>
            <div className="py-6">
              <p className="italic font-semibold text-2xl w-3/4 mb-4">
                "Knowing this first, that no prophecy of the Scripture came into being of its own private interpretation."
              </p>
              <p className="font-semibold text-3xl">2 Peter 1:20</p>
            </div>
          </div>

          {/* 🟠 Right: Image */}
          <div className="md:w-1/3 flex justify-start">
            <img
              src="/images/book_light.jpeg"
              alt="Open Bible with Light"
              className="rounded-lg shadow-lg"
              style={{ width: '600px', height: '500px' }}
            />
          </div>
        </div>
      </div>

      {/* 🔹 Apple-style Scrollable Card Section */}
      <section className="bg-[#f9efe4] py-20">
        <div
          className="flex overflow-x-auto overflow-y-hidden scroll-smooth hide-scrollbar gap-8 max-w-[1680px] px-8 mx-auto"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {/* 🟢 Prophecy Card */}
          <div
            className="flex-shrink-0 w-[360px] h-[640px] rounded-[32px] overflow-hidden relative shadow-lg scroll-snap-start animate-on-scroll"
            style={{ scrollSnapAlign: 'start' }}
          >
            {/* Background Image */}
            <div className="w-full h-full overflow-hidden">
              <img
                src="/images/Daniel_2.png"
                alt="Daniel 2 Statue"
                className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
            {/* Text Overlay */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end p-6 text-white bg-gradient-to-t from-black/60 via-black/30 to-transparent">
              <h2 className="text-2xl font-bold mb-2">Daniel 2:38–47</h2>
              <p className="text-sm leading-snug">
                A vision of empires, shattered by the stone not cut with hands.
              </p>
            </div>

            {/* + Icon */}
            <div className="absolute bottom-4 right-4 w-10 h-10 bg-white text-black text-xl rounded-full flex items-center justify-center shadow-md hover:scale-200 transition-transform cursor-pointer">
              +
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
