import React from 'react';
import Contact from "./Components/contact";
import Hero from '../components/hero';

export default function Page() {
    return <div>
      <Hero/>
      <h1 className="text-3xl font-bold underline"></h1>
      <Contact/>
    </div>
  }
