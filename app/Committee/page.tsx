'use client';
import React from 'react'
import Navbar from '../../components/Navbar'
import { data } from '../../components/Data/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Contact from '../../components/contact';

interface Member {
    id: number;
    name: string;
    image: string;
    college: string;
    teams: string[];
  }

const groupedMembers: { [team: string]: Member[] } = {};
data.forEach((member) => {
  member.teams.forEach((team) => {
    if (!groupedMembers[team]) {
      groupedMembers[team] = [];
    }
    groupedMembers[team].push(member);
  });
});

const Organizing = () => {

  return (
    <div id="ourteam" className="bg-white">
        <Navbar />
      <div className="pt-20 mx-16 my-2.5">
        <h2 className="md:text-5xl text-3xl font-bold text-[#CC5F00] underline">CVMI-2025 Organizing Committee</h2>
      </div>
      {Object.keys(groupedMembers).map((team,id) => (
        <div key={id} className="max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="py-10 mx-16 my-2.5">
                <h2 className="text-4xl font-bold text-[#000] underline">{team}</h2>
            </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {groupedMembers[team].map((speaker, id) => (
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
      ))}
      <Contact />
    </div>
  )
}

export default Organizing