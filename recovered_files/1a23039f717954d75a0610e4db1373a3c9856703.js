import React from 'react';
import Contact from "../components/contact";
import Hero from '../components/hero';
import KeynoteSpeakers from '../components/ourteam';
import AboutUs from "./Components/AboutUs";
import Topics from "./Components/Topics";

export default function Page() {
    return <div>
      <Hero/>
      <h1 className="text-3xl font-bold underline"></h1>
      <AboutUs />
      <Topics />
      <KeynoteSpeakers/>
      <Contact/>
    </div>
  }
