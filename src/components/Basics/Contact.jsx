import React from "react";
import "../../styles/Contact.css";

function Contact() {
  return (
    <main className="contact-main">
      <h1>How to reach us:</h1>
      <p>
        I'm baby est gatekeep intelligentsia, aliquip chillwave master cleanse
        poutine photo booth duis af yuccie forage hella kogi cupidatat.
      </p>
      <form className="contact-form-dummy">
        <div className="name-email">
          <label className="contact-form-label" htmlFor="full-name">
            Full Name:
          </label>
          <input
            className="contact-input"
            type="text"
            name="full-name"
            required
          />
          <label className="contact-form-label" htmlFor="email">
            Email:
          </label>
          <input type="email" name="email" required />
        </div>
        <div className="message-box">
          <label className="contact-form-label" htmlFor="contact-message">
            Message:
          </label>
          <textarea
            className="contact-form-textarea"
            name="contact-message"
            required
          />
        </div>
        <div className="contact-button">
          <button>Submit</button>
        </div>
      </form>
    </main>
  );
}

export default Contact;
