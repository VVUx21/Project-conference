"use client";
import React from "react";

interface TopicItem {
  id: number;
  title: string;
  topics: string[];
  color: string;
  bgGradient: string;
}

const Topics: React.FC = () => {
  const topicsData: TopicItem[] = [
    {
      id: 1,
      title: "AI & Intelligence",
      topics: [
        "AI in Biometrics, Forensics, Content protection",
        "Trustworthy, Explainable and Ethical AI",
        "Machine Learning",
        "Deep Learning",
        "Image/Video Security, Blockchain for Image and Video Security",
        "Audio and Video Deepfakes",
        "Computational Intelligence",
      ],
      color: "from-orange-500 to-orange-600",
      bgGradient: "bg-gradient-to-br from-orange-50 to-orange-100"
    },
    {
      id: 2,
      title: "Recognition & Processing",
      topics: [
        "Face, Iris, Emotion, Sign Language and Gesture Recognition",
        "Image/video processing for Autonomous Vehicles",
        "3D image/video processing",
        "Image Enhancement/Super Resolution / Restoration",
        "Action and Event Detection/Recognition, Motion and Tracking",
        "Medical Image and Video Analysis",
        "Image/Video Retrieval",
        "Vision based Human GAIT Analysis",
        "Document and Synthetic Visual Processing",
      ],
      color: "from-orange-500 to-orange-600",
      bgGradient: "bg-gradient-to-br from-orange-50 to-orange-100"
    },
    {
      id: 3,
      title: "Advanced Vision",
      topics: [
        "Remote sensing, Multispectral/Hyperspectral image Processing",
        "Datasets and Evaluation",
        "Segmentation and Shape Representation",
        "Image/Video Scene Understanding",
        "Human Computer Interaction",
        "Visual Sensor Hardware",
        "Document Image Analysis",
        "Compressed Image/Video Analytics",
        "Other Computer Vision Applications",
      ],
     color: "from-orange-500 to-orange-600",
      bgGradient: "bg-gradient-to-br from-orange-50 to-orange-100"
    },
    {
      id: 4,
      title: "Intelligent Systems",
      topics: [
        "Brain Computer Interaction",
        "Hand-sensor based Intelligence",
        "Robotic Intelligence",
        "Light-weight Intelligent Systems",
      ],
      color: "from-orange-500 to-orange-600",
      bgGradient: "bg-gradient-to-br from-orange-50 to-orange-100"
    }
  ];

  const infiniteTopicsData = Array.from({ length: 16 }, (_, index) => ({
    ...topicsData[index % topicsData.length],
    id: topicsData[index % topicsData.length].id + Math.floor(index / topicsData.length) * 100
  }));

  return (
    <div id="topics" className="md:p-8 lg:p-16 relative p-10">
      <h1 className="md:text-5xl text-3xl font-bold underline text-[#CC5F00] mb-4 sm:mb-6 text-left relative">
        Topics of CVMI-2025
      </h1>
      
      <div className="lg:px-20 md:px-10">
        <div className="relative overflow-hidden md:mt-16 mb-16">
          <div className="flex animate-scroll-horizontal p-8 space-x-6 w-max">
            {infiniteTopicsData.map((item) => (
              <div
                key={item.id}
                className={`flex-shrink-0 w-96 min-h-[400px] md:h-[450px] ${item.bgGradient} rounded-lg no-scrollbar shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 backdrop-blur-sm overflow-y-scroll group relative`}
              >
                <div className="p-6 h-full flex flex-col">
                  {/* Icon and Title Header */}
                  <div className="flex items-center justify-end mb-6">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#CC5F00] transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>

                  {/* Topics List */}
                  <div className="flex-1">
                    <ul className="list-disc pl-5 space-y-2">
                      {item.topics.map((topic, i) => (
                        <li 
                          key={i} 
                          className="text-sm font-medium md:font-bold sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed hover:text-[#CC5F00] transition-colors duration-200"
                        >
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Decorative Element */}
                  <div className={`absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-r ${item.color} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fade Effect on Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
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
          animation: scroll-horizontal 50s linear infinite;
        }
        
        .animate-scroll-horizontal:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Topics;