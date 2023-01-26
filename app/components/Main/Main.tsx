import React from 'react';

// Components
import AboutUs from '../AboutUs/AboutUs';
import Hero from '../Hero/Hero';
import TechnologiesBlock from '../TechnologiesBlock/TechnologiesBlock';

export default function Main() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <TechnologiesBlock />
    </main>
  );
}
