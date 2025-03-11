'use client';
import { useState } from "react";
import { motion } from "framer-motion";

const SpeakersSection = () => {
  const [visibleCount, setVisibleCount] = useState(4); 

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); 
  };

  const speakers = [
    {
      name: "Prof B B Chaudhuri",
      institute: "Indian Statistical Institute (ISI), Kolkata",
    },
    {
      name: "Prof B B Chaudhuri",
      institute: "Indian Statistical Institute (ISI), Kolkata",
    },
    {
      name: "Prof B B Chaudhuri",
      institute: "Indian Statistical Institute (ISI), Kolkata",
    },
    {
      name: "Prof B B Chaudhuri",
      institute: "Indian Statistical Institute (ISI), Kolkata",
    },
    {
      name: "Prof B B Chaudhuri",
      institute: "Indian Statistical Institute (ISI), Kolkata",
    },
    {
      name: "Prof B B Chaudhuri",
      institute: "Indian Statistical Institute (ISI), Kolkata",
    },
    {
      name: "Prof B B Chaudhuri",
      institute: "Indian Statistical Institute (ISI), Kolkata",
    },
    {
      name: "Prof B B Chaudhuri",
      institute: "Indian Statistical Institute (ISI), Kolkata",
    },
    {
      name: "Prof B B Chaudhuri",
      institute: "Indian Statistical Institute (ISI), Kolkata",
    },
    {
      name: "Prof B B Chaudhuri",
      institute: "Indian Statistical Institute (ISI), Kolkata",
    },
    {
      name: "Prof B B Chaudhuri",
      institute: "Indian Statistical Institute (ISI), Kolkata",
    },
    {
      name: "Prof B B Chaudhuri",
      institute: "Indian Statistical Institute (ISI), Kolkata",
    },
  ];
  return (
    <div id="ourteam" className="bg-white">
      <div className="py-10 mx-16 my-2.5">
        <h2 className="text-5xl font-bold text-[#CC5F00]">CVMI-2025 Organizing Committee</h2>
        <div className="w-[58%] h-1 bg-[#CC5F00] mt-2"></div>
      </div>

      <section className="py-12 bg-white text-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {speakers.slice(0, visibleCount).map((speaker, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-40 h-40 bg-gray-300 rounded-full mb-4"></div>
                <p className="text-lg font-semibold">{speaker.name}</p>
                <p className="text-sm text-gray-600">{speaker.institute}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {visibleCount < speakers.length && (
        <div 
          className="py-10 mx-16 my-2.5"
          onClick={handleSeeMore}
        >
          <h2 className="text-3xl font-bold text-[#26196E] cursor-pointer hover:underline">Click to see more...</h2>
        </div>
      )}
    </div>
  );
};

export default SpeakersSection;
