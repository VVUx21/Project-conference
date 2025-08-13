'use client';
import React from 'react';

interface ScheduleItem {
  id: number;
  title: string;
  date: string;
  description: string;
  color: string;
  bgGradient: string;
}

const Schedule: React.FC = () => {
  const scheduleData: ScheduleItem[] = [
    {
      id: 1,
      title: "Paper Submission Opens",
      date: "15 March 2025",
      description: "Start submitting your research papers for CVMI 2025",
      color: "from-orange-500 to-orange-600",
      bgGradient: "bg-gradient-to-br from-orange-50 to-orange-100"
    },
    {
      id: 2,
      title: "Submission Deadline",
      date: "5 July 2025",
      description: "Final deadline for paper submissions. Extended due to multiple requests - no further extensions will be granted.",
      color: "from-orange-500 to-orange-600",
      bgGradient: "bg-gradient-to-br from-orange-50 to-orange-100"
    },
    {
      id: 3,
      title: "Acceptance Notification",
      date: "18 August 2025",
      description: "Authors will receive notification about paper acceptance",
      color: "from-orange-500 to-orange-600",
      bgGradient: "bg-gradient-to-br from-orange-50 to-orange-100"
    },
    {
      id: 4,
      title: "Early Bird Registration",
      date: "31 August 2025",
      description: "Register early and save on conference fees",
      color: "from-orange-500 to-orange-600",
      bgGradient: "bg-gradient-to-br from-orange-50 to-orange-100"
    },
    {
      id: 5,
      title: "Camera Ready Submission",
      date: "15 September 2025",
      description: "Submit final camera-ready version of accepted papers",
      color: "from-orange-500 to-orange-600",
      bgGradient: "bg-gradient-to-br from-orange-50 to-orange-100"
    }
  ];

  // Create an infinite array by repeating the schedule data
  const infiniteScheduleData = Array.from({ length: 20 }, (_, index) => ({
    ...scheduleData[index % scheduleData.length],
    id: scheduleData[index % scheduleData.length].id + Math.floor(index / scheduleData.length) * 100
  }));

  return (
    <section
      id="schedule"
      className="w-full text-black flex flex-col py-10 px-5 md:px-20"
      style={{ minHeight: "384px" }}
    >
      <h1
        className="md:text-5xl text-3xl mb-10 font-bold underline text-[#CC5F00] relative"
        style={{
          fontFamily: "Akhbar, sans-serif",
          fontWeight: 700,
          lineHeight: "100%",
          textTransform: "capitalize",
          textDecorationStyle: "solid",
        }}
      >
        Schedule & Agenda
      </h1>
      
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll-horizontal p-8 space-x-6 w-max">
          {infiniteScheduleData.map((item) => (
            <div
              key={item.id}
              className={`flex-shrink-0 w-80 h-64 ${item.bgGradient} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 backdrop-blur-sm overflow-hidden group`}
            >
              <div className="p-6 h-full flex flex-col justify-between relative">
                {/* Icon and Date Header */}
                <div className="flex items-center justify-end mb-4">
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                      Date
                    </div>
                    <div className="text-lg font-bold text-gray-800">
                      {item.date}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#CC5F00] transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="flex-1">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className={`absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-r ${item.color} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-horizontal {
          animation: scroll-horizontal 40s linear infinite;
        }
        
        .animate-scroll-horizontal:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Schedule;
