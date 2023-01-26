import React from 'react';
import Button from '../UI/Button/Button';

const Hero = () => {
  return (
    <div className="hero">
      <article className="top-text">
        <h1 className="title-hero-block">Front-End</h1>
        <p className="subtitle-text">
          Make UIs and websites beautiful, functional, and fast. Cover all the
          topics that expensive bootcamps teach (and more).
        </p>
      </article>
      <div className="bottom-text">
        <div className="button">
          <Button className="button-hero standart-button">
            Start my career change
          </Button>
        </div>
        <div className="title-bottom">
          <h1>Developer</h1>
        </div>
      </div>
      <h3 className="bottom-hero-title">Courses</h3>
    </div>
  );
};

export default Hero;
