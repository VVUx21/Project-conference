import React from 'react'
import Navbar from '../components/Navbar';
import { Calendar, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <div
        id='home'
        className="relative overflow-hidden bg-black"
        style={{ height: 'calc(100vh - 2rem)',
        backgroundImage: 'url(https://res.cloudinary.com/dgtdkqfsx/image/upload/v1741620271/image_2_t792t1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        }}
    >
        <Navbar/>
        <section className="relative xl:py-48 md:py-32 px-6 sm:px-8 py-36 lg:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center lg:text-left">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide leading-tight mb-8">
            International Conference on <br className="hidden sm:block" />
            Computer Vision and Machine <br className="hidden sm:block" />
            Intelligence CVMI 2025
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-lg mb-4">
            <div className="flex items-center gap-2">
              <Calendar />
              <span>12-13 October 2025</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row text-left sm:items-start gap-2 text-sm md:text-lg">
            <div className="flex items-start gap-2">
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
  )
}

export default Hero