import React from 'react';
import Contact from "../components/contact";
import Hero from '../components/hero';
import KeynoteSpeakers from '../components/ourteam';
import AboutUs from "../components/AboutUs";
import Topics from "../components/Topics";
import Attractions from '../components/Attraction';
import Schedule from '../components/Schedule';
import Submission from '../components/Submission';
import Sponsorship from '../components/Sponsors';
import ConferenceSchedule from '../components/Dayschedule';

export default function Page() {
    return <div>
      <Hero/>
      <AboutUs />
      <Sponsorship/>
      <Attractions/>
      <Topics />
      <ConferenceSchedule/>
      <Submission/>
      <Schedule/>
      <KeynoteSpeakers/>
      <Contact/>
    </div>
  }
