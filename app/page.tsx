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
<<<<<<< HEAD
=======
import ConferenceSchedule from '../components/Dayschedule';
>>>>>>> 06a194c (Integrated the changes daysschedule and other minor changes)

export default function Page() {
    return <div>
      <Hero/>
      <AboutUs />
      <Sponsorship/>
      <Attractions/>
      <Topics />
<<<<<<< HEAD
=======
      <ConferenceSchedule/>
>>>>>>> 06a194c (Integrated the changes daysschedule and other minor changes)
      <Submission/>
      <Schedule/>
      <KeynoteSpeakers/>
      <Contact/>
    </div>
  }
