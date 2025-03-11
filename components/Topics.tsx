"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "./Topics.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { VscArrowCircleRight, VscArrowCircleLeft } from "react-icons/vsc";

const Topics = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const slide1 = [
    "AI in Biometrics, Forensics, Content protection",
    "Trustworthy, Explainable and Ethical AI",
    "Machine Learning",
    "Deep Learning",
    "Image/Video Security, Blockchain for Image and Video Security",
    "Audio and Video Deepfakes",
    "Computational Intelligence",
  ];
  const slide2 = [
    "Face, Iris, Emotion, Sign Language and Gesture Recognition",
    "Image/video processing for Autonomous Vehicles",
    "3D image/video processing",
    "Image Enhancement/Super Resolution / Restoration",
    "Action and Event Detection/Recognition, Motion and Tracking",
    "Medical Image and Video Analysis",
    "Image/Video Retrieval",
    "Vision based Human GAIT Analysis",
    "Document and Synthetic Visual Processing",
  ];
  const slide3 = [
    "Remote sensing, Multispectral/Hyperspectral image Processing",
    "Datasets and Evaluation",
    "Segmentation and Shape Representation",
    "Image/Video Scene Understanding",
    "Human Computer Interaction",
    "Visual Sensor Hardware",
    "Document Image Analysis",
    "Compressed Image/Video Analytics",
    "Other Computer Vision Applications",
  ];
  const slide4 = [
    "Brain Computer Interaction",
    "Hand-sensor based Intelligence",
    "Robotic Intelligence",
    "Light-weight Intelligent Systems",
  ];
  const items = [
    { title: "", description: slide1 },
    { title: "", description: slide2 },
    { title: "", description: slide3 },
    { title: "", description: slide4 },
  ];

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };
  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div id="topics" className="md:p-8 lg:p-16 relative p-10">  
      <h1 className="md:text-5xl text-3xl  font-bold underline text-[#CC5F00] mb-4 sm:mb-6 text-left relative">
        Topics of CVMI-2025
      </h1>
      
        <div className="lg:px-20 md:px-10">
      <Slider ref={sliderRef} {...settings}>
        {items.map((item, index) => (
          <div
            key={index}
            className="md:mt-16 mb-16 sm:pl-16 pl-6 bg-[#FFDBBC] relative lg:min-h-[400px] md:h-[450px] h-[440px] flex flex-col justify-center items-center rounded-lg border-1"
          >
            <div className="mb-4"></div>
            
            <ul className="list-circle pl-5 ">
              {item.description.map((desc, i) => (
                <li key={i} className="mb-2 text-sm font-medium md:font-bold sm:text-lg md:text-xl lg:text-2xl">
                  {desc} 
                </li>
              ))}
            </ul>
       
          
            {index > 0 && (
              <div className="absolute top-1/2 left-0 -translate-y-1/2">
                <button
                  onClick={goToPrev}
                  className="text-black p-2 cursor-pointer"
                >
                  <VscArrowCircleLeft size={20} />
                </button>
              </div>
            )}
            <div className="absolute top-1/2 right-0 -translate-y-1/2">
              <button
                onClick={goToNext}
                className="text-black p-2 cursor-pointer"
              >
                <VscArrowCircleRight size={20} />
              </button>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      </div>
  );
};

export default Topics;
