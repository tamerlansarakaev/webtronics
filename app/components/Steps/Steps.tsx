import React from 'react';

import StepsItem from './StepsItem/StepsItem';
import { ReactSVG } from 'react-svg';

interface IStep {
  headerText: string;
  positionStroke: 'right' | 'left';
  title: string;
  description: string;
}

export default function Steps() {
  const [steps] = React.useState<IStep[]>([
    {
      headerText: 'Step 1',
      positionStroke: 'right',
      title: 'Introduction to Front-End',
      description:
        'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.',
    },
    {
      headerText: 'Step 2',
      positionStroke: 'left',
      title: 'Overview of Development',
      description:
        'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.',
    },
    {
      headerText: 'Step 3',
      positionStroke: 'right',
      title: 'Introduction to Front-End',
      description:
        'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.',
    },
    {
      headerText: 'Step 4',
      positionStroke: 'left',
      title: 'Overview of Development',
      description:
        'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.',
    },
    {
      headerText: 'Step 5',
      positionStroke: 'right',
      title: 'Introduction to Front-End',
      description:
        'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.',
    },
    {
      headerText: 'Step 6',
      positionStroke: 'left',
      title: 'Overview of Development',
      description:
        'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.',
    },
  ]);

  return (
    <div className="steps-block">
      <h2 className="title">Steps</h2>
      <div className="steps-list">
        <div className="steps-first-column">
          {steps &&
            steps
              .filter((_, i) => i % 2 == 0)
              .map((state, i) => {
                return (
                  <StepsItem
                    headerText={state.headerText}
                    positionStroke={state.positionStroke}
                    title={state.title}
                    description={state.description}
                    key={i}
                  />
                );
              })}
        </div>
        <div className="steps-line"></div>
        <div className="steps-second-column">
          {steps &&
            steps
              .filter((_, i) => i % 2 != 0)
              .map((state, i) => {
                return (
                  <StepsItem
                    headerText={state.headerText}
                    positionStroke={state.positionStroke}
                    title={state.title}
                    description={state.description}
                    key={i}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
}
