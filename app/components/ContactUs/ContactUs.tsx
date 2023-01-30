import React from 'react';
import Button from '../UI/Button/Button';
import { postData } from '../../../pages/api/post';

export default function ContactUs() {
  const onRequest = async (event: any) => {
    event.preventDefault();
    const formData = {
      name: event.target[0].value,
      phone: event.target[1].value,
      email: event.target[2].value,
    };
    if (formData.email) {
      postData({
        url: 'https://webtronics-4ef53-default-rtdb.europe-west1.firebasedatabase.app/users.json',
        data: { ...formData },
      });
    }
  };

  return (
    <div className="contact-us">
      <div className="contact-us-container">
        <h2 className="title">Contact us</h2>
        <p className="subtitle">
          Do you have any kind of help please contact with us.
        </p>
        <form className="contact-form" onSubmit={onRequest}>
          <input
            type="text"
            className="contact-input"
            required
            placeholder="Name"
          />
          <input
            type="text"
            className="contact-input"
            required
            placeholder="Phone"
          />
          <input
            type="text"
            className="contact-input"
            placeholder="E-mail"
            name="email"
            required
          />
          <Button>Send</Button>
        </form>
      </div>
    </div>
  );
}
