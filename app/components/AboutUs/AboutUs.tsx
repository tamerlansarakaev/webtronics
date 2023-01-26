import React from 'react';
import { ReactSVG } from 'react-svg';
import Image from 'next/image';

function AboutUs() {
  return (
    <div>
      <div className="about-us">
        <h2 className="title">About Us</h2>
        <div className="information-list">
          <div className="mentors">
            <h3 className="mentors-title">Mentors</h3>
            <div className="line">
              <ReactSVG
                src={require('../../../public/mentors/line.svg').default.src}
              />
            </div>
            <div className="mentors-list">
              <figure className="mentor">
                <Image
                  src={require('../../../public/mentors/mentor-3.jpg').default}
                  className={'mentor-image'}
                  height={184}
                  width={184}
                  alt={'Mentor'}
                />
                <figcaption className="mentor-title">Wade Warren</figcaption>
                <p className="mentor-description">
                  Front-end engineers work closely with designers
                </p>
              </figure>
              <figure className="mentor">
                <Image
                  src={require('../../../public/mentors/mentor-1.jpg').default}
                  className={'mentor-image'}
                  width={184}
                  height={184}
                  alt={'Mentor'}
                />
                <figcaption className="mentor-title">Kristin Watson</figcaption>
                <p className="mentor-description">
                  Front-end engineers work closely with designers
                </p>
              </figure>
              <figure className="mentor">
                <Image
                  src={require('../../../public/mentors/mentor-2.jpg').default}
                  className={'mentor-image'}
                  width={184}
                  height={184}
                  alt={'Mentor'}
                />
                <figcaption className="mentor-title">Robert Fox</figcaption>
                <p className="mentor-description">
                  Front-end engineers work closely with designers
                </p>
              </figure>
            </div>
          </div>
          <p className="other-information">
            Front-end engineers work closely with designers to make websites
            beautiful, functional, and fast. This Career Path will teach you not
            only the necessary languages and technologies, but how to think like
            a front-end engineer, too.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
