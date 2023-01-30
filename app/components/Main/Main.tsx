import React from 'react';

// Components
import AboutUs from '../AboutUs/AboutUs';
import Hero from '../Hero/Hero';
import TechnologiesBlock from '../TechnologiesBlock/TechnologiesBlock';
import Steps from '../Steps/Steps';
import FrequentlyQuestions from '../FrequentlyQuestions/FrequentlyQuestions';
import Review from '../Review/Review';
import ContactUs from '../ContactUs/ContactUs';

export default function Main() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <TechnologiesBlock />
      <Steps />
      <FrequentlyQuestions />
      <Review />
      <ContactUs />
    </main>
  );
}
