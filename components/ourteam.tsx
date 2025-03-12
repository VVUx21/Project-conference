'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import {data} from "./data"
import Image from "next/image";

const SpeakersSection = () => {
  const [visibleCount, setVisibleCount] = useState(4); 

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); 
  };

  return (
    <div id="ourteam" className="bg-white">
      <div className="py-10 mx-16 my-2.5">
        <h2 className="text-5xl font-bold text-[#CC5F00]">CVMI-2025 Organizing Committee</h2>
        <div className="w-[58%] h-1 bg-[#CC5F00] mt-2"></div>
      </div>

      <section className="py-12 bg-white text-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {data.slice(0, visibleCount).map((speaker, id) => (
              <motion.div 
                key={id} 
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-40 h-40 rounded-full mb-4">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    height={160}
                    width={160}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <p className="text-lg font-semibold">{speaker.name}</p>
                <p className="text-sm text-gray-600">{speaker.college}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {visibleCount < data.length && (
        <div 
          className="py-10 mx-16 my-2.5"
          onClick={handleSeeMore}
        >
          <h2 className="text-3xl font-bold inline text-[#26196E] cursor-pointer hover:underline">Click to see more...</h2>
        </div>
      )}
    </div>
  );
};

export default SpeakersSection;
