import React from 'react';
import { ReactSVG } from 'react-svg';

interface IStepsItem {
  headerText: string;
  title: string;
  description: string;
  positionStroke: string;
}

export default function StepsItem({
  headerText,
  title,
  description,
  positionStroke,
}: IStepsItem) {
  return (
    <div className="step-item">
      {positionStroke === 'left' && (
        <ReactSVG
          src={require('@/public/icons/guideLines.svg').default.src}
          className="guide-right-line"
        />
      )}
      <ReactSVG
        src={require('@/public/icons/Stroke step-item.svg').default.src}
        className={`step-stroke ${positionStroke}`}
      />
      <div className="step-elements">
        <h4 className="header-title">{headerText}</h4>
        <span className="title">{title}</span>
        <p className="description">{description}</p>
      </div>

      {positionStroke === 'right' && (
        <ReactSVG
          src={require('@/public/icons/guideLines.svg').default.src}
          className="guide-line-left"
        />
      )}
    </div>
  );
}
