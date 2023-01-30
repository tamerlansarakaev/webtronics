import Image from 'next/image';
import React from 'react';
import { ReactSVG } from 'react-svg';

interface Props {
  title: string;
  result: string;
}

export default function AnswerItem({ title, result }: Props) {
  const [status, setStatus] = React.useState<boolean>(false);

  return (
    <div
      className={`answer-item ${status ? 'active-wrapper-answer' : ''}`}
      onClick={() => setStatus(!status)}
    >
      <div className="answer-item-header">
        <h4 className="answer-item-title">{title}</h4>
        <span>
          {!status ? (
            <span style={{ fontSize: '30px', fontFamily: 'Inter' }}>+</span>
          ) : (
            <span style={{ fontSize: '20px', fontFamily: 'Inter' }}>—</span>
          )}
        </span>
      </div>
      {status && <p className="answer-to-question">{result}</p>}
    </div>
  );
}
