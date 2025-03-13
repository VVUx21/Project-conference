import React from 'react';
import Contact from "../components/contact";
import Hero from '../components/hero';
import KeynoteSpeakers from '../components/ourteam';
import AboutUs from "../components/AboutUs";
import Topics from "../components/Topics";
import Attractions from '../components/Attraction';
import Schedule from '../components/Schedule';
import Submission from '../components/Submission';

export default function Page() {
    return <div>
      <Hero/>
      <h1 className="text-3xl font-bold underline"></h1>
      <AboutUs />
      <Attractions/>
      <Topics />
      <Submission/>
      <KeynoteSpeakers/>
      <Contact/>
    </div>
  }
