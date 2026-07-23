import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          alert(
            "You have successfully sent an email to the magnificent Kate Ortiz!",
          );
        },
        (error) => {
          alert(error.text);
        },
      );
  };

  return (
    <div className="contact-container">
      <br></br>
      <h1>Contact Kate Ortiz</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="user-name">Name</label>
        <input type="text" id="user-name" name="user-name" />
        <label htmlFor="user-email">Email</label>
        <input required type="email" id="user-email" name="user-email" />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" />
        <br></br>
        <input className="button" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
