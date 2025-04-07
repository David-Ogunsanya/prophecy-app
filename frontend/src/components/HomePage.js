import React, { useState, useEffect, useRef } from 'react';

const HomePage = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [isScrollVisible, setIsScrollVisible] = useState(false);
  const scrollSectionRef = useRef(null);

  useEffect(() => {
    if (activeModal !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => (document.body.style.overflow = 'auto');
  }, [activeModal]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsScrollVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (scrollSectionRef.current) {
      observer.observe(scrollSectionRef.current);
    }
    return () => {
      if (scrollSectionRef.current) {
        observer.unobserve(scrollSectionRef.current);
      }
    };
  }, []);

  const prophecyCards = [
    {
      title: 'Daniel 2:38–47',
      image: '/images/Daniel_2.png',
      text: 'A vision of empires, shattered by the stone not cut with hands.',
    },
    {
      title: 'Matthew 24:14',
      image: '/images/Matthew_24_14.png',
      text: 'Jesus makes a prophecy about the world.',
    },
    {
      title: 'Daniel 7',
      image: '',
      text: 'Four great beasts rise out of the sea.',
    },
    {
      title: 'Alexander The Great',
      image: '/images/Alexander_Great.png',
      text: 'Alexander the great in the bible and the prophecy concerning him.',
    }
  ];

  const openModal = (index) => setActiveModal(index);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="relative">
      {/* Background Image */}
      <div className="relative">
        <img
          src="/images/home_page_group.png"
          alt="Background"
          className="w-full h-screen object-cover"
        />
      </div>

      {/* About Section */}
      <div className="bg-[#f9efe4] flex justify-center p-10">
        <div className="max-w-7xl flex flex-wrap md:flex-nowrap gap-10">
          <div className="md:w-2/3 space-y-10 ml-6">
            <h1 className="text-4xl font-bold font-mono uppercase">About Us</h1>
            <p className="text-2xl w-4/5 leading-relaxed font-sans">
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

          <div className="md:w-1/3 flex justify-start">
            <img
              src="/images/book_light.jpeg"
              alt="Open Bible with Light"
              className="rounded-lg w-[600px] h-[500px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Prophecy Scroll Section */}
      <section className="bg-[#f9efe4] py-32 relative overflow-visible">
        <div
          ref={scrollSectionRef}
          className={`animate-on-scroll ${isScrollVisible ? 'fade-in' : ''}`}
        >
          <div
            className="w-screen flex min-h-[700px] overflow-x-auto overflow-y-visible scroll-smooth hide-scrollbar gap-16 pl-12 pr-10"
          >


            {prophecyCards.map((card, index) => (
              <div
                key={index}
                className="zoom-card flex-shrink-0 w-[360px] h-[640px] rounded-[32px] overflow-visible relative transition-transform duration-500 hover:scale-[1.02] py-2"
                onClick={() => openModal(index)}
              >
                <div className="w-full h-full overflow-hidden rounded-[32px]">
                  {card.image ? (
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover rounded-[32px]"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 text-center px-4 rounded-[32px]">
                      <p>No image available</p>
                    </div>
                  )}
                </div>

                <div className="absolute bottom-8 left-3 right-4 text-white text-center rounded-xl">
                  <h2 className="text-xl font-bold font-sans mb-1">{card.title}</h2>
                  <p className="text-sm font-sans leading-relaxed">{card.text}</p>
                </div>

                <div className="absolute bottom-4 right-4 w-10 h-10 bg-white text-black text-xl rounded-full flex items-center justify-center transition-transform cursor-pointer hover:scale-110">
                  +
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {activeModal !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md flex items-center justify-center z-50 transition-opacity duration-500 ease-in-out">
            <div className="bg-white p-10 max-w-2xl w-full rounded-xl relative transform transition-all duration-500 ease-out modal-animate">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-black"
              >
                ×
              </button>
              <h2 className="text-2xl font-bold mb-4">{prophecyCards[activeModal].title}</h2>
              <p className="text-base text-gray-700">{prophecyCards[activeModal].text}</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default HomePage;
