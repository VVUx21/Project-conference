import React from 'react';
import Contact from "../components/contact";
import Hero from '../components/hero';
import KeynoteSpeakers from '../components/ourteam';

export default function Page() {
    return <div>
      <Hero/>
      <h1 className="text-3xl font-bold underline"></h1>
      <KeynoteSpeakers/>
      <Contact/>
    </div>
  }
