import React from "react";
import "../../styles/Basics.css";

function Contact() {
  return (
    <main className="contact-main">
      <h1>How to reach us:</h1>
      <form className="contact-form">
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
