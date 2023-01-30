import React from 'react';
import { ReactSVG } from 'react-svg';
import AnswerItem from './AnswerItem/AnswerItem';

type Props = {};

export default function FrequentlyQuestions({}: Props) {
  return (
    <div className="frequently-questions-block">
      <h2 className="title">Frequently Asked Questions</h2>
      <div className="frequently-elements">
        <aside className="information-this-block">
          <p>
            Do you have any kind of questions?
            <br />
            We are here to help.
          </p>
          <ReactSVG
            src={require('@/public/icons/question.svg').default.src}
            className="question-icon"
          />
        </aside>
        <div className="answers-question">
          <AnswerItem
            title="What is the price?"
            result="Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too."
          />
          <AnswerItem
            title="What is the price?"
            result="Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too."
          />
          <AnswerItem
            title="What is the price?"
            result="Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too."
          />
          <AnswerItem
            title="What is the price?"
            result="Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too."
          />
          <AnswerItem
            title="What is the price?"
            result="Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too."
          />
        </div>
      </div>
    </div>
  );
}
