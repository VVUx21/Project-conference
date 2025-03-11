import React from 'react';
import Contact from "./Components/contact";
import Hero from '../components/hero';
import AboutUs from "./Components/AboutUs";
import Topics from "./Components/Topics";

export default function Page() {
    return <div>
      <Hero/>
      <h1 className="text-3xl font-bold underline"></h1>
      <AboutUs />
      <Topics />
      <Contact/>
    </div>
  }
