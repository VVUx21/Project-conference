'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const SpeakersSection = () => {
  const data=[
    {
      "id": 1,
      "name": "Prof. K UmaMaheshwar Rao",
      "image": "https://res.cloudinary.com/dgtdkqfsx/image/upload/v1741733230/UmaMaheshwar_rao_urudtx.jpg",
      "college": "Director, NIT Rourkela",
      "teams": ["Patrons"]
    },
    {
      "id": 2,
      "name": "Prof. B B Chaudhuri",
      "image": "https://res.cloudinary.com/dgtdkqfsx/image/upload/v1741732991/BBChaudhuri_n3zvxf.jpg",
      "college": "Indian Statistical Institute (ISI), Kolkata",
      "teams": ["Patrons"]
    },
    {
      "id": 3,
      "name": "Prof. Mukul S. Sutaone",
      "image": "https://res.cloudinary.com/dgtdkqfsx/image/upload/v1741733097/Prof._Mukul_S._Sutaone_bvkgbv.jpg",
      "college": "Director, IIIT Allahabad",
      "teams": ["Patrons"]
    },
    {
      "id": 4,
      "name": "Prof. Sri Niwas Singh",
      "image": "https://res.cloudinary.com/dgtdkqfsx/image/upload/v1741733173/Prof._Sri_Niwas_Singh_vj5vkx.jpg",
      "college": "Director, ABV-IIITM Gwalior",
      "teams": ["Patrons"]
    },
  ]

  return (
    <div id="ourteam" className="bg-white">
      <div className="pt-8 mx-16">
        <h2 className="md:text-5xl text-3xl font-bold text-[#CC5F00]">CVMI-2025 Organizing Committee</h2>
        <div className="w-[58%] h-1 bg-[#CC5F00] mt-2"></div>
      </div>

      <section className="py-12 bg-white text-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-10 mx-16 my-2.5">
            <h2 className="text-4xl font-bold text-[#000] underline">Patrons</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {data.map((speaker, id) => (
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
      {(
        <div 
          className="py-10 mx-16 my-2.5"
        >
          <Link href={`/Committee`} className="text-3xl font-bold inline text-[#26196E] cursor-pointer hover:underline">Click to see more...</Link>
        </div>
      )}
    </div>
  );
};

export default SpeakersSection;
