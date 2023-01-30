import React from 'react';

type Props = {};

export default function ContactUs() {
  return (
    <div className="contact-us">
      <div className="contact-us-container">
        <h2 className="title">Contact us</h2>
        <p className="subtitle">
          Do you have any kind of help please contact with us.
        </p>
        <form className="contact-form">
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </form>
      </div>
    </div>
  );
}
