'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import { Calendar, MapPin } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const images = [
    'https://res.cloudinary.com/dgtdkqfsx/image/upload/v1741620271/image_2_t792t1.png',
    'https://res.cloudinary.com/dgtdkqfsx/image/upload/v1741779175/WhatsApp_Image_2025-03-12_at_16.39.09_a2b91448_gf1vpc.jpg',
    'https://res.cloudinary.com/dgtdkqfsx/image/upload/v1741774998/WhatsApp_Image_2025-03-12_at_10.50.21_ff755a16_nithpd.jpg',
    'https://res.cloudinary.com/dgtdkqfsx/image/upload/v1741774950/IMG-20250312-WA0008_1_inru0k.jpg',
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
  };

  return (
    <div id='home'
    style={{height:'calc(100vh - 2rem)'}}
    className='relative overflow-hidden h-screen'>
      <Navbar />
      <div className='absolute inset-0'>
        <Slider {...settings} className='w-full h-full'>
          {images.map((src, index) => (
            <div key={index} className='w-full h-full'>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className='w-full h-full object-cover object-center'
                style={{height:'100dvh'}}
              />
            </div>
          ))}
        </Slider>
      </div>
      <section className='relative w-full h-full bg-black/60 xl:py-48 md:py-32 px-6 sm:px-8 py-36 lg:px-12 text-white z-10'>
        <div className='max-w-7xl mx-auto my-auto'>
          <div className='text-center lg:text-left p-6 rounded-lg'>
            <p className='text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide leading-tight mb-8'>
              International Conference on <br className='hidden sm:block' />
              Computer Vision and Machine <br className='hidden sm:block' />
              Intelligence CVMI 2025
            </p>
            <div className='flex flex-col sm:flex-row sm:items-center gap-2 text-lg mb-4'>
              <div className='flex items-center gap-2'>
                <Calendar />
                <span>12-13 October 2025</span>
              </div>
            </div>
            <div className='flex flex-col sm:flex-row text-left sm:items-start gap-2 text-sm md:text-lg'>
              <div className='flex items-start gap-2'>
                <MapPin />
                <span>
                  Department of Electronics and Communication Engineering <br />
                  National Institute of Technology (NIT), Rourkela. <br />
                  Rourkela, Odisha, India - 769008
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
