import React, { useState, useEffect, useRef } from 'react';
import '../App.css'; // Make sure your animation CSS is here
import Rotator from './Rotator';

const rotatingNames = ['Elijah', 'Esther', 'John', 'Ruth', 'Daniel'];
const rotatingPlaces = ['Kings', 'Jerusalem', 'Galilee', 'Patmos', 'Babylon'];

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

const map_of_places = [
  { image: '/images/map_middle_east.png' },
  { image: '/images/map_of_europe.png' },
  { image: '/images/map_africa.png' }
];

const accordionData = [
  {
    title: "Israel",
    content: "Israel plays a central role in biblical prophecy, ...",
    image: "/images/israel_beautiful.jpg"
  },
  {
    title: "Babylon",
    content: "Babylon plays an important role in biblical prophecy, ...",
    image: "/images/babylon_beautiful.jpg"
  },
  {
    title: "Saudi Arabia",
    content: "Saudi Arabia plays an important role in biblical prophecy, beginning with literal Israel as God's chosen nation. Through Christ, the promises extended to spiritual Israel—all who follow Him by faith. Prophecies once for the physical nation now apply to this faithful body, who uphold God's commandments and His end-time purpose.",
    image: "/images/saudi_arabia_beautiful.jpg"
  }
];

const HomePage = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [rotatorIndex, setRotatorIndex] = useState(0);

  const scrollSectionRef = useRef(null);
  const secondSectionRef = useRef(null);
  const [isScrollVisible, setIsScrollVisible] = useState(false);
  const [isSecondVisible, setIsSecondVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);
  const [imageTransition, setImageTransition] = useState(false);

  const handleToggle = (index) => {
    if (openIndex !== index) {
      setImageTransition(true);
      setTimeout(() => {
        setOpenIndex(index);
        setImageTransition(false);
      }, 300); // Duration matches your CSS transition
    }
  };

  const currentImage = accordionData[openIndex].image;

  useEffect(() => {
    document.body.style.overflow = activeModal !== null ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [activeModal]);

  useEffect(() => {
    const observer1 = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsScrollVisible(true);
        observer1.disconnect();
      }
    }, { threshold: 0.2 });

    const observer2 = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsSecondVisible(true);
        observer2.disconnect();
      }
    }, { threshold: 0.2 });

    if (scrollSectionRef.current) observer1.observe(scrollSectionRef.current);
    if (secondSectionRef.current) observer2.observe(secondSectionRef.current);

    return () => {
      if (scrollSectionRef.current) observer1.unobserve(scrollSectionRef.current);
      if (secondSectionRef.current) observer2.unobserve(secondSectionRef.current);
    };
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setRotatorIndex(prev => prev + 1);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  const closeModal = () => setActiveModal(null);

  const AccordionItem = ({ title, content, isOpen, onToggle }) => {
    return (
      <li className="accordion-item border-t border-gray-300">
        <h3 className="accordion-title">
          <button
            onClick={onToggle}
            className="accordion-button w-full flex justify-between items-center py-4 text-left"
          >
            <span className="accordion-title-text text-xl font-semibold">{title}</span>
            <span
              className={`accordion-icon transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            >
              <svg width="16" height="16" viewBox="0 0 16 16">
                <path
                  d="M2 6l6 6 6-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </button>
        </h3>
        {isOpen && (
          <div className="accordion-tray transition-all duration-300">
            <div className={`accordion-content pt-2 pb-4 accordion-content-animate ${isOpen ? 'open' : ''}`}>
              <p className="accordion-paragraph-text  text-gray-700 ">
                {content}
              </p>
            </div>
          </div>
        )}
      </li>
    );
  };  

  return (
    <div className="relative bg-[#f9efe4] min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6 bg-[#f9efe4]">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-6xl font-sans text-stone-800 font-medium tracking-wide leading-[1.5]">
            The Prophetic guide even{' '}
            <Rotator
              items={rotatingNames}
              index={rotatorIndex}
              className="relative inline-block w-[13rem] h-[4.5rem] align-middle overflow-hidden border-b-4 border-blue-600"
              itemHeight="4.5rem"
            />
            <br />
            in{' '}
            <Rotator
              items={rotatingPlaces}
              index={rotatorIndex}
              className="relative inline-block w-[19rem] h-[4.5rem] align-middle overflow-hidden border-b-4 border-blue-600"
              itemHeight="4.5rem"
            />{' '}
            wants to use
          </h1>
          <p className="italic text-xl md:text-2xl text-gray-700 mt-6 font-serif">
            To unlock the symbols of prophecy
          </p>
          <div className="flex gap-4 mt-8 flex-wrap justify-center">
            <button className="bg-gray-800 text-white py-3 px-6 tracking-wide rounded-full font-semibold hover:bg-gray-900 transition">
              Start studying
            </button>
            <button className="border border-gray-500 text-gray-900 py-3 px-6 rounded-full font-semibold hover:bg-gray-200 transition">
              Browse verses
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <div className="bg-[#f9efe4] flex justify-center p-10">
        <div className="max-w-7xl flex flex-wrap md:flex-nowrap gap-10 text-left">
          <div className="md:w-2/3 space-y-10 ml-6">
            <h2 className="text-4xl font-[arial] uppercase">About Us</h2>
            <p className="text-2xl w-4/5 leading-relaxed font-serif">
            Welcome to our website, where our mission is to shed light on the prophecies of the Bible. We delve into these timeless messages with thoughtful interpretation, historical context, and spiritual insights to help you explore and understand their significance today.
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
              src="/images/sealed_sc.png"
              alt="Open Bible with Light"
              className="rounded-lg w-[900px] h-[500px] object-fill"
            />
          </div>
        </div>
      </div>

      {/* Prophecy Section */}
      <section className="bg-[#f9efe4] py-32 relative overflow-visible">
        <div ref={scrollSectionRef} className={`animate-on-scroll ${isScrollVisible ? 'fade-in' : ''}`}>
          <div className="w-screen flex min-h-[700px] overflow-x-auto scroll-smooth hide-scrollbar gap-16 pl-12 pr-10">
            {prophecyCards.map((card, index) => (
              <div
                key={index}
                className="zoom-card flex-shrink-0 w-[360px] h-[640px] rounded-[32px] relative transition-transform duration-500 hover:scale-[1.02] py-2"
                onClick={() => setActiveModal(index)}
              >
                <div className="w-full h-full overflow-hidden rounded-[32px]">
                  {card.image ? (
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover rounded-[32px]" />
                  ) : (
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 text-center px-4 rounded-[32px]">
                      <p>No image available</p>
                    </div>
                  )}
                </div>
                <div className="absolute bottom-8 left-3 right-4 font-serif text-white text-center rounded-xl">
                  <h2 className="text-xl font-bold mb-1">{card.title}</h2>
                  <p className="text-sm leading-relaxed">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {activeModal !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md flex items-center justify-center z-50">
            <div className="bg-[#f5f5f7] p-10 max-w-2xl w-full rounded-xl relative">
              <button onClick={closeModal} className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-black">×</button>
              <h2 className="text-2xl font-bold mb-4">{prophecyCards[activeModal].title}</h2>
              <p className="text-base text-gray-700">{prophecyCards[activeModal].text}</p>
            </div>
          </div>
        )}
      </section>

      {/* Second Section */}
      <section ref={secondSectionRef} className={`bg-[#f9efe4] py-2 px-6 animate-on-scroll ${isSecondVisible ? 'fade-in' : ''}`}>
        <div className="text-left md:text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-[Open_Sans] tracking-wide text-stone-900 mb-4">
            Discover Prophecies in different parts of the World.
          </h2>
          <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto">
            Explore how prophecy shaped ancient empires, kings, and key moments in Biblical history across the Middle East.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <button className="px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
              Discover Key Locations
            </button>
            <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
              View All Verses
            </button>
          </div>
        </div>
        </section>

        {/* Map Display */}
        <section className="section-content-responsive">
        <header className="section-header row">
          <h2 className="text-[56px] leading-[1.0714] font-medium tracking-[-0.005em] font-sf-pro">Middle East</h2>
        </header>
        <div className="accordion-wrapper accordion-pane content-container">
        <ul className="accordion flex flex-col gap-4" role="list">
          <AccordionItem
            title="Israel"
            content="Israel plays a central role in biblical prophecy, beginning with literal Israel as God's chosen nation. Through Christ, the promises extended to spiritual Israel—all who follow Him by faith. Prophecies once for the physical nation now apply to this faithful body, who uphold God's commandments and His end-time purpose."
            isOpen={openIndex === 0}
            onToggle={() => handleToggle(0)}
          />
          <AccordionItem
            title="Babylon"
            content="Babylon plays an important role in biblical prophecy, that will be fixed in the future."
            isOpen={openIndex === 1}
            onToggle={() => handleToggle(1)}
          />
          <AccordionItem
            title="Saudi Arabia"
            content="Saudi Arabia plays an important role in biblical prophecy, beginning with literal Israel as God's chosen nation. Through Christ, the promises extended to spiritual Israel—all who follow Him by faith. Prophecies once for the physical nation now apply to this faithful body, who uphold God's commandments and His end-time purpose."
            isOpen={openIndex === 2}
            onToggle={() => handleToggle(2)}
          />
        </ul>
        <div className="image-container-large">
          <picture className={`template-image-large ${imageTransition ? 'fade-out' : 'fade-in'}`}>
            <img
              src={currentImage}
              alt={accordionData[openIndex].title}
              style={{
                width: '870px',
                height: '670px',
                objectFit: 'cover',
                borderRadius: '10px',
                marginLeft: '2em',
                boxShadow: '0 0 20px rgba(2, 0, 0, 0.05)',
                marginTop: '3em'
              }}
            />
          </picture>
        </div>
          {/* Right Arrow Button */}
        </div>
        </section>
      <div className="h-20 container"/>
    </div>
  );
};

export default HomePage;
