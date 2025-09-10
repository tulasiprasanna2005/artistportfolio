import React from "react";
import './Contact.css'

function Contact() {
  return (
    <div className="contact-section">
      <h1>Contact</h1>
      <form className="contact-form">
        <label>Name:</label><br />
        <input type="text" placeholder="Enter your name" /><br /><br />

        <label>Email:</label><br />
        <input type="email" placeholder="Enter your email" /><br /><br />

        <label>Message:</label><br />
        <textarea placeholder="Write your message"></textarea><br /><br />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
