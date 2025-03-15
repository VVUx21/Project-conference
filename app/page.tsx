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
      <AboutUs />
      <Attractions/>
      <Topics />
      <Submission/>
      <Schedule/>
      <KeynoteSpeakers/>
      <Contact/>
    </div>
  }
